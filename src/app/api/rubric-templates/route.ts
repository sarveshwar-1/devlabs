import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';
import { Rubric } from '@/types';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const templates = await prisma.rubricTemplate.findMany({
      where: { createdBy: session.user.id },
      include: { rubrics: true },
    });
    return NextResponse.json(templates);
  } catch (error) {
    console.error('Fetch rubric templates failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { name, rubrics } = await req.json();

  if (!name || !rubrics || rubrics.length === 0) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const template = await prisma.rubricTemplate.create({
      data: {
        name,
        createdBy: session.user.id,
        rubrics: {
          create: rubrics.map((rubric: Rubric) => ({
            criterion: rubric.criterion,
            description: rubric.description,
            maxScore: rubric.maxScore,
          })),
        },
      },
      include: { rubrics: true },
    });
    return NextResponse.json(template, { status: 201 });
  } catch (error) {
    console.error('Rubric template creation failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}