import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav — Developer & Designer",
  description:
    "Full-stack developer crafting modern web experiences with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Gaurav — Developer & Designer",
    description:
      "Full-stack developer crafting modern web experiences with React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
