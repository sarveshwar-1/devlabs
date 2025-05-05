import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { getSession } from '@/lib/getSession';

export async function GET() {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const staffMembers = await prisma.user.findMany({
      where: {
        role: 'STAFF',
      },
      select: {
        id: true,
        name: true,
        email: true,
        rollNumber: true,
      },
    });
    return NextResponse.json(staffMembers);
  } catch (error) {
    console.error('Failed to fetch staff members:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { name, email, rollNumber } = await request.json();
    if (!name || !email || !rollNumber) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const defaultPassword = 'staff@123';
    const hashedPassword = await hash(defaultPassword, 10);

    const staff = await prisma.user.create({
      data: {
        name,
        email,
        rollNumber,
        password: hashedPassword,
        role: 'STAFF',
      },
    });

    // Exclude password from response
    const { password, ...staffWithoutPassword } = staff;

    return NextResponse.json(staffWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('Failed to create staff:', error);
    return NextResponse.json({ error: 'Failed to create staff' }, { status: 500 });
  }
}