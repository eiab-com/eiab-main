import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth"; 

export async function middleware(req: NextRequest) {
  const session = await auth(); // Get session info

  // Define protected routes (only logged-in users can access these)
  const protectedRoutes = ["/admin",'/admin/(.*)'];

  // Check if the current request is for a protected route
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!session) {
      // User is not logged in, redirect to login page
      return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }
  }

  return NextResponse.next(); // Continue processing request
}

// Apply middleware to all routes
export const config = {
  matcher: ["/admin",'/admin/(.*)'], // Define which routes should use middleware
};
