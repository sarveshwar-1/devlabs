import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prismadb';
import { auth } from '@/lib/auth';
import {redis} from '@/lib/db/redis';
export async function GET() {
  const redisClient = await redis;
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Not Authorized" },
      { status: 401 }
    );
  }

  const cacheKey = `projects:${session.user.id}`;
  const cachedProjects = await redisClient.get(cacheKey);

  if (cachedProjects) {
    return NextResponse.json(JSON.parse(cachedProjects));
  }

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        {mentor:{some:{id:session.user.id}}},
        { team: { teamLeaderId: session.user.id } },
        { team: { members: { some: { id: session.user.id } } } },
      ]
    },
    include: {
      team: {
        include: {
          teamLeader: {
            include: {
              user: {
                select: {
                  name: true,
                }
              }
            }
          },
          members: {
            include: {
              user: {
                select: {
                  name: true,
                }
              }
            }
          }
        }
      },
      mentor: {
        include: {
          user: {
            select: {
              name: true,
            }
          }
        }
      },
    }
  });
  await redisClient.setex(cacheKey, 1800, JSON.stringify(projects));
  return NextResponse.json(projects);
}
export async function POST(req: Request) {
  const redisClient = await redis;
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({
      error: 'Not Authorized'
    }, {
      status: 401
    })
  }

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
    await redisClient.del('projects:'+session.user.id);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Project creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
export async function PUT(req: Request) {
  const redisClient = await redis;
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Not Authorized" },
      { status: 401 }
    );
  }

  const { id, title, description, repository, teamId, mentorIds, isPrivate } = await req.json();

  if (!id || !title || !teamId || !mentorIds) {
    return NextResponse.json(
      { error: 'ID, title, team ID, and mentor IDs are required' },
      { status: 400 }
    );
  }

  const project = await prisma.project.update({
    where: { id },
    data: {
      title,
      description,
      repository,
      isPrivate: isPrivate || false,
      team: {
        connect: { id: teamId }
      },
      mentor: {
        set: mentorIds.map((id: string) => ({ id }))
      }
    },
    include: {
      team: true,
      mentor: true
    }
  });
  await redisClient.del('projects:*');
  return NextResponse.json(project);
}
export async function DELETE(req: Request) {
  const session = await auth();
  const redisClient = await redis;
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Not Authorized" },
      { status: 401 }
    );
  }

  const { id } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: 'ID is required' },
      { status: 400 }
    );
  }

  await prisma.project.delete({
    where: { id }
  });
  await redisClient.del('projects:'+session.user.id);
  return NextResponse.json({ message: 'Project deleted successfully' });
}