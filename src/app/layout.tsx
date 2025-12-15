import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "../components/ui/Background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jamolov Muhammadali — Web Developer",
  description:
    "Portfolio website of Jamolov Muhammadali, a Frontend & Full-Stack Web Developer specializing in React, Next.js, and modern web technologies.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900`}
      >
        {/* <Background /> */}
        {children}
      </body>
    </html>
  );
}
