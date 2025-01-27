import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          satoshi.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
