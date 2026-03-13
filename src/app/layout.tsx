import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "MISSION 365 — Giving Made Consistent",
  description: "Subscribe to causes you care about. See real impact. Support verified missions monthly.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><div className="grain" />{children}</body></html>);
}
