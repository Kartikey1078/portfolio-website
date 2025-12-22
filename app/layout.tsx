import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kartikey Tyagi - Full Stack Developer & Software Engineer",
  description: "A self-taught Full Stack Developer and Software Engineer with 3+ years of experience building scalable web applications using Next.js, React, Node.js, and modern web technologies.",
  keywords: [
    "Kartikey Tyagi",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack",
    "Portfolio",
  ],
  authors: [{ name: "Kartikey Tyagi" }],
  creator: "Kartikey Tyagi",
  publisher: "Kartikey Tyagi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kartikey Tyagi - Software Engineer & UI/UX Designer",
    siteName: "Kartikey Tyagi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartikey Tyagi - Software Engineer & UI/UX Designer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
