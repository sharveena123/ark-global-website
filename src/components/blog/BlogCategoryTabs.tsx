"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-types";

interface Props {
  posts: BlogPost[];
  categoryColors: Record<string, string>;
}

export default function BlogCategoryTabs({ posts, categoryColors }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-inter font-semibold transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/70"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl shadow-soft border border-secondary hover:shadow-strong transition-all duration-300 flex flex-col group"
          >
            <div className="bg-gradient-to-br from-secondary to-white p-6 rounded-t-2xl">
              <span
                className={`inline-block text-xs font-inter font-semibold px-3 py-1 rounded-full mb-3 ${
                  categoryColors[post.category] ?? "bg-secondary text-foreground"
                }`}
              >
                {post.category}
              </span>
              <h2 className="font-poppins font-bold text-lg text-foreground leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <p className="font-inter text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {post.metaDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.keywords.slice(0, 2).map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-inter bg-secondary text-foreground/70 px-2 py-1 rounded"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary font-inter font-semibold text-sm hover:gap-3 transition-all"
                aria-label={`Read full article: ${post.title}`}
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
