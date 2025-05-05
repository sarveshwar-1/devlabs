import {prisma} from "@/lib/prisma"
import {NextResponse} from "next/server"
import {hash} from "bcryptjs"
import {getSession} from "@/lib/getSession"


export async function PATCH(request : Request, {params}: {params: {studentId: string}}) {
    const session = await getSession();
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

    const param = await params;
    const studentId = param.studentId;
    try{
        const student = await prisma.user.findUnique({
            where: { id: studentId},
            select: {rollNumber: true}
        })

        if(!student || !student.rollNumber){
            return NextResponse.json({error: 'Student or roll number not found'} , {status : 404})
        }

        const hashedPassword = await hash(student.rollNumber, 10);

        await prisma.user.update({
            where: {id: studentId},
            data:{
                password: hashedPassword
            }
        });
        return NextResponse.json({ message: 'Password reset successfully' }, { status: 200 });
    } catch (error) {
      console.error('Failed to reset password:', error);
      return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 });
    }
}
