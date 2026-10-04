import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CORRIDOR_HUB_INTRO, CORRIDOR_LANDINGS } from "@/lib/landing-pages/corridors";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "IVF Transport Corridors — Country to Country",
  description:
    "Country-to-country IVF and cryogenic transport corridors served by ARK Global — Malaysia, USA, UK, Australia, Singapore, and more.",
  path: "/corridors",
  keywords: ["IVF transport corridors", "embryo transport Malaysia USA", "international fertility shipping routes"],
});

export default function CorridorsHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0A2540] to-[#6C7A89]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
            Country &amp; corridor guides
          </h1>
          <p className="font-inter text-lg text-white/80">{CORRIDOR_HUB_INTRO}</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-3xl py-16">
        <ul className="space-y-4">
          {CORRIDOR_LANDINGS.map((c) => (
            <li key={c.slug}>
              <Link
                href={c.path}
                className="block rounded-xl border border-border p-5 hover:border-primary/40 hover:bg-muted/30 transition-colors"
              >
                <h2 className="font-poppins font-semibold text-lg text-foreground">{c.h1}</h2>
                <p className="font-inter text-sm text-muted-foreground mt-1">{c.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-inter text-sm text-muted-foreground mt-10">
          Need a corridor not listed?{" "}
          <Link href="/#contact" className="text-primary font-medium hover:underline">
            Start a verified enquiry
          </Link>{" "}
          with both clinic names and countries.
        </p>
      </div>
      <Footer />
    </div>
  );
}
