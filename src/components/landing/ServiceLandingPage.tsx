import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/seo/JsonLd";
import type { FAQItem } from "@/lib/schema";
import {
  breadcrumbSchema,
  faqPageSchema,
  servicePageSchema,
} from "@/lib/schema";

export interface LandingSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ServiceLandingConfig {
  path: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: LandingSection[];
  faqs: FAQItem[];
  ctaText: string;
  relatedLinks: { href: string; label: string }[];
}

interface Props {
  config: ServiceLandingConfig;
}

export default function ServiceLandingPage({ config }: Props) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: config.h1, path: config.path },
  ];

  const schemas = [
    breadcrumbSchema(breadcrumbs),
    servicePageSchema({
      name: config.h1,
      description: config.subtitle,
      path: config.path,
    }),
    faqPageSchema(config.faqs),
  ];

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schemas} />
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0A2540] to-[#6C7A89]">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-inter text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white/90">{config.h1}</li>
            </ol>
          </nav>
          <h1 className="font-poppins font-bold text-3xl lg:text-5xl text-white leading-tight mb-6">
            {config.h1}
          </h1>
          <p className="font-inter text-lg text-white/80 leading-relaxed">
            {config.subtitle}
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-inter text-lg text-foreground/90 leading-relaxed mb-12">
            {config.intro}
          </p>

          <div className="space-y-12">
            {config.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-poppins font-bold text-2xl text-foreground border-l-4 border-primary pl-4 mb-4">
                  {section.heading}
                </h2>
                <p className="font-inter text-foreground/80 leading-relaxed mb-4">
                  {section.body}
                </p>
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-inter text-foreground/80"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 bg-secondary rounded-2xl p-8 border border-primary/20">
            <p className="font-inter text-foreground/90 mb-6">{config.ctaText}</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-poppins font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {config.relatedLinks.length > 0 && (
            <div className="mt-10 pt-8 border-t border-secondary">
              <h3 className="font-poppins font-semibold text-foreground mb-4">
                Related Resources
              </h3>
              <div className="flex flex-wrap gap-4">
                {config.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-inter text-sm font-semibold text-primary hover:underline"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <FAQ
        title={`${config.h1} — FAQ`}
        subtitle="Common questions answered directly for patients and fertility clinics."
        faqs={config.faqs}
        id="service-faq"
      />

      <Footer />
    </div>
  );
}
