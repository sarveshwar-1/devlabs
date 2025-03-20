export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        console.log('redirect uri', `${process.env.NEXT_PUBLIC_APP_URL}/api/github/callback`);
    
        const params = new URLSearchParams({
            client_id: process.env.GITHUB_CLIENT_ID!,
            scope: 'read:user user:email repo',
            state: session.user.email,
        });
    
        const url = `https://github.com/login/oauth/authorize?${params}`;
        return NextResponse.json({ url });
    } catch(error) {
        console.error("github auth error", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}