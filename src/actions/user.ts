'use server'

import { signIn } from '@/auth'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

const register = async (formdata: FormData) => {
  try {
    const name = formdata.get('name') as string | undefined
    const username = formdata.get('username') as string | undefined
    const password = formdata.get('password') as string | undefined
    const role = formdata.get('role') as string | undefined

    if (!name || !username || !password || !role) {
      return { success: false, error: 'Please fill all the fields' }
    }

    // Validate role against the Role enum
    const validRoles = ['STUDENT', 'STAFF', 'ADMIN']
    if (!validRoles.includes(role)) {
      return { success: false, error: 'Invalid role selected' }
    }

    const existingUser = await prisma.user.findUnique({
      where: { rollNumber: username },
    })

    if (existingUser) {
      return { success: false, error: 'User already exists' }
    }

    const hashedPassword = await hash(password, 10)
    await prisma.user.create({
      data: {
        name,
        rollNumber: username,
        password: hashedPassword,
        role: role as 'STUDENT' | 'STAFF' | 'ADMIN',
      },
    })

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    })

    if (result?.error) {
      return { success: false, error: 'Registration successful, but failed to sign in: ' + result.error }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: 'An unexpected error occurred: ' + (error instanceof Error ? error.message : 'Unknown error') }
  }
}

const login = async (formdata: FormData) => {
  const username = formdata.get('username') as string | undefined
  const password = formdata.get('password') as string | undefined

  if (!username || !password) {
    return { success: false, error: 'Please fill all the fields' }
  }

  const result = await signIn('credentials', {
    redirect: false,
    username,
    password,
  })

  if (result?.error) {
    return { success: false, error: result.error }
  }

  return { success: true }
}

export { register, login }