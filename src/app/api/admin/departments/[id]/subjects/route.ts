import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const param = await params
    const subjects = await prisma.subject.findMany({
      where: { departmentId: param.id },
      orderBy: { semester: 'asc' },
    });
    return NextResponse.json(subjects);
  } catch (error) {
    console.error('Fetch subjects failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const param = await params
    const { name, semester } = await req.json();
    if (!name || !semester) {
      return NextResponse.json({ error: 'Missing name or semester' }, { status: 400 });
    }
    const subject = await prisma.subject.create({
      data: {
        name,
        departmentId: param.id,
        semester,
      },
    });
    return NextResponse.json(subject);
  } catch (error) {
    console.error('Create subject failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}