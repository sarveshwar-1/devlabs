import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(request: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const departmentName = searchParams.get('departmentName');
  const graduationYear = searchParams.get('graduationYear');
  const user = session.user;

  if (!departmentName || !graduationYear) {
    return NextResponse.json({ error: 'Department name and graduation year required' }, { status: 400 });
  }

  try {
    let classes;
    if (user.role === 'ADMIN') {
      classes = await prisma.class.findMany({
        where: {
          batch: {
            department: { name: departmentName },
            graduationYear: parseInt(graduationYear),
          },
        },
        select: {
          id: true,
          section: true,
          _count: {
            select: { students: true },
          },
        },
        orderBy: {
          section: 'asc',
        },
      });
    } else {
      classes = await prisma.class.findMany({
        where: {
          batch: {
            department: { name: departmentName },
            graduationYear: parseInt(graduationYear),
          },
          teachingAssignments: {
            some: { staffId: user.id },
          },
        },
        select: {
          id: true,
          section: true,
          _count: {
            select: { students: true },
          },
        },
        orderBy: {
          section: 'asc',
        },
      });
    }

    const formattedClasses = classes.map(cls => ({
      id: cls.id,
      section: cls.section,
      totalStudents: cls._count.students,
    }));

    return NextResponse.json(formattedClasses);
  } catch (error) {
    console.error('Class fetch failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}