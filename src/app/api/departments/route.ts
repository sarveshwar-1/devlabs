import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { user } = session;
  try {
    let departments;
    if (user.role === 'ADMIN') {
      departments = await prisma.department.findMany();
    } else {
      departments = await prisma.department.findMany({
        where: {
          batches: {
            some: {
              classes: {
                some: {
                  teachingAssignments: {
                    some: { staffId: user.id },
                  },
                },
              },
            },
          },
        },
        select: { id: true, name: true, totalSemesters: true },
      });
    }
    return NextResponse.json(departments);
  } catch (error) {
    console.error('Fetch departments failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}