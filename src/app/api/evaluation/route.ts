import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { auth } from "@/lib/auth";
import { z } from "zod"; // For input validation

// Types for our responses
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Validation schema for evaluation scores
const ScoreSchema = z.object({
  regularUpdates: z.number().min(0).max(100),
  viva: z.number().min(0).max(100),
  content: z.number().min(0).max(100),
});

const CreateEvaluationSchema = z.object({
  projectId: z.string(),
  stage: z.enum(["Review1", "Review2", "Final_Review"]),
  menteeId: z.string(),
  scores: ScoreSchema,
  comments: z.string().optional().nullable(), 
});

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const projectId = searchParams.get("projectId");
    const stage = searchParams.get("stage"); // Explicitly get stage
    const menteeId = searchParams.get("menteeId");

    if (!projectId) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Project ID is required",
        },
        { status: 400 }
      );
    }

    const evaluations = await prisma.evaluation.findMany({
      where: {
        projectId,
        stage: stage as any, // Use exact stage matching
        menteeId: menteeId || undefined,
        mentorId: session.user.id,
      },
      include: {
        scores: true, // Always include scores
        mentee: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    // Transform the data to ensure scores are always present
    const sanitizedEvaluations = evaluations.map((evaluation) => ({
      ...evaluation,
      mentee: {
        ...evaluation.mentee,
        name: evaluation.mentee?.user?.name || "Unknown User",
      },
      scores: evaluation.scores || {
        regularUpdates: 0,
        viva: 0,
        content: 0,
        total: 0,
      },
    }));

    return NextResponse.json<ApiResponse<typeof sanitizedEvaluations>>({
      success: true,
      data: sanitizedEvaluations,
    });
  } catch (error) {
    console.error("GET Evaluation Error:", error);
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Failed to fetch evaluations",
      },
      { status: 500 }
    );
  }
}

// POST - Create new evaluation
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = CreateEvaluationSchema.parse(body);

    // Check if evaluation already exists
    const existingEvaluation = await prisma.evaluation.findFirst({
      where: {
        projectId: validatedData.projectId,
        stage: validatedData.stage,
        menteeId: validatedData.menteeId,
      },
    });

    if (existingEvaluation) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Evaluation already exists for this stage",
        },
        { status: 409 }
      );
    }

    // Create evaluation with scores in a transaction
    const evaluation = await prisma.$transaction(async (tx) => {
      const newEvaluation = await tx.evaluation.create({
        data: {
          projectId: validatedData.projectId,
          stage: validatedData.stage,
          menteeId: validatedData.menteeId,
          mentorId: session.user.id,
          comments: validatedData.comments,
        },
      });

      const scores = await tx.score.create({
        data: {
          evaluationId: newEvaluation.id,
          ...validatedData.scores,
          total: Object.values(validatedData.scores).reduce((a, b) => a + b, 0),
        },
      });

      return { ...newEvaluation, scores };
    });

    return NextResponse.json<ApiResponse<typeof evaluation>>(
      {
        success: true,
        data: evaluation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Evaluation Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Invalid input data",
        },
        { status: 400 }
      );
    }
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Failed to create evaluation",
      },
      { status: 500 }
    );
  }
}

// PUT - Update evaluation
export async function PUT(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const evaluationId = request.nextUrl.searchParams.get("id");
    if (!evaluationId) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: "Evaluation ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const existingEvaluation = await prisma.evaluation.findUnique({
      where: { id: evaluationId },
      include: { scores: true }
    });

    if (!existingEvaluation?.scores) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: "Evaluation scores not found" },
        { status: 404 }
      );
    }

    // Ensure all score fields are present with fallbacks
    const updatedScores = {
      regularUpdates: typeof body.regularUpdates === 'number' ? body.regularUpdates : existingEvaluation.scores.regularUpdates,
      viva: typeof body.viva === 'number' ? body.viva : existingEvaluation.scores.viva,
      content: typeof body.content === 'number' ? body.content : existingEvaluation.scores.content,
    };

    // Validate the complete score object
    const validatedData = ScoreSchema.extend({
      comments: z.string().optional(),
    }).parse({
      ...updatedScores,
      comments: body.comments,
    });

    // Update evaluation and scores in a transaction
    const updatedEvaluation = await prisma.$transaction(async (tx) => {
      const evaluation = await tx.evaluation.update({
        where: {
          id: evaluationId,
          mentorId: session.user.id,
        },
        data: {
          comments: validatedData.comments,
        },
        include: {
          mentee: {
            include: {
              user: {
                select: {
                  name: true,
                  email: true,
                },
              },
            },
          },
        },
      });

      const scores = await tx.score.update({
        where: { evaluationId },
        data: {
          regularUpdates: validatedData.regularUpdates,
          viva: validatedData.viva,
          content: validatedData.content,
          total: validatedData.regularUpdates + validatedData.viva + validatedData.content,
        },
      });

      return { ...evaluation, scores };
    });

    return NextResponse.json<ApiResponse<typeof updatedEvaluation>>({
      success: true,
      data: updatedEvaluation,
    });
  } catch (error) {
    console.error("PUT Evaluation Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Invalid input data",
        },
        { status: 400 }
      );
    }
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Failed to update evaluation",
      },
      { status: 500 }
    );
  }
}

// DELETE - Remove evaluation
export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const evaluationId = request.nextUrl.searchParams.get("id");
    if (!evaluationId) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Evaluation ID is required",
        },
        { status: 400 }
      );
    }

    // Delete evaluation and associated scores in a transaction
    await prisma.$transaction(async (tx) => {
      await tx.score.delete({
        where: { evaluationId },
      });

      await tx.evaluation.delete({
        where: {
          id: evaluationId,
          mentorId: session.user.id, // Ensure mentor owns the evaluation
        },
      });
    });

    return NextResponse.json<ApiResponse<null>>({
      success: true,
    });
  } catch (error) {
    console.error("DELETE Evaluation Error:", error);
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Failed to delete evaluation",
      },
      { status: 500 }
    );
  }
}
