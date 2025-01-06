import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";
import { prisma } from "@/lib/db/prismadb";
export async function GET(req: NextRequest) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const params = new URL(req.nextUrl).searchParams;
    const url = params.get('url')?.split('/');
    const projectId = params.get('projectId');
    let githubToken = params.get('githubToken');
    if (!githubToken && session.user.role === 'MENTOR' && projectId) {
        const project = await prisma.project.findFirst({
            where: {
                id: projectId
            },
            select: {
                team: {
                    select: {
                        teamLeader: {
                            select: {
                                user: {
                                    select: {
                                        githubToken: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        githubToken = project?.team?.teamLeader?.user?.githubToken || githubToken;
    }
    if (!githubToken) {
        githubToken = session.user.githubToken || null;
    }

    const finalurl = url?.join('/') || '';
    // const cacheKey = `github:${projectId}:${finalurl}`;

    try {
        // const redisClient = await redis;
        // const cachedData = await redisClient.get(cacheKey);

        // if (cachedData) {
        //     return NextResponse.json(JSON.parse(cachedData));
        // }
        console.log('githubToken:', githubToken)
        console.log('finalurl:', finalurl)
        const response = await fetch(`https://api.github.com/user/repos${finalurl}`, {
            headers: {
                Authorization: `Bearer ${githubToken}`,
            }
        });
        const data = await response.json();
        // await redisClient.setex(cacheKey, 3600, JSON.stringify(data)); // Cache for 1 hour
        return NextResponse.json(data);
    } catch (error) {
        console.error('GitHub API Error:', error.message);
        return NextResponse.json(
            { error: "Failed to fetch from GitHub" },
            { status: 500 }
        );
    }
}

