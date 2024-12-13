import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
        try {
            const mentors = await prisma.mentor.findMany({
                include: {
                    user: {
                        select: {
                            name:true,
                        }
                    }
                }
            })
            return NextResponse.json(mentors,{status:200});
        } catch (error) {
            return NextResponse.json({ error },{status:500});
        }
  
};