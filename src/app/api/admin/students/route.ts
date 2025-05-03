import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { getSession } from '@/lib/getSession';

export async function GET(request: Request) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const { searchParams } = new URL(request.url);
  const classId = searchParams.get('classId');

  if (!classId) {
    return NextResponse.json({ error: 'Class ID is required' }, { status: 400 });
  }

  try {
    const students = await prisma.user.findMany({
      where: {
        role: 'STUDENT',
        classId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        rollNumber: true,
      },
    });
    return NextResponse.json(students);
  } catch (error) {
    console.error('Failed to fetch students:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const { name, email, rollNumber, classId } = await request.json();
    if (!name || !email || !rollNumber || !classId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Use rollNumber as the password and hash it
    const hashedPassword = await hash(rollNumber, 10);

    const student = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'STUDENT',
        rollNumber,
        classId,
      },
    });
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error('Failed to create student:', error);
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}