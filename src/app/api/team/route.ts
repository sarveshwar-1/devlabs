import { auth } from "@/lib/auth";
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { redis } from "@/lib/db/redis";

export async function GET(request: NextRequest) {
  try {
    const teamid = request.nextUrl.searchParams.get("teamid");
    if (teamid) {
      const team = await prisma.team.findUnique({
        where: {
          id: teamid,
        },
        include: {
          members: {
            include: {
              user: true,
            },
          },
        },
      });
      return NextResponse.json(team, { status: 200 });
    }
    const session = await auth();
    const redisClient = await redis;
    if (!session?.user.email) {
      return NextResponse.json(
        {
          error: "Not Authorised",
        },
        {
          status: 401,
        }
      );
    }

    const cacheKey = "teams:" + session.user.id;
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }

    // Handle ADMIN access - can see all teams
    if (session?.user?.role === "ADMIN") {
      const teams = await prisma.team.findMany({
        include: {
          members: {
            include: {
              user: true,
            },
          },
        },
      });
      await redisClient.setex(cacheKey, 3600, JSON.stringify(teams));
      return NextResponse.json(teams, { status: 200 });
    }

    // Handle MENTOR access - can only see teams with their mentored projects
    if (session?.user?.role === "MENTOR") {
      const mentor = await prisma.mentor.findFirst({
        where: {
          id: session.user.id,
        },
      });

      const teams = await prisma.team.findMany({
        where: {
          Project: {
            some: {
              mentor: {
                some: {
                  id: mentor?.id,
                },
              },
            },
          },
        },
        include: {
          members: {
            include: {
              user: true,
            },
          },
        },
      });

      await redisClient.setex(cacheKey, 3600, JSON.stringify(teams));
      return NextResponse.json(teams, { status: 200 });
    }

    // Handle MENTEE access - can only see their own teams
    if (session?.user?.role === "MENTEE") {
      const teams = await prisma.team.findMany({
        where: {
          OR: [
            { teamLeaderId: session.user.id },
            { members: { some: { id: session.user.id } } },
          ],
        },
        include: {
          members: {
            include: {
              user: true,
            },
          },
        },
      });

      await redisClient.setex(cacheKey, 3600, JSON.stringify(teams));
      return NextResponse.json(teams, { status: 200 });
    }

    // If role is not recognized, return unauthorized
    return NextResponse.json({ error: "Invalid role" }, { status: 401 });
  } catch (error) {
    console.error("Team fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch teams" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user.email) {
      return NextResponse.json(
        {
          error: "Not Authorised",
        },
        {
          status: 401,
        }
      );
    }

    const { name, description, memberIds, maxMembers } = await req.json();
    if (maxMembers < memberIds.length + 1) { 
      return NextResponse.json(
        { error: "Max members should be greater than the number of members" },
        { status: 400 }
      );
    }
    const duplicate_team = await prisma.team.findFirst({
      where: {
        name,
      },
    });
    if (duplicate_team) {
      return NextResponse.json(
        { error: "Team with this name already exists" },
        { status: 400 }
      );
    }

    if (session.user.role !== "MENTEE") {
      console.log("Validation checks:", {
        hasMemberIds: !!memberIds,
        memberIdsLength: memberIds?.length,
        hasName: !!name,
      });

      if (!memberIds || memberIds.length === 0) {
        return NextResponse.json(
          { error: "At least one member is required" },
          { status: 400 }
        );
      }
    }
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const teamLeader = await prisma.mentee.findFirst({
      where: {
        user: {
          id: session.user.id,
        },
      },
    });
    console.log("Found team leader:", teamLeader);

    const users = await prisma.mentee.findMany({
      where: {
        user: {
          id: {
            in: memberIds,
          },
        },
      },
    });
    if (users.length !== memberIds.length || users.length < 0) {
      console.log(NextResponse);
      return NextResponse.json(
        { error: "memberIds not found" },
        { status: 400 }
      );
    }

    const teamCode = Math.random().toString(36).substring(2, 6).toUpperCase();

    // If teamLeader is null, use the first user in the members list as the leader
    const finalTeamLeader = teamLeader || users[0];

    // Only add session user to members if they are the team leader
    if (teamLeader !== null) {
      memberIds.push(session.user.id);
      users.push(teamLeader);
    }
    const globalSettings = await prisma.globalSettings.findFirst({
      where: { id: 1 },
    });
    const team = await prisma.team.create({
      data: {
        name,
        description,
        teamLeader: {
          connect: {
            id: finalTeamLeader.id,
          },
        },
        members: {
          connect: users.map((user) => ({ id: user.id })),
        },
        joinCode: teamCode,
        maxMembers,
        freezed: globalSettings?.globalTeamFreeze,
      },
    });

    // Invalidate cache after creating new team
    const redisClient = await redis;
    const teamKeys = await redisClient.keys("teams:*");
    if (teamKeys.length > 0) {
      await redisClient.del(teamKeys);
    }
    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.error("Team creation error:", error);
    return NextResponse.json(
      { error: "Failed to create team" },
      { status: 500 }
    );
  }
}
export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user.email) {
      return NextResponse.json(
        {
          error: "Not Authorised",
        },
        {
          status: 401,
        }
      );
    }

    const {
      id,
      name,
      description,
      memberIds,
      class: className,
      semester,
      maxMembers,
    } = await req.json();
    if (!memberIds) {
      return NextResponse.json(
        { error: "At least one member is required" },
        { status: 400 }
      );
    }
    const members = await prisma.mentee.findMany({
      where: {
        user: {
          id: {
            in: memberIds,
          },
        },
      },
    });
    if (!members) {
      return NextResponse.json(
        { error: "At least one member is required" },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (members.length !== members.length || members.length < 0) {
      return NextResponse.json({ error: "Members not found" }, { status: 400 });
    }
    if (!(maxMembers >= members.length)) {
      return NextResponse.json(
        { error: "Max members should be greater than or equal to the number of members" },
        { status: 400 }
      );
    }

    await prisma.team.update({
      where: { id: id },
      data: {
        name,
        description,
        class: className,
        semester,
        maxMembers,
        members: {
          set: members.map((user) => ({ id: user.id })),
        },
      },
    });

    const redisClient = await redis;
    const teamkeys = await redisClient.keys("teams:*");
    await redisClient.del(teamkeys);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Team update error:", error);
    return NextResponse.json(
      { error: "Failed to update team" },
      { status: 500 }
    );
  }
}
export async function DELETE(req: Request) {
  try {
    const session = await auth();
    if (!session?.user.email) {
      return NextResponse.json({ error: "Not Authorised" }, { status: 401 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // First disconnect all members
    await prisma.team.update({
      where: { id },
      data: {
        members: {
          set: [], // Remove all members first
        },
      },
    });

    // Then delete the team
    await prisma.team.delete({
      where: { id },
    });

    const redisClient = await redis;
    const teamkeys = await redisClient.keys("teams:*");
    await redisClient.del(teamkeys);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Team deletion error:", error);
    if (error.code === "P2003") {
      return NextResponse.json(
        {
          error: "Delete The projects associated with the team before deleting",
        },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: error.code }, { status: 500 });
  }
}
