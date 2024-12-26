"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BookOpen, FileText, type LucideIcon, Cloudy } from 'lucide-react';
import { useSession } from "next-auth/react";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

type UserRole = "MENTOR" | "MENTEE";

const navItemsByRole: Record<UserRole, NavItem[]> = {
  MENTOR: [
    { name: "Home", href: "/mentor", icon: Home },
    { name: "Projects", href: "/mentor/project", icon: BookOpen },
    { name: "Teams", href: "/mentor/teams", icon: FileText },
    { name: "Blog", href: "/mentor/blogs", icon: Cloudy },
  ],
  MENTEE: [
    { name: "Home", href: "/mentee", icon: Home },
    { name: "Projects", href: "/mentee/project", icon: BookOpen },
    { name: "Teams", href: "/mentee/teams", icon: FileText },
    { name: "Blog", href: "/mentee/blogs", icon: Cloudy },
  ],
};

export function MainNav() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    const role = session?.user?.role as UserRole;
    if (role && navItemsByRole[role]) {
      setNavItems(navItemsByRole[role]);
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="fixed top-14 left-0 flex h-[calc(100vh-3.5rem)] w-20 flex-col z-20 bg-background border-r shadow-md transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center gap-4 mt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-14 h-14 rounded-xl animate-pulse bg-muted" />
          ))}
        </div>
      </div>
    );
  }

  if (!navItems.length) return null;

  return (
    <div className="fixed top-14 left-0 flex h-[calc(100vh-3.5rem)] w-20 flex-col z-20 bg-background border-r shadow-md transition-all duration-300 ease-in-out">
      <nav className="flex flex-col items-center gap-4 mt-6">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center w-14 h-14 rounded-xl text-center transition-all duration-200 ease-in-out",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg scale-110"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105"
              )}
            >
              <Icon className={cn("h-6 w-6 mb-1", isActive ? "stroke-[2.5px]" : "stroke-2")} />
              <span className={cn("text-[10px] font-medium", isActive ? "font-semibold" : "")}>{name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

