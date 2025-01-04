import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prismadb";
import { auth } from "@/lib/auth";
import { redis } from "@/lib/db/redis";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    const redisClient = await redis;
    const projectId = params.id;
    const cashquery = "tasks:" + projectId;
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const cashedData = await redisClient.get(cashquery);
    if (cashedData) {
      return NextResponse.json(JSON.parse(cashedData), { status: 200 });
    }
    const tasks = await prisma.task.findMany({
      where: {
        projectid: projectId,
      },
    });

    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to search tasks" },
      { status: 500 }
    );
  }
}
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    const redisClient = await redis;
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { title, dueDate, description, status, projectid } = await req.json();
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        dueDate,
        projectid,
      },
    });

    await redisClient.del("tasks:" + projectid);
    return NextResponse.json({ task }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest) {
  try {
    const session = await auth();
    const redisClient = await redis;
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id, title, description, status, dueDate } = await req.json();
    const date = new Date(dueDate);
    const due = date.toISOString();
    console.log(id, title, description, status, dueDate);
    console.log(typeof(dueDate));
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        status,
        dueDate: due,
      },
    });

    await redisClient.del("tasks:" + task.projectid);
    return NextResponse.json({ task }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message?.toString() || "Failed to update task" },
      { status: 500 }
    );
  }
}
export async function DELETE(req: NextRequest) {
  try {
    const session = await auth();
    const redisClient = await redis;
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await req.json();
    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    await redisClient.del("tasks:" + task.projectid);
    return NextResponse.json({ task }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 500 }
    );
  }
}
