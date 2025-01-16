import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/db/prismadb";
import { uploadFile } from "@/lib/db/minio";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    type Role = "MENTOR" | "MENTEE" | "ADMIN";

    // Input validation
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const role = formData.get("role")?.toString() as Role;
    const phoneNo = formData.get("phoneNo")?.toString();
    const rollNo = formData.get("rollNo")?.toString();
    const imageFile = formData.get("image") as File | null;

    // Required field validation
    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Name, email, and password are required." }),
        { status: 400 }
      );
    }

    let imageUrl = null;
    if (imageFile) {
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileName = `${Date.now()}-${imageFile.name}`;
        imageUrl = await uploadFile(
          buffer,
          fileName,
          imageFile.type,
          "profile-pics"
        );
      } catch (uploadError) {
        console.log("Image upload failed:", uploadError);
        // Continue registration without image if upload fails
      }
    }

    const hashedPassword = await hash(password, 10);

    const userData = {
      name,
      email,
      password: hashedPassword,
      role: role || "MENTEE",
      phoneNo: phoneNo || null,
      rollNo: rollNo || null,
      image: imageUrl,
      createdAt: new Date(),
      lastPasswordChange: new Date(),
      isActive: true,
    };

    const newUser = await prisma.user.create({ data: userData });

    if (newUser.role === "MENTEE") {
      await prisma.mentee.create({
        data: {
          id: newUser.id,
        },
      });
    } else if (newUser.role === "MENTOR") {
      await prisma.mentor.create({
        data: {
          id: newUser.id,
        },
      });
    } else if (newUser.role === "ADMIN") {
      await prisma.admin.create({
        data: {
          id: newUser.id,
        },
      });
    }

    // Remove sensitive data before sending response
    const { password: _, ...userResponse } = newUser;

    return new NextResponse(
      JSON.stringify({
        message: "User registered successfully.",
        user: userResponse,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse(
        JSON.stringify({ error: "Email already exists." }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("Registration error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
