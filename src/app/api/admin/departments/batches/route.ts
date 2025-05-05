import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { departmentName, graduationYear } = await request.json();
    const department = await prisma.department.findUnique({
      where: { name: departmentName },
    });

    if (!department) {
      return NextResponse.json({ error: 'Department not found' }, { status: 404 });
    }

    const batch = await prisma.batch.create({
      data: { departmentId: department.id, graduationYear },
    });
    return NextResponse.json(batch, { status: 201 });
  } catch (error) {
    console.error('Batch creation failed:', error);
    return NextResponse.json({ error: 'Batch creation failed' }, { status: 500 });
  }
}