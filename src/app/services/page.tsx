import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SERVICE_LANDINGS } from "@/lib/landing-pages";
import { buildPageMetadata } from "@/lib/seo";
import { PROFESSIONAL_TAGLINE } from "@/lib/company-facts";

export const metadata: Metadata = buildPageMetadata({
  title: "Cryogenic IVF & Medical Transport Services",
  description: `${PROFESSIONAL_TAGLINE} Browse ARK Global service pages for embryos, sperm, oocytes, hand-carry, permits, and customs.`,
  path: "/services",
  keywords: ["IVF transport services", "cryogenic medical logistics", "embryo courier services"],
});

export default function ServicesHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0A2540] to-[#6C7A89]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
            International cryogenic transport services
          </h1>
          <p className="font-inter text-lg text-white/80">{PROFESSIONAL_TAGLINE}</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-3xl py-16">
        <ul className="space-y-4">
          {SERVICE_LANDINGS.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.path}
                className="block rounded-xl border border-border p-5 hover:border-primary/40 hover:bg-muted/30 transition-colors"
              >
                <h2 className="font-poppins font-semibold text-lg text-foreground">{s.h1}</h2>
                <p className="font-inter text-sm text-muted-foreground mt-1">{s.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-inter text-sm text-muted-foreground mt-10">
          Also see{" "}
          <Link href="/ivf-transport" className="text-primary font-medium hover:underline">
            IVF transport overview
          </Link>
          ,{" "}
          <Link href="/corridors" className="text-primary font-medium hover:underline">
            country corridors
          </Link>
          , and the{" "}
          <Link href="/international-cryogenic-medical-logistics" className="text-primary font-medium hover:underline">
            ARK Global authority profile
          </Link>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
