import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prismadb';

export async function DELETE(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await prisma.user.update({
      where: { email },
      data: {
        githubToken: null,
        githubId: null,
        githubUsername: null,
      },
    });

    return NextResponse.json({ message: 'GitHub account unlinked successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to unlink GitHub account' }, { status: 500 });
  }
}