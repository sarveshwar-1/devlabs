import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Providers } from "@/components/providers";

import { MainNav } from "@/components/main-nav";
import HeaderNavbar from "@/components/header/header-nav";

export const metadata: Metadata = {
  title: "DevLabs",
  description: "Students' Marks Killer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} flex min-h-screen `}>
        <Providers>
          <HeaderNavbar />
          <main className="flex-1 mt-14 h-[94vh] overscroll-contain">
            <MainNav />
            <div className="flex-1 ml-28 m-6">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
