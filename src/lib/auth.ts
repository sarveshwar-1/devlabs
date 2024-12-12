import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"; // Add GitHub provider import

import { AdapterUser } from "next-auth/adapters";
import { compare, hash } from "bcryptjs";
import { prisma } from "./db/prismadb";


declare module "next-auth/jwt" {
    interface JWT {
        id: string;
    }
}


export const { handlers, auth, signIn, signOut } = NextAuth({
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            credentials: {
                rollNo: { label: "RollNumber", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.rollNo || !credentials?.password) {
                        throw new Error("Missing roll number or password");
                    }

                    let user = await prisma.user.findFirst({
                        where: { rollNo: credentials.rollNo },
                    });

                    if (!user && credentials.rollNo === "admin" && credentials.password === "admin") {
                        user = await prisma.user.create({
                            data: {
                                name: "admin",
                                email: "admin@gmail.com",
                                password: await hash("admin", 10),
                                role: "MENTOR",
                                isActive: true,
                                phoneNo: '',
                                rollNo: "admin",
                                createdAt: new Date(),
                                lastPasswordChange: new Date(),
                            },
                        })
                    }

                    if (!user) {
                        throw new Error("User not found");
                    }

                    const isPasswordValid = await compare(String(credentials.password), String(user.password));
                    if (!isPasswordValid) {
                        throw new Error("Invalid credentials");
                    }

                    const { password, ...safeUser } = user;

                    return safeUser;
                } catch (error) {
                    if (error instanceof Error) {
                        console.log("Authorization error:", error.message);
                    } else {
                        console.log("Authorization error:", error);
                    }
                    throw new Error("Invalid credentials");
                }
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'read:user user:email repo',
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }: any) {
            if (account?.provider === 'github') {
                try {
                    const session = await auth();
                    
                    // If user is already logged in with credentials, link the GitHub account
                    if (session?.user?.email) {
                        await prisma.user.update({
                            where: { email: session.user.email },
                            data: {
                                githubId: profile.id?.toString(),
                                githubUsername: profile.login?.toString(),
                                githubToken: account.access_token
                            }
                        });
                        return true;
                    }

                    // Check if this GitHub account is already linked to a user
                    const existingUser = await prisma.user.findFirst({
                        where: {
                            OR: [
                                { githubId: profile.id?.toString() },
                                { email: profile.email }
                            ]
                        }
                    });

                    if (existingUser) {
                        // Update token if user exists
                        await prisma.user.update({
                            where: { id: existingUser.id },
                            data: { githubToken: account.access_token }
                        });
                        return true;
                    }

                    // Redirect to login if no existing user found
                    return '/auth/login?message=Please log in first to link your GitHub account';
                } catch (error) {
                    console.error("Error in signIn callback:", error);
                    return '/auth/error?error=DatabaseError';
                }
            }
            return true;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.user = user;
            }
            if (account?.provider === 'github') {
                // Use stored token instead of session token
                const dbUser = await prisma.user.findFirst({
                    where: { 
                        OR: [
                            { githubId: account.providerAccountId },
                            { id: token.user?.id }
                        ]
                    }
                });
                if (dbUser?.githubToken) {
                    token.githubAccessToken = dbUser.githubToken;
                }
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as AdapterUser & User;
            if (token.githubAccessToken) {
                session.githubAccessToken = token.githubAccessToken;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
});