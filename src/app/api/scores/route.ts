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
  comments: z.string().optional().nullable(), // Changed to make comments optional and allow null
});

// GET - Fetch evaluations (with filtering options)
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

    // Extract parameters from the request's query
    const searchParams = request.nextUrl.searchParams;
    const menteeId = searchParams.get("menteeId");
    const projectId = searchParams.get("projectId");

    // Validate required parameters
    if (!menteeId || !projectId) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Both menteeId and projectId are required",
        },
        { status: 400 }
      );
    }

    // Fetch evaluations for the specific mentee and project
    const evaluations = await prisma.evaluation.findMany({
      where: {
        projectId,
        menteeId: menteeId, // Ensure the mentee making the request is authorized
      },
      include: {
        scores: true,
        evaluator: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
        mentee: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    // Sanitize and transform the evaluations data
    const sanitizedEvaluations = evaluations.map((evaluation) => ({
      ...evaluation,
      mentee: {
        ...evaluation.mentee,
        name: evaluation.mentee?.user?.name || "Unknown User",
      },
    }));

    // Return the evaluations data
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
