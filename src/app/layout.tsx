import "@/app/globals.css";

// Pass-through root layout: required by app/not-found.tsx.
// <html>/<body> are rendered by app/[locale]/layout.tsx and app/not-found.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
