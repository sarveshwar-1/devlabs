import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname, origin } = req.nextUrl;

  const absolute = (path: string) => `${origin}${path}`;
  if (pathname=="/auth/register") {
    return NextResponse.next();
  }

  if (!token?.user && pathname !== "/auth/login") {
    return NextResponse.redirect(absolute("/auth/login"));
  }

  if (token?.user && pathname === "/auth/login") {
    if (token?.user?.role === "MENTOR") {
      return NextResponse.redirect(absolute("/mentor"));
    }
    return NextResponse.redirect(absolute("/mentee"));
  }

  // Add role-based path restrictions
  if (token?.user?.role === "MENTOR" && pathname.startsWith("/mentee")) {
    return NextResponse.redirect(absolute("/mentor"));
  }

  if (token?.user?.role === "MENTEE" && pathname.startsWith("/mentor")) {
    return NextResponse.redirect(absolute("/mentee"));
  }
    
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/mentor/:path*", "/mentee/:path*"],
};
