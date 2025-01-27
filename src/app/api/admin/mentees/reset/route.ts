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

    // Find mentees with their roll numbers
    const mentees = await prisma.user.findMany({
      where: {
        id: {
          in: menteeIds,
        },
        role: "MENTEE",
      },
      select: {
        id: true,
        rollNo: true,
      },
    });

    // Bulk update passwords using roll numbers
    const updatePromises = mentees.map(async (mentee) => {
      const hashedPassword = await bcrypt.hash(mentee.rollNo, 10);
      return prisma.user.update({
        where: { id: mentee.id },
        data: { password: hashedPassword },
      });
    });

    const updatedMentors = await Promise.all(updatePromises);

    return NextResponse.json(
      {
        message: "Passwords reset successfully",
        count: updatedMentors.length,
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
