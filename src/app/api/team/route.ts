import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { redis } from "@/lib/db/redis";

export async function GET() {
  try {
    const redisClient = await redis;
    const cacheKey = 'teams:all';
    
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }

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

    const { name, description, members } = await req.json();
    if (!members) {
      return NextResponse.json(
        { error: "At least one member is required" },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const users = await prisma.mentee.findMany({
      where: {
        user: {
          rollNo: {
            in: members,
          },
        },
      },
    });


    if (users.length !== members.length || users.length < 0) {
      return NextResponse.json({ error: "Members not found" }, { status: 400 });
    }

    const team = await prisma.team.create({
      data: {
        name,
        description,
        members: {
          connect: users.map((user) => ({ id: user.id })),
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

    // Invalidate cache after creating new team
    const redisClient = await redis;
    await redisClient.del('teams:all');

    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    console.error("Team creation error:", error);
    return NextResponse.json(
      { error: "Failed to create team" },
      { status: 500 }
    );
  }
}
