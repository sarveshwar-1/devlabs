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

        // Optimize GitHub API request with query parameters
        const apiUrl = new URL('https://api.github.com/user/repos');
        apiUrl.searchParams.append('per_page', '100'); // Get max repos per page
        apiUrl.searchParams.append('sort', 'updated'); // Sort by recently updated
        apiUrl.searchParams.append('visibility', 'all'); // Get both public and private repos
        apiUrl.searchParams.append('affiliation', 'owner,collaborator'); // Get only repos user owns or collaborates on

        const response = await fetchWithRetry(apiUrl.toString(), {
            headers: {
                'Authorization': `Bearer ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Devlabs-App',
                // Request only specific fields
                'X-GitHub-Api-Version': '2022-11-28',
            },
            next: { revalidate: 60 },
        });

        const fullData = await response.json();
        
        // Only return necessary fields
        const simplifiedData = fullData.map((repo: any) => ({
            name: repo.name,
            full_name: repo.full_name,
        }));

        return NextResponse.json(simplifiedData);
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
