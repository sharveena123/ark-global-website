import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/seo/JsonLd";
import { getBlogPost, getAllSlugs, blogPosts } from "@/lib/blog-data";
import {
  blogPostingSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.seoTitle ?? post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishedDate,
    modifiedTime: post.publishedDate,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const schemas = [
    blogPostingSchema(post),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
    ...(post.faqs?.length ? [faqPageSchema(post.faqs)] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schemas} />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#0A2540] to-[#6C7A89]">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-inter text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="block w-fit bg-primary/20 text-primary font-inter text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-poppins font-bold text-3xl lg:text-4xl text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="font-inter text-sm text-white/60 mb-4">
            Published {new Date(post.publishedDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.author}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="inline-flex items-center gap-1 text-xs font-inter text-white/60 bg-white/10 px-3 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose-custom space-y-8">
            {post.content.map((section, i) => {
              if (section.type === "intro") {
                return (
                  <div
                    key={i}
                    className="text-lg font-inter text-foreground/90 leading-relaxed space-y-4"
                  >
                    {section.text?.split("\n\n").map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                );
              }

              if (section.type === "h2") {
                return (
                  <div key={i} className="space-y-4">
                    <h2 className="font-poppins font-bold text-2xl text-foreground border-l-4 border-primary pl-4">
                      {section.heading}
                    </h2>
                    {section.text && (
                      <div className="font-inter text-foreground/80 leading-relaxed space-y-3">
                        {section.text.split("\n\n").map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    )}
                    {section.items && (
                      <ul className="space-y-3 ml-2">
                        {section.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 font-inter text-foreground/80"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              if (section.type === "paragraph") {
                return (
                  <div
                    key={i}
                    className="font-inter text-foreground/80 leading-relaxed space-y-3"
                  >
                    {section.text?.split("\n\n").map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                );
              }

              if (section.type === "list") {
                return (
                  <ul key={i} className="space-y-3 ml-2">
                    {section.items?.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 font-inter text-foreground/80"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (section.type === "cta") {
                return (
                  <div
                    key={i}
                    className="bg-secondary rounded-2xl p-6 lg:p-8 border border-primary/20"
                  >
                    <p className="font-inter text-foreground/90 leading-relaxed mb-6">
                      {section.text}
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-primary text-white font-poppins font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      We&apos;re Here to Help
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              }

              return null;
            })}
          </div>

          <p className="mt-12 text-xs font-inter text-muted-foreground border-t border-secondary pt-6">
            © ARK Global Asia. This article is intended for informational purposes.
            Regulatory requirements vary by country and may change. Always confirm
            current import/export requirements with your fertility clinic and the
            relevant regulatory authority before planning a shipment.
          </p>
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && (
        <FAQ
          title="Article FAQ"
          subtitle="Quick answers related to this topic."
          faqs={post.faqs}
          id="article-faq"
        />
      )}

      {/* Prev / Next Navigation */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-4">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex-1 group flex items-start gap-3 p-5 bg-white border border-secondary rounded-xl hover:border-primary/40 hover:shadow-soft transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs font-inter text-muted-foreground mb-1">
                    Previous
                  </p>
                  <p className="font-poppins font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex-1 group flex items-start gap-3 p-5 bg-white border border-secondary rounded-xl hover:border-primary/40 hover:shadow-soft transition-all text-right"
              >
                <div className="flex-1">
                  <p className="text-xs font-inter text-muted-foreground mb-1">
                    Next
                  </p>
                  <p className="font-poppins font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
