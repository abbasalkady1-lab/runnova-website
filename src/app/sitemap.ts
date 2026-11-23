import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { solutionsData } from "@/data/solutions";
import { productsData } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/solutions",
    "/products",
    "/use-cases",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const solutionRoutes = solutionsData.map((s) => `/solutions/${s.slug}`);
  const productRoutes = productsData.map((p) => `/products/${p.slug}`);

  const allPaths = [...staticRoutes, ...solutionRoutes, ...productRoutes];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of allPaths) {
    const enUrl = `${baseUrl}${path}`;
    const arUrl = `${baseUrl}/ar${path}`;

    // English (Default root)
    entries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency: path === "" ? "daily" : "weekly",
      priority: path === "" ? 1.0 : path.startsWith("/solutions") ? 0.9 : 0.8,
      alternates: {
        languages: {
          en: enUrl,
          ar: arUrl,
          "x-default": enUrl,
        },
      },
    });

    // Arabic
    entries.push({
      url: arUrl,
      lastModified: new Date(),
      changeFrequency: path === "" ? "daily" : "weekly",
      priority: path === "" ? 1.0 : path.startsWith("/solutions") ? 0.9 : 0.8,
      alternates: {
        languages: {
          en: enUrl,
          ar: arUrl,
          "x-default": enUrl,
        },
      },
    });
  }

  return entries;
}
