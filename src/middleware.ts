import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname, origin } = req.nextUrl;

  const absolute = (path: string) => `${origin}${path}`;
  if (pathname == "/auth/register") {
    return NextResponse.next();
  }

  if (!token?.user && pathname !== "/auth/login") {
    return NextResponse.redirect(absolute("/auth/login"));
  }

  if (token?.user && pathname === "/auth/login") {
    const userRole = (token.user as any)?.role;
    if (userRole === "MENTOR") {
      return NextResponse.redirect(absolute("/mentor/project"));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(absolute("/admin/project"));
    }
    return NextResponse.redirect(absolute("/mentee"));
  }

  // Redirect staff from base pages to projects
  const userRole = (token?.user as any)?.role;
  if (userRole === "MENTOR" && pathname === "/mentor") {
    return NextResponse.redirect(absolute("/mentor/project"));
  }
  
  if (userRole === "ADMIN" && pathname === "/admin") {
    return NextResponse.redirect(absolute("/admin/project"));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/mentor/:path*", "/mentee/:path*", "/admin/:path*"],
};
