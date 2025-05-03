import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { name } = await request.json();
    const param = await params
    const department = await prisma.department.update({
      where: { id: param.id },
      data: { name },
    });
    return NextResponse.json(department);
  } catch (error) {
    console.error('Department update failed:', error);
    return NextResponse.json({ error: 'Department update failed' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const session = await getSession();
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
      // Check for dependencies
      const batchCount = await prisma.batch.count({ where: { departmentId: params.id } });
      const subjectCount = await prisma.subject.count({ where: { departmentId: params.id } });
      if (batchCount > 0 || subjectCount > 0) {
        return NextResponse.json(
          { error: 'Cannot delete department with associated batches or subjects' },
          { status: 409 }
        );
      }
  
      await prisma.department.delete({
        where: { id: params.id },
      });
      return NextResponse.json({ message: 'Department deleted' });
    } catch (error: unknown) {
      console.error('Department deletion failed:', error);
      if (error instanceof Error && 'code' in error && error.code === 'P2025') {
        return NextResponse.json({ error: 'Department not found' }, { status: 404 });
      }
      return NextResponse.json({ error: 'Department deletion failed' }, { status: 500 });
    }
}