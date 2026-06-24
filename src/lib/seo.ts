import type { Metadata } from "next";

export const SITE_URL = "https://arkglobal.com";
export const SITE_NAME = "ARKGlobal";
export const SITE_DESCRIPTION =
  "Global cryo courier for IVF embryos, oocytes, sperm, and reproductive cells. IATA P650 certified with door-to-door service across 200+ countries and real-time cold chain monitoring.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/pic1.png`;
export const COMPANY_EMAIL = "operations@arkglobalasia.com";
export const COMPANY_PHONE = "+60-12-219-6896";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? title
      : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — IVF and embryo cryo shipping specialist`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
