import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  const param = await params
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { graduationYear } = await request.json();
    const batch = await prisma.batch.update({
      where: { id: param.id },
      data: { graduationYear },
    });
    return NextResponse.json(batch);
  } catch (error) {
    console.error('Batch update failed:', error);
    return NextResponse.json({ error: 'Batch update failed' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  const param = await params
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    await prisma.batch.delete({
      where: { id: param.id },
    });
    return NextResponse.json({ message: 'Batch deleted' });
  } catch (error) {
    console.error('Batch deletion failed:', error);
    return NextResponse.json({ error: 'Batch deletion failed' }, { status: 500 });
  }
}