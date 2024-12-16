import { prisma } from "@/lib/db/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        const session = await auth()
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const searchParams = req.nextUrl.searchParams;
        const query = searchParams.get("query") || "";
        const sort = searchParams.get("sort") || "name";
        const order = searchParams.get("order") || "asc";

        const teams = await prisma.team.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            { name: { contains: query, mode: 'insensitive' } },
                            { description: { contains: query, mode: 'insensitive' } },
                        ],
                    },
                    {
                        members: {
                            some: {
                                id: session.user.id
                            }
                        }
                    },
                    { isactive: true }
                ]
            },
            include: {
                members: {
                    include: {
                        user: true
                    }
                },
                teamLeader: {
                    include: {
                        user: true
                    }
                },
                Project: true
            },
            orderBy: {
                [sort]: order
            }
        });

        return NextResponse.json(teams);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { name, description, memberIds, maxMembers } = body;

        if (!maxMembers || maxMembers < 2 || maxMembers > 10) {
            return NextResponse.json(
                { error: "Team size must be between 2 and 10" },
                { status: 400 }
            );
        }

        // Generate random join code
        const joinCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        const team = await prisma.team.create({
            data: {
                name,
                description,
                maxMembers,
                teamLeaderId: session.user.id,
                isactive: true,
                joinCode, // Prisma will handle uniqueness
                members: {
                    connect: memberIds.map(id => ({ id }))
                }
            },
            include: {
                members: {
                    include: {
                        user: true
                    }
                },
                teamLeader: {
                    include: {
                        user: true
                    }
                }
            }
        });

        return NextResponse.json(team);
    } catch (error) {
        // If unique constraint fails, retry with a different code
        if (error.code === 'P2002') {
            // You might want to implement a retry mechanism here
            return NextResponse.json({ error: "Failed to generate unique join code" }, { status: 500 });
        }
        return NextResponse.json({ error: "Failed to create team" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { id, name, description, memberIds, maxMembers } = body;

        if (!maxMembers || maxMembers < 2 || maxMembers > 10) {
            return NextResponse.json(
                { error: "Team size must be between 2 and 10" },
                { status: 400 }
            );
        }

        // Verify team leader
        const existingTeam = await prisma.team.findUnique({
            where: { id },
            select: { teamLeaderId: true }
        });

        if (existingTeam?.teamLeaderId !== session.user.id) {
            return NextResponse.json({ error: "Only team leader can edit team" }, { status: 403 });
        }

        const team = await prisma.team.update({
            where: { id },
            data: {
                name,
                description,
                maxMembers,
                members: {
                    set: memberIds.map(id => ({ id }))
                }
            },
            include: {
                members: {
                    include: {
                        user: true
                    }
                },
                teamLeader: {
                    include: {
                        user: true
                    }
                }
            }
        });

        return NextResponse.json(team);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update team" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await req.json();

        const team = await prisma.team.findUnique({
            where: { id },
            include: { Project: true }
        });

        if (!team) {
            return NextResponse.json({ error: "Team not found" }, { status: 404 });
        }

        if (team.teamLeaderId !== session.user.id) {
            return NextResponse.json({ error: "Only team leader can delete team" }, { status: 403 });
        }

        if (team.Project.length > 0) {
            // If team has projects, just mark as inactive
            await prisma.team.update({
                where: { id },
                data: { isactive: false }
            });
            return NextResponse.json({ message: "Team archived successfully" });
        }

        // If no projects, delete the team
        await prisma.team.delete({ where: { id } });
        return NextResponse.json({ message: "Team deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete team" }, { status: 500 });
    }
}
