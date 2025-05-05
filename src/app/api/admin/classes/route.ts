import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function POST(request: Request) {
    const session = await getSession();
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  
    const { searchParams } = new URL(request.url);
    const departmentName = searchParams.get('departmentName');
    const graduationYear = searchParams.get('graduationYear');
    const { count } = await request.json();
  
    if (!departmentName || !graduationYear) {
      return NextResponse.json({ error: 'Department name and graduation year required' }, { status: 400 });
    }
  
    try {
      const batch = await prisma.batch.findFirst({
        where: {
          department: { name: departmentName },
          graduationYear: parseInt(graduationYear),
        },
      });
  
      if (!batch) {
        return NextResponse.json({ error: 'Batch not found' }, { status: 404 });
      }
  
      const existingClasses = await prisma.class.findMany({
        where: { batchId: batch.id },
        select: { section: true },
      });
      const existingSections = existingClasses.map(c => c.section);
  
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const newSections = [];
      for (let i = 0; i < alphabet.length && newSections.length < count; i++) {
        const section = alphabet[i];
        if (!existingSections.includes(section)) {
          newSections.push(section);
        }
      }
  
      if (newSections.length < count) {
        return NextResponse.json(
          { error: `Only ${newSections.length} new sections available` },
          { status: 400 }
        );
      }
  
      const newClasses = await prisma.$transaction(
        newSections.map(section =>
          prisma.class.create({
            data: {
              batchId: batch.id,
              section,
            },
          })
        )
      );
  
      return NextResponse.json(newClasses, { status: 201 });
    } catch (error) {
      console.error('Class creation failed:', error);
      return NextResponse.json({ error: 'Failed to create classes' }, { status: 500 });
    }
  }