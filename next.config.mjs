import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Nova moved to agentnova.cloud (owner decision 2026-11-25); this site takes
// runnova.cloud. Old Nova links keep working by being sent there.
const NOVA_ORIGIN = "https://agentnova.cloud";

// Pages and files that only exist in the Nova app. Permanent (308): the owner
// made the move final on 2026-11-26.
const NOVA_PATHS = [
  "/dashboard/:path*",
  "/auth/:path*",
  "/admin/:path*",
  "/onboarding/:path*",
  "/invite/:path*",
  "/approve/:path*",
  "/n/:path*",
  "/c/:path*",
  "/widget/:path*",
  "/checkout/:path*",
  "/payment/:path*",
  "/pricing",
  "/refund",
  "/security",
  "/product",
  "/live",
  "/novagenius",
  "/labs/:path*",
  "/llms.txt",
  "/manifest.webmanifest",
  "/og/:path*",
  "/brand/:path*",
  "/assets/:path*",
  "/voice/:path*",
  // Nova's other languages (this site only has English and Arabic).
  "/:locale(fr|es|de|it|pt|tr|ru|fa|ur|hi|bn|id|ms|zh|ja|ko|nl|pl|uk|sv)/:path*",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return NOVA_PATHS.map((source) => ({
      source,
      destination: `${NOVA_ORIGIN}${source.replace(/\([^)]*\)/g, "")}`,
      permanent: true,
    }));
  },
  async rewrites() {
    return {
      // Nova's API (widget calls, Paymob callbacks, sign-in) is passed through
      // as is, so POST requests keep working. This site's own /api/contact wins.
      afterFiles: [{ source: "/api/:path*", destination: `${NOVA_ORIGIN}/api/:path*` }],
    };
  },
};

export default withNextIntl(nextConfig);
