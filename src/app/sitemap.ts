import type { MetadataRoute } from "next";

const BASE_URL = "https://mafia-klubas.lt";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE_URL}/`, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/bilietai`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/komandos`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/renginiai`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
  ];
}
