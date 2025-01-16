import { prisma } from "@/lib/db/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { rollNo } = body;
        console.log("rollNo:", rollNo);
        const user = await prisma.user.findUnique({
            where: { rollNo },
            select: { role: true }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ role: user.role });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
