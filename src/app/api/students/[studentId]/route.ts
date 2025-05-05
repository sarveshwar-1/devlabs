import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';

export async function GET(
  request: Request,
  { params }: { params: { studentId: string } }
) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const param = await params;
  const { studentId } = param;
  try {
    const student = await prisma.user.findUnique({
      where: { 
        id: studentId,
        role: 'STUDENT'
      },
      select: {
        id: true,
        name: true,
        email: true,
        rollNumber: true,
        class: {
          select: {
            id: true,
            section: true,
            batch: {
              select: {
                graduationYear: true,
                department: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        }
      }
    });
    
    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
    
    return NextResponse.json(student);
  } catch (error) {
    console.error('Failed to fetch student:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}