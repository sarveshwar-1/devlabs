import { NextResponse , NextRequest} from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { redis } from "@/lib/db/redis";
import {auth} from "@/lib/auth";

export async function GET(request:NextRequest,{params}: { params: { id: string } }) {
  try {
    const projectId = params.id;
    console.log('projectId:', projectId);
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!projectId) {
      return NextResponse.json({ error: "Project ID required" }, { status: 400 });
    }

    const redisClient = await redis;
    const cacheKey = `project:${projectId}`;

    // Try to get from cache
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }

    // If not in cache, fetch from database
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        team: true,
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
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
  }
}
