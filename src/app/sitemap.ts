import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-data";
import { ALL_LANDING_PAGES } from "@/lib/landing-pages";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/international-cryogenic-medical-logistics", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/corridors", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ivf-transport", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/embryo-shipping", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/cryo-shipping", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs();
  const landingPaths = ALL_LANDING_PAGES.map((p) => p.path);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date("2026-04-04"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const landingEntries: MetadataRoute.Sitemap = landingPaths
    .filter((path) => !STATIC_ROUTES.some((r) => r.path === path))
    .map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date("2026-04-04"),
      changeFrequency: "monthly" as const,
      priority: path.includes("malaysia-to") || path.includes("singapore-to") ? 0.85 : 0.8,
    }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date("2026-04-04"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const merged = [...staticEntries, ...landingEntries, ...blogEntries];
  const seen = new Set<string>();
  return merged.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
