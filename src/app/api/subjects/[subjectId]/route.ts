import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function PUT(req: NextRequest, { params }: { params: { subjectId: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const param = await params
    const { name } = await req.json();
    if (!name) {
      return NextResponse.json({ error: 'Missing name' }, { status: 400 });
    }
    const subject = await prisma.subject.update({
      where: { id: param.subjectId },
      data: { name },
    });
    return NextResponse.json(subject);
  } catch (error) {
    console.error('Update subject failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { subjectId: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await prisma.subject.delete({
      where: { id: params.subjectId },
    });
    return NextResponse.json({ message: 'Subject deleted successfully' });  } catch (error) {
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2003') {
      return NextResponse.json({ error: 'Cannot delete subject with related records' }, { status: 400 });
    }
    console.error('Delete subject failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}