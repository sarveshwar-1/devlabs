"use client"

import { useTransition, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { login } from "@/actions/user"
import OrbitLoader from "@/components/ui/loading"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const Login = () => {


  const router = useRouter();
  const { update} = useSession(); 
  // useEffect(() => {
  //   if (status === "authenticated") { 
  //     router.push("/dashboard")
  //   }
  // }, []);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Handle error cases
  useEffect(() => {
    if (error) {
      // Auto-dismiss error after 5 seconds
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      
      // Set focus to email field if error involves email/user
      if (error.toLowerCase().includes('user') || error.toLowerCase().includes('email')) {
        document.getElementById('email')?.focus();
      } 
      // Set focus to password field if error involves password
      else if (error.toLowerCase().includes('password')) {
        document.getElementById('password')?.focus();
      }
      
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
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
          <h1 className="text-3xl font-bold tracking-tight">DevLabs</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to your account to continue</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 rounded-md bg-destructive/10 border border-destructive/30 text-destructive flex items-start gap-2.5 animate-in slide-in-from-top-2 fade-in-50 duration-300 relative overflow-hidden animate-shake hover:bg-destructive/15 transition-colors">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-destructive/30 via-destructive to-destructive/30 animate-gradient" />
            <ExclamationTriangleIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div className="w-full">
              <div className="flex justify-between items-start">
                <p className="font-medium leading-tight">{error}</p>
                <button 
                  onClick={() => setError(null)} 
                  className="text-destructive/70 hover:text-destructive -mt-1 -mr-1 p-1 rounded-full hover:bg-destructive/10"
                  aria-label="Dismiss error"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs mt-1 text-destructive/80">
                {error?.toLowerCase().includes('password') ? 
                  'Please check your password and try again' : 
                error?.toLowerCase().includes('user') || error?.toLowerCase().includes('email') ? 
                  'Please check your email address and try again' : 
                  'Please check your credentials and try again'}
              </p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Username</Label>
              <Input
                id="username"
                placeholder="you@example.com"
                type="text"
                name="username"
                autoComplete="username"
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