import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/landing/ServiceLandingPage";
import { getAllLandingSlugs, getLandingBySlug } from "@/lib/landing-pages";
import { buildPageMetadata } from "@/lib/seo";
import type { ServiceLandingConfig } from "@/components/landing/ServiceLandingPage";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingBySlug(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: page.path,
    keywords: page.meta.keywords,
  });
}

function toServiceConfig(page: NonNullable<ReturnType<typeof getLandingBySlug>>): ServiceLandingConfig {
  return {
    path: page.path,
    h1: page.h1,
    subtitle: page.subtitle,
    intro: page.intro,
    professionalLine: page.professionalLine,
    sections: page.sections,
    faqs: page.faqs,
    ctaText: page.ctaText,
    relatedLinks: page.relatedLinks,
  };
}

export default async function DynamicLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingBySlug(slug);
  if (!page) notFound();
  return <ServiceLandingPage config={toServiceConfig(page)} />;
}
