import { NextRequest, NextResponse } from "next/server";
import { downloadFile } from "@/lib/db/minio";
import { auth } from "@/lib/auth";
import { prisma } from '@/lib/db/prismadb';

export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const filename = req.nextUrl.searchParams.get('filename');
        const projectId = req.nextUrl.searchParams.get('projectId');
        const bucketName = "devlabs";

        if (!filename || !projectId) {
            return NextResponse.json(
                { error: "Missing required parameters" },
                { status: 400 }
            );
        }
        console.log('bucketName', bucketName);
        const file = await downloadFile(filename, bucketName);
        if (!file) {
            return NextResponse.json(
                { error: "File not found" },
                { status: 404 }
            );
        }

        // Get the actual filename from the path
        const actualFileName = filename.split('/').pop();

        return new NextResponse(file, {
            headers: {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": `attachment; filename="${actualFileName}"`,
            }
        });

    } catch (error) {
        console.error("Failed to download file:", error);
        return NextResponse.json(
            { error: "Failed to download file" },
            { status: 500 }
        );
    }
}
