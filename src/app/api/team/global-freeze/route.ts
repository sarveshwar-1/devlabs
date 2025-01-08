import { prisma } from "@/lib/db/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";

export async function PATCH(req: NextRequest) {
  try {
    const redisClient = await redis;
    const session = await auth();

    if (!session?.user.email) {
      return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const { globallyFrozen } = await req.json();

    // Update GlobalSettings
    await prisma.globalSettings.upsert({
      where: { id: 1 },
      update: { globalTeamFreeze: globallyFrozen },
      create: { globalTeamFreeze: globallyFrozen },
    });

    // Update all teams
    const updatedTeams = await prisma.team.updateMany({
      data: {
        freezed: globallyFrozen,
      },
    });

    // Clear Redis cache
    const keys = await redisClient.keys("teams:*");
    if (keys.length > 0) {
      await redisClient.unlink(...keys);
    }

    // Fetch the updated teams
    const teams = await prisma.team.findMany({
      include: {
        members: true,
      },
    });

    return NextResponse.json({
      isGloballyFrozen: globallyFrozen,
      teams: teams,
      teamsUpdated: updatedTeams.count,
    });
  } catch (error) {
    console.error("Error updating global freeze status:", error);
    return NextResponse.json(
      { error: "Failed to update global freeze status" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const globalSettings = await prisma.globalSettings.findFirst({
      where: { id: 1 },
    });

    return NextResponse.json({
      isGloballyFrozen: globalSettings?.globalTeamFreeze ?? false,
    });
  } catch (error) {
    console.error("Error fetching global freeze status:", error);
    return NextResponse.json(
      { error: "Failed to fetch global freeze status" },
      { status: 500 }
    );
  }
}
