"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, LucideIcon } from "lucide-react";
import { useSession } from "next-auth/react";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Departments", href: "/departments", icon: Home },

];

export function MainNav() {
  const pathname = usePathname();
  const { status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  return (
    <div className="fixed top-14 left-0 flex h-[calc(100%-3.5rem)] w-[80px] flex-col z-20 bg-background border-r">
      {loading ? (
        <div className="flex flex-col items-center gap-2 mt-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-[70px] h-[70px] rounded-lg animate-pulse bg-muted" />
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}

