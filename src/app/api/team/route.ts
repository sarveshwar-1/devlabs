
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { name, description, members } = await req.json();

        if (!name || !members?.length) {
            return NextResponse.json(
                { error: 'Name and at least one member are required' },
                { status: 400 }
            );
        }

        // Find users by their emails
        const users = await prisma.user.findMany({
            where: {
                rollNo: {
                    in: members
                }
            }
        });

        const team = await prisma.team.create({
            data: {
                name,
                description,
                members: {
                    connect: users.map(user => ({ id: user.id }))
                }
            },
            include: {
                members: {
                    include: {
                        user: true
                    }
                }
            }
        });

        return NextResponse.json(team, { status: 201 });
    } catch (error) {
        console.error('Team creation error:', error);
        return NextResponse.json(
            { error: 'Failed to create team' },
            { status: 500 }
        );
    }
}