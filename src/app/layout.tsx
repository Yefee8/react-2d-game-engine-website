import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React 2D Game Engine",
  description: "A 2D game engine built with React and TypeScript.",
  keywords: [
    "react",
    "game engine",
    "2d",
    "typescript",
    "javascript",
    "web development",
    "gaming",
    "html5",
    "canvas",
  ],
  authors: [{ name: "Yefee", url: "https://portfolio-yefee8.vercel.app" }],
  openGraph: {
    title: "React 2D Game Engine",
    description: "A 2D game engine built with React and TypeScript.",
    url: "https://react-2d-game-engine.vercel.app",
    siteName: "React 2D Game Engine",
    images: [
      {
        url: "https://react-2d-game-engine.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "React 2D Game Engine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React 2D Game Engine",
    description: "A 2D game engine built with React and TypeScript.",
    images: ["https://react-2d-game-engine.vercel.app/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
