import { NextRequest, NextResponse } from "next/server";
import { getAuthenticated } from "./app/functions/amplifyServerUtils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const authenticated = await getAuthenticated({ request, response });

  if (authenticated && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/subject", request.url));
  }

  if (authenticated) {
    return response;
  }
  return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)",
  ],
};
