import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bathri Prasath TK — Independent Developer",
  description:
    "The personal portfolio of Bathri Prasath TK: full-stack development, applied AI and thoughtfully engineered digital products.",
  applicationName: "BTK / Private Technology Office",
  openGraph: {
    title: "Bathri Prasath TK — Independent Developer",
    description: "Software engineering, applied intelligence and selected work.",
    type: "website",
    url: "https://bathri-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathri Prasath TK — Independent Developer",
    description: "Software engineering, applied intelligence and selected work.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
