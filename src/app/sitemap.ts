import { MetadataRoute } from "next";
import { REALISATIONS_DATA } from "@/data/realisations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.senegalinox.com";

  const realisationRoutes = REALISATIONS_DATA.map((item) => ({
    url: `${baseUrl}/realisations/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/nos-references`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...realisationRoutes,
  ];
}
