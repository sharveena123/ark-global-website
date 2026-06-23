import type { Metadata, Viewport } from "next";
import "@/index.css";
import { RootLayoutClient } from "./layout-client";

export const metadata: Metadata = {
  title: "ARKGlobal - Your Trusted Cryo Shipper | IVF & Stem Cell Shipping",
  description:
    "Southeast Asia's leading cryo shipping specialist for IVF samples, embryos, stem cells. IATA compliant, door-to-door service with cold chain integrity.",
  authors: [{ name: "ARKGlobal" }],
  keywords: [
    "cryo shipping",
    "IVF samples",
    "stem cell shipping",
    "embryo transport",
    "IATA compliant",
  ],
  openGraph: {
    title: "ARKGlobal - Your Trusted Cryo Shipper",
    description:
      "Southeast Asia's leading cryo shipping specialist for IVF samples, embryos, stem cells. IATA compliant, door-to-door service.",
    type: "website",
    url: "https://arkglobal.com",
    siteName: "ARKGlobal",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
