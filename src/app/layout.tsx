import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "SOS Nonprofit | Support the Mission",
  description: "Subscribe to make a lasting impact. Join the movement.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><div className="grain" />{children}</body></html>);
}
