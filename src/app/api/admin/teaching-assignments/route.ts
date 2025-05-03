import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const classId = req.nextUrl.searchParams.get('classId');
  const subjectId = req.nextUrl.searchParams.get('subjectId');
  if (!classId || !subjectId) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }
  try {
    const assignments = await prisma.teachingAssignment.findMany({
      where: { classId, subjectId },
      include: {
        staff: { select: { id: true, name: true } },
      },
    });
    return NextResponse.json(
      assignments.map((a) => ({
        id: a.id,
        staffId: a.staffId,
        staffName: a.staff.name,
      }))
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const { staffId, subjectId, classId } = await req.json();
    if (!staffId || !subjectId || !classId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const assignment = await prisma.teachingAssignment.create({
      data: { staffId, subjectId, classId },
    });
    return NextResponse.json(assignment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create assignment' }, { status: 500 });
  }
}