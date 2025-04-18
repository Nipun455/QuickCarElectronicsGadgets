// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(css|js|png|jpg|jpeg|svg|webp|ico|json|ttf|woff|woff2)).*)",
    // Always include API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};
