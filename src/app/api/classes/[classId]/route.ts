import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';


export async function GET(
  request: Request,
  { params }: { params: { classId: string } }
) {
  const param = await params
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


export async function PUT(request: Request, { params }: { params: { classId: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const param = await params
  const { classId } = param;
  const { section } = await request.json();

  try {
    const updatedClass = await prisma.class.update({
      where: { id: classId },
      data: { section },
    });
    return NextResponse.json(updatedClass);
  } catch (error) {
    console.error('Class update failed:', error);
    return NextResponse.json({ error: 'Failed to update class' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { classId: string } }) {
    const session = await getSession();
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const param = await params
    const { classId } = param;
  
    try {
      await prisma.class.delete({
        where: { id: classId },
      });
      return NextResponse.json({ message: 'Class deleted' });
    } catch (error) {
      console.error('Class deletion failed:', error);
      return NextResponse.json({ error: 'Failed to delete class' }, { status: 500 });
    }
  }