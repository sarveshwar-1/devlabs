
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prismadb';
import { auth } from '@/lib/auth';
import { NextRequest } from 'next/server';
import { redis } from '@/lib/db/redis';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const redisClient = await redis;
    const projectId = searchParams.get('projectId');

    if (!projectId) {
        return NextResponse.json(
            { error: 'Project ID is required' },
            { status: 400 }
        );
    }

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
    const cachedProjects = await redisClient.get(`${projectId}`);
    if (cachedProjects) {
        return NextResponse.json(JSON.parse(cachedProjects));
    }
    const project = await prisma.project.findUnique({
        where: { id: projectId },
        include: {
            team: true,
            mentor: {
                select: {
                    id: true,
                    user: {
                        select: {
                            name: true,
                        }
                    }
                },
            },
        }
    });

    if (!project) {
        return NextResponse.json(
            { error: 'Project not found' },
            { status: 404 }
        );
    }
    redisClient.setex(`${projectId}`, 60, JSON.stringify(project));
    return NextResponse.json(project);
}

export async function POST(req: Request) {
    try {
        const { title, description, repository, teamId, mentorIds, isPrivate } = await req.json();

        if (!title || !teamId || !mentorIds) {
            return NextResponse.json(
                { error: 'Title, team ID, and mentor IDs are required' },
                { status: 400 }
            );
        }

        const project = await prisma.project.create({
            data: {
                title,
                description,
                repository,
                isPrivate: isPrivate || false,
                team: {
                    connect: { id: teamId }
                },
                mentor: {
                    connect: mentorIds.map((id: string) => ({ id }))
                }
            },
            include: {
                team: true,
                mentor: true
            }
        });

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        console.error('Project creation error:', error);
        return NextResponse.json(
            { error: 'Failed to create project' },
            { status: 500 }
        );
    }
}
