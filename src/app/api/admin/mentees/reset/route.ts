import { auth } from "@/lib/auth";
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    // Check if user is authorized (admin)
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { menteeIds } = await request.json();

    // Validate input
    if (!menteeIds || !Array.isArray(menteeIds) || menteeIds.length === 0) {
      return NextResponse.json(
        { error: "Invalid mentor IDs" },
        { status: 400 }
      );
    }

    // Hash the default password
    const defaultPassword = "user@123";
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    // Bulk update passwords
    const updatedMentors = await prisma.user.updateMany({
      where: {
        id: {
          in: menteeIds,
        },
        role: "MENTEE",
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "Passwords reset successfully",
        count: updatedMentors.count,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Bulk Password Reset Error", error);
    return NextResponse.json(
      { error: "Failed to reset passwords" },
      { status: 500 }
    );
  }
}
