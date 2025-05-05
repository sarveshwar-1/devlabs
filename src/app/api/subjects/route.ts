import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const departmentId = req.nextUrl.searchParams.get('departmentId');
  const semester = req.nextUrl.searchParams.get('semester');
  if (!departmentId || !semester) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }
  try {
    const subjects = await prisma.subject.findMany({
      where: {
        departmentId,
        semester: Number(semester),
      },
      select: {
        id: true,
        name: true,
      },
    });
    return NextResponse.json(subjects);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}