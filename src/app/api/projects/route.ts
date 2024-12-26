
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prismadb';
import { auth } from '@/lib/auth';
import {redis} from '@/lib/db/redis';

export async function GET() {
    const redisClient = await redis;
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
  const cachedProjects = await redisClient.get('projects');
  if (cachedProjects) {
    return NextResponse.json(JSON.parse(cachedProjects));
  }
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
    redisClient.setex('projects', 60, JSON.stringify(projects));
    return NextResponse.json(projects);
}