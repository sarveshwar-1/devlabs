"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  BookOpen,
  FileText,
  Terminal,
  MessageSquare,
  LucideIcon,
  Cloudy,
} from "lucide-react";
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
    { name: "Quiz", href: "/mentor/quiz", icon: BookOpen },
    { name: "Assignments", href: "/mentor/assignments", icon: FileText },
    { name: "SharePoint", href: "/mentor/sharepoint", icon: Cloudy },
    { name: "IDE", href: "/ide", icon: Terminal },
    { name: "Forum", href: "/forum", icon: MessageSquare }
  ],
  MENTEE: [
    { name: "Home", href: "/mentee", icon: Home },
    { name: "Quiz", href: "/mentee/quiz", icon: BookOpen },
    { name: "Assignments", href: "/mentee/assignments", icon: FileText },
    { name: "SharePoint", href: "/mentee/sharepoint", icon: Cloudy },
    { name: "IDE", href: "/ide", icon: Terminal },
    { name: "Forum", href: "/forum", icon: MessageSquare }
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
      <div className="fixed top-14 left-0 flex h-[calc(100%-3.5rem)] w-[80px] flex-col z-20 bg-background border-r">
        <div className="flex flex-col items-center gap-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[70px] h-[70px] rounded-lg animate-pulse bg-muted" />
          ))}
        </div>
      </div>
    );
  }

  if (!navItems.length) return null;

  return (
    <div className="fixed top-14 left-0 flex h-[calc(100%-3.5rem)] w-[80px] flex-col z-20 bg-background border-r">
      <nav className="flex flex-col items-center gap-2 mt-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center w-[70px] h-[70px] rounded-lg text-center transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
