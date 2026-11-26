import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames, skipping internal files
  // (and the link-preview image, which has no file extension).
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)"],
};
