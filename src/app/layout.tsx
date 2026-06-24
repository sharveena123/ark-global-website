import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "@/index.css";
import { RootLayoutClient } from "./layout-client";
import { buildPageMetadata } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildPageMetadata({
  title: "ARKGlobal | IVF Embryo & Cryo Shipping Specialist",
  description:
    "IATA P650 certified cryo courier for IVF embryos, oocytes & sperm. Door-to-door shipping across Southeast Asia & 200+ countries with real-time monitoring.",
  path: "/",
  keywords: [
    "cryo shipping",
    "IVF transport",
    "embryo shipping",
    "stem cell shipping",
    "IATA P650",
    "frozen embryo courier",
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
