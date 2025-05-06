import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { name, startDate, endDate, batchId, semester, departmentId, classIds, subjectIds, rubricTemplateId } = await req.json();

  if (!name || !startDate || !endDate || !semester || !departmentId || !classIds?.length || !subjectIds?.length || !rubricTemplateId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const user = session.user;
    if (user.role === 'STAFF') {
      const assignments = await prisma.teachingAssignment.findMany({
        where: {
          staffId: user.id,
          classId: { in: classIds },
        },
      });
      if (assignments.length !== classIds.length) {
        return NextResponse.json({ error: 'Unauthorized to assign to some classes' }, { status: 403 });
      }
    }

    const review = await prisma.review.create({
      data: {
        name,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        batchId,
        semester,
        departmentId,
        classes: { connect: classIds.map((id: string) => ({ id })) },
        subjects: { connect: subjectIds.map((id: string) => ({ id })) },
        rubricTemplateId,
      },
    });

    return NextResponse.json({ id: review.id, message: 'Review created' }, { status: 201 });
  } catch (error) {
    console.error('Review creation failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}