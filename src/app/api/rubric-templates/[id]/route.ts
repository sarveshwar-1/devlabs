import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/getSession';
import { Rubric } from '@/types';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { name, rubrics } = await req.json();
  const { id } = params;

  if (!name || !rubrics || rubrics.length === 0) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const existingTemplate = await prisma.rubricTemplate.findUnique({
      where: { id, createdBy: session.user.id },
    });
    if (!existingTemplate) {
      return NextResponse.json({ error: 'Template not found or unauthorized' }, { status: 404 });
    }

    const updatedTemplate = await prisma.rubricTemplate.update({
      where: { id },
      data: {
        name,
        rubrics: {
          deleteMany: {}, 
          create: rubrics.map((rubric: Rubric) => ({
            criterion: rubric.criterion,
            description: rubric.description,
            maxScore: rubric.maxScore,
          })),
        },
      },
      include: { rubrics: true },
    });
    return NextResponse.json(updatedTemplate);
  } catch (error) {
    console.error('Rubric template update failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}