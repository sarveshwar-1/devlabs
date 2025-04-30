"use client"

import { useTransition, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { register } from "@/actions/user"
import OrbitLoader from "@/components/ui/loading"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const Register = () => {
  const { update } = useSession()
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await register(formData)
      if (result.success) {
        await update()
        router.push("/")
        router.refresh()
      } else {
        setError(result.error || "An unknown error occurred")
      }
    })
  }

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center px-4 py-12">
      {isPending && (
        <div className="absolute w-32 h-32 flex items-center justify-center">
          <OrbitLoader />
        </div>
      )}
      <div className="w-full max-w-md rounded-lg border bg-card p-8 shadow-sm transition-all">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Amrita - CP</h1>
          <p className="mt-2 text-sm text-muted-foreground">Create an account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                type="text"
                name="name"
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                name="email"
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                name="password"
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                name="role"
                required
                disabled={isPending}
                defaultValue=""
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="" disabled>Select your role</option>
                <option value="STUDENT">Student</option>
                <option value="STAFF">Staff</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            Sign Up →
          </Button>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register