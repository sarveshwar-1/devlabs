import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db/prismadb";

export const dynamic = 'force-dynamic'; // Add this line to handle dynamic requests

const TIMEOUT_DURATION = 30000; // 30 seconds
const MAX_RETRIES = 3;

async function fetchWithRetry(url: string, options: RequestInit, retries = MAX_RETRIES) {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_DURATION);

        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return response;
    } catch (error) {
        if (retries > 0 && (error.name === 'AbortError' || error.name === 'TypeError')) {
            console.log(`Retrying... ${retries} attempts remaining`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
            return fetchWithRetry(url, options, retries - 1);
        }
        throw error;
    }
}

export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const params = new URL(req.nextUrl).searchParams;
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
        
        githubToken = githubToken || session.user.githubToken;

        if (!githubToken) {
            return NextResponse.json({ error: "No GitHub token available" }, { status: 401 });
        }

        const response = await fetchWithRetry('https://api.github.com/user/repos', {
            headers: {
                'Authorization': `Bearer ${githubToken}`
            },
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('GitHub API Error:', error);
        
        // Handle specific error types
        if (error.name === 'AbortError') {
            return NextResponse.json(
                { error: 'GitHub API request timed out after multiple retries' },
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
