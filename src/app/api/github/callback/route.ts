
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prismadb';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state'); // Contains user email

    if (!code || !state) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/profile?error=invalid_request`);
    }

    try {
        // Exchange code for token
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            }),
        });

        const tokenData = await tokenResponse.json();
        
        if (tokenData.access_token) {
            // Update user with GitHub token
            await prisma.user.update({
                where: { email: state },
                data: { githubToken: tokenData.access_token },
            });
        }

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/profile?github=connected`);
    } catch (error) {
        console.error('GitHub callback error:', error);
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/profile?error=github_error`);
    }
}