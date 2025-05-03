import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { getSession } from '@/lib/getSession';

export async function PUT(
  request: Request,
  { params }: { params: { studentId: string } }
) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const param = await params
  const { studentId } = param;
  try {
    const { name, email, rollNumber, password } = await request.json();
    const updateData: { 
      name?: string; 
      email?: string; 
      rollNumber?: string; 
      password?: string; 
    } = { 
      name, 
      email, 
      rollNumber 
    };
    if (password) {
      updateData.password = await hash(password, 10);
    }
    const student = await prisma.user.update({
      where: { id: studentId, role: 'STUDENT' },
      data: updateData,
    });
    return NextResponse.json(student);
  } catch (error) {
    console.error('Failed to update student:', error);
    return NextResponse.json({ error: 'Failed to update student' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { studentId: string } }
) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const param = await params
  const { studentId } = param;
  try {
    // Check if the student is part of any groups
    const groupMembers = await prisma.groupMember.findMany({
      where: { userId: studentId },
    });
    if (groupMembers.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete student who is part of a group' },
        { status: 400 }
      );
    }
    await prisma.user.delete({
      where: { id: studentId, role: 'STUDENT' },
    });
    return NextResponse.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Failed to delete student:', error);
    return NextResponse.json({ error: 'Failed to delete student' }, { status: 500 });
  }
}