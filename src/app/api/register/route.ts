import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prismadb";

export async function POST(req: NextRequest) {
  const { name, email, password, rollNo, role } = await req.json();
  console.log(name,email,password,rollNo,role);
  if (!email || !password) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({
        error: "User alreadyexists",
      }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        rollNo,
        role,
      },
    });
    if (role === "MENTOR") {
      await prisma.mentor.create({
        data: {
          id: user.id,
        },
      });
    }
    if (role === "MENTEE") {
      await prisma.mentee.create({
        data: {
          id: user.id,
        },
      });
    }
    if (role === "ADMIN") {
      await prisma.admin.create({
        data: {
          id: user.id,
        },
      });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Register error" }, { status: 500 });
  }
}