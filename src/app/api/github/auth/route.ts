
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function GET(req: NextRequest) {
    const session = await auth();
    if (!session?.user?.email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const params = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID!,
        redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/github/callback`,
        scope: 'read:user user:email repo',
        state: session.user.email, // Use email as state to verify user
    });

    const url = `https://github.com/login/oauth/authorize?${params}`;
    return NextResponse.json({ url });
}