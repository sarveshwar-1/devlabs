import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const departmentName = searchParams.get('departmentName');
  if (!departmentName) {
    return NextResponse.json({ error: 'Department name is required' }, { status: 400 });
  }

  const { user } = session;
  try {
    let batches;
    if (user.role === 'ADMIN') {
      batches = await prisma.batch.findMany({
        where: { department: { name: departmentName } },
        include: { department: true },

      });
    } else {
      batches = await prisma.batch.findMany({
        where: {
          department: { name: departmentName },
          classes: {
            some: {
              teachingAssignments: {
                some: { staffId: user.id },
              },
            },
          },
        },
        select: { id: true, graduationYear: true },
      });
    }
    return NextResponse.json(batches);
  } catch (error) {
    console.error('Fetch batches failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}