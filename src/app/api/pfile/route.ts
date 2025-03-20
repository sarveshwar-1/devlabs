import { NextRequest, NextResponse } from "next/server";
import { uploadFile, downloadFile, createFolder, listFiles, deleteFile } from "@/lib/db/minio";
import { auth } from "@/lib/auth";
import { prisma } from '@/lib/db/prismadb';
export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const projectId = req.nextUrl.searchParams.get('projectId');
        const bucketName = req.nextUrl.searchParams.get('bucketName');
        
        if (!projectId || !bucketName) {
            return NextResponse.json(
                { error: "Missing required parameters" },
                { status: 400 }
            );
        }

        try {
            const project = await prisma.project.findUnique({
                where: { id: projectId },
                select: { files: true }
            });

            if (!project) {
                return NextResponse.json(
                    { error: "Task not found" },
                    { status: 404 }
                );
            }

            const files = project.files || [];
            return NextResponse.json({ files });
        } catch (error) {
            console.error("Failed to list files:", error);
            return NextResponse.json(
                { error: "Failed to list files" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Failed to process request:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { file, filename, fileType, bucketName, folderName, projectId } = await req.json();
        
        // Input validation
        if (!file || !fileType || !bucketName || !filename || !projectId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if project exists and get current files
        const project = await prisma.project.findUnique({
            where: { id: projectId },
            select: { files: true }
        });

        if (!project) {
            return NextResponse.json(
                { error: "Task not found" },
                { status: 404 }
            );
        }

        // Check for duplicate filename
        const modifiedFilename = `${folderName}/${projectId}/${filename}`;
        const isDuplicate = project.files?.some(existingFile => 
            existingFile === modifiedFilename
        );

        if (isDuplicate) {
            return NextResponse.json(
                { error: "File already exists" },
                { status: 409 }
            );
        }

        // Process file upload
        const fileBuffer = Buffer.from(file, "base64");
        await createFolder(folderName, bucketName);
        await createFolder(`${folderName}/${projectId}`, bucketName);
        
        try {
            const uploadedFile = await uploadFile(fileBuffer, modifiedFilename, fileType, bucketName);
            
            // Only update database if file upload was successful
            await prisma.project.update({
                where: { id: projectId },
                data: {
                    files: {
                        push: modifiedFilename
                    }
                }
            });

            return NextResponse.json({ url: uploadedFile });
        } catch (uploadError) {
            console.error("File upload failed:", uploadError);
            return NextResponse.json(
                { error: "Failed to upload file to storage" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Failed to process request:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { filename, bucketName, projectId } = await req.json();
        
        if (!filename || !bucketName || !projectId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Get project and verify file exists
        const project = await prisma.project.findUnique({
            where: { id: projectId },
            select: { files: true }
        });

        if (!project) {
            return NextResponse.json(
                { error: "Task not found" },
                { status: 404 }
            );
        }

        const fileExists = project.files?.includes(filename);
        if (!fileExists) {
            return NextResponse.json(
                { error: "File not found" },
                { status: 404 }
            );
        }

        // Delete file from storage
        await deleteFile(filename, bucketName);

        // Update database
        await prisma.project.update({
            where: { id: projectId },
            data: {
                files: {
                    set: project.files.filter(f => f !== filename)
                }
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to delete file:", error);
        return NextResponse.json(
            { error: "Failed to delete file" },
            { status: 500 }
        );
    }
}