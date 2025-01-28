import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Metadata } from "next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Patientsat.ai",
  description: "Patientsat.ai",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Home - Patientsat.ai",
    description: "Patientsat.ai",
    url: "https://yourwebsite.com",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Page Title",
    description: "Your page description",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};

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
