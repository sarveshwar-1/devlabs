import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { redis } from "@/lib/db/redis";
import { auth } from "@/lib/auth";
import { console } from "inspector";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log("HI");
    const projectId = params.id;
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID required" },
        { status: 400 }
      );
    }
    console.log("HI1");
    const redisClient = await redis;
    console.log("HI2");
    const cacheKey = `project:${projectId}`;
    console.log("HI3");
    // Try to get from cache
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }
    console.log("HI4");

    // If not in cache, fetch from database
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        team: {
          include: {
            members: {
              include: {
                user: {
                  select: {
                    name: true,
                    id: true,
                  },
                },
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

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Cache the result
    await redisClient.setex(cacheKey, 1800, JSON.stringify(project)); // 30 minutes cache

    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
