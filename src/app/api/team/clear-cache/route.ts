import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const redisClient = await redis;
    await redisClient.del('teams:all');
    
    return NextResponse.json({ message: "Cache cleared successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to clear cache" },
      { status: 500 }
    );
  }
}
