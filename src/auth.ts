import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import { compare } from 'bcryptjs'

declare module "next-auth" {
  interface User {
    role?: string;
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder:"username" },
        password: {  label: "Password", type: "password" }
      },
      authorize : async (credentials) => {
        const username = credentials.username as string | undefined
        const password = credentials.password as string | undefined

        if(!username || !password) {
          throw new CredentialsSignin('Please fill all the fields') 
        }
        const user = await prisma.user.findUnique({
                where: { rollNumber: username },
            })

        if (!user) {
                return null;
            }
            
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error('Invalid password')
        }
        const userData = { id: user.id, name: user.name, username: user.rollNumber, role: user.role }

        return userData
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async session({session, token}) {
      if(token?.sub){
        session.user.id = token.sub;
        session.user.role = token.role as string | undefined;
      }
      return session
    },

    async jwt({token, user}) {
      if(user){
        token.sub = user.id
        token.role = user.role
      }
      return token;
    },
  }
})