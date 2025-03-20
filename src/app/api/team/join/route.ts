import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prismadb";
import { redis } from "@/lib/db/redis";

export async function PUT(req: NextRequest) {
  try {
    const session = await auth();
    const redisClient = await redis;

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const body = await req.json();
    const { joincode } = body;

    if (!joincode) {
      return NextResponse.json({ error: "Join code is required" }, { status: 400 });
    }

    const team = await prisma.team.findFirst({
      where: { joinCode: joincode },
      include: {
        members: true
      }
    });

    if (!team) {
      return NextResponse.json({ error: "Invalid join code" }, { status: 404 });
    }
    if (team.maxMembers === team.members.length) {
      return NextResponse.json({ error: "Team is full" }, { status: 400 });
    }
    const isMember = team.members.some(member => member.id === session.user.id);
    if (isMember) {
      return NextResponse.json({ error: "Already a member of this team" }, { status: 400 });
    }


    const mentee = await prisma.mentee.findFirst({
      where: { id: session.user.id }
    });

    if (!mentee) {
      return NextResponse.json({ error: "User is not a mentee" }, { status: 400 });
    }

    await prisma.team.update({
      where: { id: team.id },
      data: {
        members: {
          connect: { id: mentee.id }
        }
      }
    });

    const teamKeys = await redisClient.keys('teams:*');
    await Promise.all(teamKeys.map(key => redisClient.del(key)));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Team join error:", error);
    return NextResponse.json({ error: "Failed to join team" }, { status: 500 });
  }
}