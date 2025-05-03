import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(req: NextRequest, { params }: { params: { classId: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const classId = params.classId;
  try {
    const classData = await prisma.class.findUnique({
      where: { id: classId },
      include: {
        batch: {
          include: { department: true },
        },
      },
    });
    if (!classData) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 });
    }
    const { department } = classData.batch;
    return NextResponse.json({
      departmentId: department.id,
      totalSemesters: department.totalSemesters,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}