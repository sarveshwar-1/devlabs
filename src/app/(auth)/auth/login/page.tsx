"use client"

import { useTransition, useState} from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { login } from "@/actions/user"
import OrbitLoader from "@/components/ui/loading"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Login = () => {


  const router = useRouter();
  const { update} = useSession(); 
  // useEffect(() => {
  //   if (status === "authenticated") { 
  //     router.push("/dashboard")
  //   }
  // }, []);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await login(formData);
      if (result.success) {
        await update();
        router.push("/dashboard");
        router.refresh();
      } else {
        setError(result.error);
      }
    });
  };

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
          <p className="mt-2 text-sm text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                name="email"
                autoComplete="email"
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
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            Sign In <span className="ml-1">→</span>
          </Button>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-medium text-primary hover:underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login