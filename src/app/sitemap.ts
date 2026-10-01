import type { MetadataRoute } from "next";
import { SITE_URL, site } from "@/lib/site";
import { services } from "@/lib/services";
import { doctors } from "@/lib/doctors";

/**
 * `lastModified` deliberately does NOT use `new Date()`.
 *
 * Stamping every URL with the build time tells Google the whole site changed
 * on every deploy — including deploys that only touched a stylesheet. Google
 * learns to distrust the signal and stops using it. These dates move only
 * when the content genuinely does.
 */
// Part 0 changed site-wide structured data and canonical NAP on this date.
const CONTENT_UPDATED = new Date("2026-10-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
      { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/cosmetic-dentist-prayagraj`, changeFrequency: "monthly", priority: 0.85 },
      { url: `${SITE_URL}/locations/civil-lines-prayagraj`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/areas-we-serve`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE_URL}/doctors`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.6 },
      { url: `${SITE_URL}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    ] satisfies MetadataRoute.Sitemap
  ).map((r) => ({ ...r, lastModified: CONTENT_UPDATED }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly",
    priority: s.featured ? 0.9 : 0.75,
  }));

  const doctorRoutes: MetadataRoute.Sitemap = doctors.map((d) => ({
    url: `${SITE_URL}/doctors/${d.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...doctorRoutes];
}
