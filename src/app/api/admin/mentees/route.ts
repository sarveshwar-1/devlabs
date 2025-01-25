import { auth } from "@/lib/auth";
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { redis } from "@/lib/db/redis";

export async function GET(request: NextRequest) {
  try {
    const menteedata = await prisma.mentee.findMany({
      where: {
        user: {
          isActive: true,
        },
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            rollNo: true,
          },
        },
      },
    });
    const session = await auth();
    const redisClient = await redis;

    const cacheKey = "mentees:" + session?.user.id;
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return NextResponse.json(JSON.parse(cachedData));
    }

    await redisClient.setex(cacheKey, 3600, JSON.stringify(menteedata));
    return NextResponse.json(menteedata, { status: 200 });
  } catch (error) {
    console.error("Cant Fetch Mentors", error);
    return NextResponse.json(
      {
        error: "Cant Fetch Mentors",
      },
      {
        status: 500,
      }
    );
  }
}
