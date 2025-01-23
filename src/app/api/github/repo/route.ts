import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";
import { prisma } from "@/lib/db/prismadb";

export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const params = new URL(req.nextUrl).searchParams;
        const urlParam = params.get('url');
        const projectId = params.get('projectId');
        let githubToken = params.get('githubToken');

        // Handle token fetching logic
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

        if (!githubToken) {
            return NextResponse.json({ error: "No GitHub token available" }, { status: 401 });
        }

        // Construct the GitHub API URL
        const apiUrl = urlParam 
            ? `https://api.github.com${urlParam}` 
            : 'https://api.github.com/user/repos';

        console.log('Fetching from GitHub API:', apiUrl);

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('GitHub API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch repositories' },
            { status: 500 }
        );
    }
}

