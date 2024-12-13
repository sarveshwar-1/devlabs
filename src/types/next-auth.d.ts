import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id?: string;
        email?: string;
        githubId?: string;
        githubUsername?: string;
        githubToken?: string;
    }

    interface Profile {
        id?: string;
        login?: string;
        email?: string;
    }

    interface Session {
        user: User;
        githubAccessToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        githubAccessToken?: string;
    }
}