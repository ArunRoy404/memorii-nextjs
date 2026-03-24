import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const authRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/otp-verification",
  "/success"
];

const protectedRoutes = [
  "/dashboard",
  "/editor",
  "/preview",
  "/send",
  "/e-card"
];

const DEFAULT_LOGIN_REDIRECT = "/";
const DEFAULT_LOGOUT_REDIRECT = "/login";


export async function middleware(req) {
  const { nextUrl } = req;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isLoggedIn = !!token;

  const isAuthRoute = authRoutes.some(route => nextUrl.pathname.startsWith(route));
  const isProtectedRoute = protectedRoutes.some(route => nextUrl.pathname.startsWith(route));

  // 1. If user is logged in and trying to access an auth route (login/register), redirect to dashboard
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null; // Allow unauthenticated users to access auth routes
  }

  // 2. If user is not logged in and trying to access a protected route (dashboard), redirect to login
  if (isProtectedRoute) {
    if (!isLoggedIn) {
      let callbackUrl = nextUrl.pathname;
      if (nextUrl.search) {
        callbackUrl += nextUrl.search;
      }

      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      return NextResponse.redirect(
        new URL(`${DEFAULT_LOGOUT_REDIRECT}?callbackUrl=${encodedCallbackUrl}`, nextUrl)
      );
    }
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

// Optimization: Match only relevant paths to avoid running middleware on every request (like static files)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
