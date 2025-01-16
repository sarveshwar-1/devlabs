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

    const { ProjFrozen } = await req.json();

    // Update GlobalSettings
    await prisma.globalProj.upsert({
      where: { id: 1 },
      update: { globalProjFreeze: ProjFrozen },
      create: { globalProjFreeze: ProjFrozen },
    });

    // Update all teams
    const updatedProj = await prisma.project.updateMany({
      data: {
        freezed: ProjFrozen,
      },
    });

    // Clear Redis cache
    const keys = await redisClient.keys("projects:*");
    if (keys.length > 0) {
      await redisClient.unlink(...keys);
    }

    // Fetch the updated projects with all necessary relationships
    const projects = await prisma.project.findMany({
      include: {
        team: {
          include: {
            members: {
              include: {
                user: true,
              },
            },
          },
        },
        mentor: {
          include: {
            user: true,
          },
        },
      },
    });

    return NextResponse.json({
      isGloballyFrozen: ProjFrozen,
      projs: projects,
      projsUpdated: updatedProj.count,
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
    const globalProjs = await prisma.globalProj.findFirst({
      where: { id: 1 },
    });

    return NextResponse.json({
      isGloballyFrozen: globalProjs?.globalProjFreeze ?? false,
    });
  } catch (error) {
    console.error("Error fetching global freeze status:", error);
    return NextResponse.json(
      { error: "Failed to fetch global freeze status" },
      { status: 500 }
    );
  }
}
