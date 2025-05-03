import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const id = params.id;
  try {
    await prisma.teachingAssignment.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Assignment deleted' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete assignment' }, { status: 500 });
  }
}