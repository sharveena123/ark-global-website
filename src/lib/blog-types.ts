import type { FAQItem } from "./schema";

export interface BlogSection {
  type: "intro" | "h2" | "paragraph" | "list" | "cta";
  heading?: string;
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription: string;
  category: string;
  keywords: string[];
  publishedDate: string;
  author: string;
  content: BlogSection[];
  faqs?: FAQItem[];
}
