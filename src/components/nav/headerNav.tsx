
import { ProfileDropdown } from "./profileDropdown"
import ThemeToggler from "./theme-toggle"
import { Button } from "../ui/button"
import { Bell } from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/getSession"

const HeaderNav = async () => {
  const session = await getSession()
  return (
    <header className="fixed top-0 left-0 right-0 h-14 border-b z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-full px-4">
        <Link
          href="/dashboard"
          className="inline-block transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <h1 className="text-2xl font-extrabold tracking-tight">
            
            <span className="text-gray-800 dark:text-gray-200">Dev</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Labs
            </span>
          </h1>
        </Link>

        <div className="flex items-center">
          <ThemeToggler />
          {session?.user ? (
            <>
              <Button variant="ghost" size="icon" className="mr-2"> 
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <ProfileDropdown />
            </>
          ) : (
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderNav