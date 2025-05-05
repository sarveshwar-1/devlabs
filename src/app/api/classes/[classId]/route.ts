import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(
  request: Request,
  { params }: { params: { classId: string } }
) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const param = await params;
  const { classId } = param;

  try {
    const classItem = await prisma.class.findUnique({
      where: { id: classId },
      select: {
        id: true,
        section: true,
      },
    });
    if (!classItem) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 });
    }
    return NextResponse.json(classItem);
  } catch (error) {
    console.error('Failed to fetch class:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}