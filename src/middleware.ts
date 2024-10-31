import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt, verifySession} from '@/lib/session'

const protectedRoutes = ["/project-listing", "/new-project"];
const publicRoutes = ["/login"];
const landingRoutes = ["/", "/project"]

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const isLandingRoutes = landingRoutes.includes(path);

  if (isLandingRoutes){
    return NextResponse.next();
  }

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/project-listing", req.nextUrl));
  }

  return NextResponse.next();
}