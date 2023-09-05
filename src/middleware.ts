// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware

import {
  authMiddleware
} from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ["/signedout", "/signmein","/","/sign-up"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
