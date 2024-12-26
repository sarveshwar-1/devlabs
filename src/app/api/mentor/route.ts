import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user.email) {
      return NextResponse.json(
        { error: "Not Authorised" },
        { status: 401 }
      );
    }

    const redisClient = await redis;
    const cacheKey = 'mentors:all';
    
    // Try to get from cache
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }

    // If not in cache, fetch from database
    const mentors = await prisma.mentor.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    // Cache the result
    await redisClient.setex(cacheKey, 7200, JSON.stringify(mentors)); // 2 hours cache

    return NextResponse.json(mentors, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
