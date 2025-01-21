import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AdapterUser } from "next-auth/adapters";
import { compare, hash } from "bcryptjs";
import { prisma } from "./db/prismadb";

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        githubToken?: string;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & AdapterUser;
        githubToken?: string;
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    trustHost:true,
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
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            // Get GitHub token from database
            const dbUser = await prisma.user.findUnique({
                where: { id: token.user?.id },
                select: { githubToken: true }
            });
            if (dbUser?.githubToken) {
                token.githubToken = dbUser.githubToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as AdapterUser & User;
            if (token.githubToken) {
                session.githubToken = token.githubToken;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
});