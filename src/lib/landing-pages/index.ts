import { AUTHORITY_PAGE } from "@/lib/landing-pages/authority";
import { CORRIDOR_LANDINGS } from "@/lib/landing-pages/corridors";
import { SERVICE_LANDINGS } from "@/lib/landing-pages/services";
import type { LandingPageConfig } from "@/lib/landing-pages/types";

export const ALL_LANDING_PAGES: LandingPageConfig[] = [
  AUTHORITY_PAGE,
  ...SERVICE_LANDINGS,
  ...CORRIDOR_LANDINGS,
];

const bySlug = new Map(ALL_LANDING_PAGES.map((p) => [p.slug, p]));

export function getLandingBySlug(slug: string): LandingPageConfig | undefined {
  return bySlug.get(slug);
}

export function getAllLandingSlugs(): string[] {
  return ALL_LANDING_PAGES.map((p) => p.slug);
}

export { AUTHORITY_PAGE, SERVICE_LANDINGS, CORRIDOR_LANDINGS };
export type { LandingPageConfig };
