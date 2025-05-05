import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { name, totalSemesters } = await request.json();
    const department = await prisma.department.create({
      data: { 
        name,
        totalSemesters: parseInt(totalSemesters)
      },
    });
    return NextResponse.json(department, { status: 201 });
  } catch (error) {
    console.error('Department creation failed:', error);
    return NextResponse.json({ error: 'Department creation failed' }, { status: 500 });
  }
}