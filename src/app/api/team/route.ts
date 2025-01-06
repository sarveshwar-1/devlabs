import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { redis } from "@/lib/db/redis";

export async function GET() {
  try {
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
    const cacheKey = 'teams:' + session.user.id;
    const CashedData = await redisClient.get(cacheKey);
    if (CashedData) {
      return NextResponse.json(JSON.parse(CashedData));
    }
    if (session?.user?.role === 'MENTOR') {
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
    if (session?.user?.role === 'MENTEE') {
      const teams = await prisma.team.findMany({
        where: {
          OR: [
            { teamLeaderId: session.user.id },
            { members: { some: { id: session.user.id } } },
          ]
        }
        ,
        include: {
          members: {
            include: {
              user: true,
            },
          },
        },
      })
      await redisClient.setex(cacheKey, 3600, JSON.stringify(teams));
      return NextResponse.json(teams, { status: 200 });
    }
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

    const { name, description, memberIds, class: className, semester } = await req.json();
    if (!memberIds) {
      return NextResponse.json(
        { error: "At least one member is required" },
        { status: 400 }
      );
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
    memberIds.push(session.user.id);
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
      return NextResponse.json({ error: "memberIds not found" }, { status: 400 });
    }
    const teamCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    console.log('teamCode:', teamCode);
    const team = await prisma.team.create({
      data: {
        name,
        description,
        class: className,
        semester,
        teamLeader: {
          connect: {
            id: teamLeader?.id,
          },
        },
        members: {
          connect: users.map((user) => ({ id: user.id })),
        },
        joinCode: teamCode,
      }
    });

    // Invalidate cache after creating new team
    const redisClient = await redis;
    await redisClient.del('teams:' + session.user.id);
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

    const { id, name, description, memberIds, class: className, semester } = await req.json();
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
          }
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

    const team = await prisma.team.update({
      where: { id: id },
      data: {
        name,
        description,
        class: className,
        semester,
        members: {
          set: members.map((user) => ({ id: user.id })),
        },
      }
    });

    const redisClient = await redis;
    const teamkeys = await redisClient.keys('teams:*');
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
      return NextResponse.json(
        { error: "Not Authorised" },
        { status: 401 }
      );
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
    const teamkeys = await redisClient.keys('teams:*');
    await redisClient.del(teamkeys);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Team deletion error:", error);
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: "Delete The projects associated with the team before deleting" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: error.code },
      { status: 500 }
    );
  }
}