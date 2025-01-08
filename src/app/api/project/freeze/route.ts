import { prisma } from "@/lib/db/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";
export async function PATCH(req: NextRequest) {
  try {
    const redisClient = await redis;
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

    const url = new URL(req.url);
    const projectid = url.searchParams.get("projectid");
    const body = await req.json();
    const freezed = body.freezed ?? false;

    const response = await prisma.project.update({
      where: {
        id: projectid,
      },
      data: {
        freezed,
      },
    });
    const keys = await redisClient.keys("projects:*");
    if (keys.length > 0) {
      await redisClient.unlink(...keys);
    }
    if (!response) {
      return NextResponse.json(
        { error: "Failed to freeze team" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error freezing team:", error);
    return NextResponse.json({ error: "Error freezing team" }, { status: 500 });
  }
}
