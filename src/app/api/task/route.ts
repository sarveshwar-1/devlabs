import { NextRequest, NextResponse } from "next/server";
import { uploadFile, downloadFile, createFolder } from "@/lib/db/minio";
import { auth } from "@/lib/auth";
import { prisma } from '@/lib/db/prismadb';
export async function GET(req: NextRequest) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const id = req.nextUrl.searchParams.get("id");
    const fetchImages = req.nextUrl.searchParams.get("images");

    if (!id) {
        return NextResponse.json({ error: "Id is required" }, { status: 400 });
    }

    if (fetchImages === 'true') {
        const task = await prisma.task.findUnique({
            where: {
                id: id
            },
            select: {
                images: true
            }
        });
        
        return NextResponse.json({ images: task?.images || [] });
    }

    const file = await downloadFile(id, "devlabs");
    return new NextResponse(file, { headers: { "Content-Type": "text/markdown" } });
}
export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { file, filename, fileType, bucketName, folderName,taskId } = await req.json();
        console.log( filename, fileType, 'bucketname',bucketName,folderName,taskId);
        if (!file) {
            return NextResponse.json(
                { error: "No file found in request" },
                { status: 400 }
            );
        }
        if (!fileType) {
            return NextResponse.json(
                { error: "File type is required" },
                { status: 400 }
            );
        }
        if (!bucketName) {
            return NextResponse.json(
                { error: "Bucket name is required" },
                { status: 400 }
            );
        }
        const fileBuffer = Buffer.from(file, "base64");
        if (fileType.startsWith('image')) {
            await createFolder(bucketName, folderName);
            const filenamewithfolder = `${folderName}/${filename}`;
            const img = await uploadFile(fileBuffer, filenamewithfolder, fileType, bucketName);
            
            // Use upsert instead of update
            await prisma.task.update({
                where: {
                    id: taskId,
                },

                data: {
                    images: {
                        push: img
                    }
                },
            });
            return NextResponse.json({ url: img });
        } else {
            const url = await uploadFile(fileBuffer, filename, fileType, bucketName);
            await prisma.task.update({
                where: {
                    id: filename,
                },
                data: {
                    file: url
                }
            });
            return NextResponse.json({ url });
        }
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}