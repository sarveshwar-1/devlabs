import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";
interface Params{
    url: string[];
}

export async function GET(req: NextRequest,
    { params }: { params: Params }
) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const githubToken = session.user.githubToken;
    const { url } = params as Params;
    const finalurl = url.join('/');
    const cacheKey = `github:${url}`;

    try {
        const redisClient = await redis;
        const cachedData = await redisClient.get(cacheKey);
        
        if (cachedData) {
            return NextResponse.json(JSON.parse(cachedData));
        }

        const response = await fetch(`https://api.github.com/repos/${finalurl}`, {
            headers: {
                Authorization: `Bearer ${githubToken}`,
            }
        });


        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const data = await response.json();
        await redisClient.setex(cacheKey, 3600, JSON.stringify(data)); // Cache for 1 hour
        return NextResponse.json(data);
    } catch (error) {
        console.error('GitHub API Error:', error);
        return NextResponse.json(
            { error: "Failed to fetch from GitHub" },
            { status: 500 }
        );
    }
}
