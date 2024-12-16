
import { prisma } from "@/lib/db/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const query = req.nextUrl.searchParams.get("query") || "";

        const users = await prisma.user.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { email: { contains: query, mode: 'insensitive' } },
                ],
                role: 'MENTEE',
                NOT: {
                    id: session.user.id
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to search users" }, { status: 500 });
    }
}