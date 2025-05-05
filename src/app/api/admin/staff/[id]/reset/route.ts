import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { getSession } from '@/lib/getSession';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session?.user?.id || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const param = await params;
  const id = param.id;
  try {
    // Fetch the staff member to get their rollNumber
    const staff = await prisma.user.findUnique({
      where: { id },
      select: { rollNumber: true },
    });

    if (!staff || !staff.rollNumber) {
      return NextResponse.json({ error: 'Staff member or roll number not found' }, { status: 404 });
    }

    // Hash the rollNumber as the new password
    const hashedPassword = await hash(staff.rollNumber, 10);

    // Update the staff member's password
    await prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'Password reset successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to reset password:', error);
    return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 });
  }
}