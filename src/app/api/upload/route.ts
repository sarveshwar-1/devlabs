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

        const taskId = req.nextUrl.searchParams.get('taskId');
        const bucketName = req.nextUrl.searchParams.get('bucketName');
        
        if (!taskId || !bucketName) {
            return NextResponse.json(
                { error: "Missing required parameters" },
                { status: 400 }
            );
        }

        try {
            const task = await prisma.task.findUnique({
                where: { id: taskId },
                select: { files: true }
            });

            if (!task) {
                return NextResponse.json(
                    { error: "Task not found" },
                    { status: 404 }
                );
            }

            const files = task.files || [];
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

        const { file, filename, fileType, bucketName, folderName, taskId } = await req.json();
        
        // Input validation
        if (!file || !fileType || !bucketName || !filename || !taskId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if task exists and get current files
        const task = await prisma.task.findUnique({
            where: { id: taskId },
            select: { files: true }
        });

        if (!task) {
            return NextResponse.json(
                { error: "Task not found" },
                { status: 404 }
            );
        }

        // Check for duplicate filename
        const modifiedFilename = `${folderName}/${taskId}/${filename}`;
        const isDuplicate = task.files?.some(existingFile => 
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
        await createFolder(`${folderName}/${taskId}`, bucketName);
        
        try {
            const uploadedFile = await uploadFile(fileBuffer, modifiedFilename, fileType, bucketName);
            
            // Only update database if file upload was successful
            await prisma.task.update({
                where: { id: taskId },
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

        const { filename, bucketName, taskId } = await req.json();
        
        if (!filename || !bucketName || !taskId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Get task and verify file exists
        const task = await prisma.task.findUnique({
            where: { id: taskId },
            select: { files: true }
        });

        if (!task) {
            return NextResponse.json(
                { error: "Task not found" },
                { status: 404 }
            );
        }

        const fileExists = task.files?.includes(filename);
        if (!fileExists) {
            return NextResponse.json(
                { error: "File not found" },
                { status: 404 }
            );
        }

        // Delete file from storage
        await deleteFile(filename, bucketName);

        // Update database
        await prisma.task.update({
            where: { id: taskId },
            data: {
                files: {
                    set: task.files.filter(f => f !== filename)
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