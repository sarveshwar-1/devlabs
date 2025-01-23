import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prismadb";

export const dynamic = 'force-dynamic'; // Add this line to handle dynamic requests

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

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Devlabs-App', // Required by GitHub API
            },
            signal: controller.signal,
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(
                `GitHub API error: ${response.status} - ${errorData.message || response.statusText}`
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('GitHub API Error:', error);
        
        // Handle specific error types
        if (error.name === 'AbortError') {
            return NextResponse.json(
                { error: 'GitHub API request timed out' },
                { status: 504 }
            );
        }

        return NextResponse.json(
            { 
                error: 'Failed to fetch repositories',
                details: error.message 
            },
            { status: 500 }
        );
    }
}

