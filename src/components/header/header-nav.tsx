import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./theme-toggle";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";
import { UserNav } from "./user-nav";
import { auth } from "@/lib/auth";

const HeaderNavbar = async () => {
  const session = await auth();

  return (
    <header className="fixed top-0 left-0 right-0 h-14 border-b z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-full px-4">
        <Link
          href="/"
          className="inline-block transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dev
            </span>
            <span className="text-gray-800 dark:text-gray-200">Labs</span>
          </h1>
        </Link>

        <div className="flex items-center">
          <Button variant="ghost" className="mr-2" disabled>
            {session?.user?.role}
          </Button>

          <ThemeToggler />
          {session?.user ? (
            <>
              <Button variant="ghost" size="icon" className="mr-2">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <UserNav />
            </>
          ) : (
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default HeaderNavbar;
