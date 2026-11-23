import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-white text-slate-900 font-sans p-6">
        <div className="max-w-md text-center space-y-4">
          <span className="text-4xl font-extrabold text-[#3B28FF] font-mono">404</span>
          <h1 className="text-2xl font-bold">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The page you are looking for does not exist or has been relocated.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#3B28FF] text-white text-sm font-semibold hover:bg-[#2D1CE0] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
