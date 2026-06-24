import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import BlogCategoryTabs from "@/components/blog/BlogCategoryTabs";
import { blogPosts } from "@/lib/blog-data";
import { breadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog | Cryo Shipping & IVF Transport Guides",
  description:
    "Expert guides on IVF embryo transport, cryogenic dry shippers, IATA P650 compliance, and international fertility logistics from ARKGlobal.",
  path: "/blog",
  keywords: [
    "IVF blog",
    "embryo shipping guide",
    "cryo shipping articles",
    "fertility logistics",
  ],
});

const categoryColors: Record<string, string> = {
  "Patient Guides": "bg-primary/10 text-primary",
  "Industry Insights": "bg-secondary text-foreground",
  "Route Guides": "bg-primary/10 text-primary",
  "Education": "bg-secondary text-foreground",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Navigation />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0A2540] to-[#6C7A89]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            ARK Global Asia Blog
          </div>
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-white mb-4">
            Cryo Shipping <span className="text-primary">Insights</span>
          </h1>
          <p className="font-inter text-lg text-white/80 max-w-2xl mx-auto">
            Honest, expert guidance for patients and clinics navigating international
            fertility transport — written with care, backed by experience.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BlogCategoryTabs
            posts={sortedPosts}
            categoryColors={categoryColors}
          />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-[#0A2540] to-[#00AEEF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl text-white mb-4">
            Ready to take the next step?
          </h2>
          <p className="font-inter text-white/80 mb-8 max-w-xl mx-auto">
            Whether you&apos;re a clinic or a patient, we&apos;re here to listen and
            guide you — with no obligation and no pressure. Just honest, caring support.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-foreground font-poppins font-semibold px-8 py-3 rounded-full hover:bg-secondary transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
