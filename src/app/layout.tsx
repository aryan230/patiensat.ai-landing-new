import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Metadata } from "next";
import Script from "next/script";
import LocomotiveScroll from "@/components/LocomotiveScroll";
import Head from "next/head";
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
        <Script id="vg-config" strategy="beforeInteractive">
          {`
        window.VG_CONFIG = {
          ID: "QjSfIejHqyGT8cqNO2ll", // YOUR AGENT ID
          region: 'eu', // YOUR ACCOUNT REGION 
          render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
          stylesheets: [
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
          ],
        };
      `}
        </Script>

        {/* Load the external script */}
        <Script
          src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
          strategy="lazyOnload"
          defer
        />
        <LocomotiveScroll>{children}</LocomotiveScroll>
      </body>
    </html>
  );
}
