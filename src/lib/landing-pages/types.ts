import type { FAQItem } from "@/lib/schema";

export interface LandingSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface LandingPageConfig {
  slug: string;
  path: string;
  h1: string;
  subtitle: string;
  professionalLine?: string;
  intro: string;
  sections: LandingSection[];
  faqs: FAQItem[];
  ctaText: string;
  relatedLinks: { href: string; label: string }[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  pageType?: "service" | "corridor" | "authority";
}
