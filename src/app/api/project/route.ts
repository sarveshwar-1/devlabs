import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const projects = await prisma.project.findMany({
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

    return NextResponse.json(projects);
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
