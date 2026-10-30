import type { MetadataRoute } from "next";

import { publicRoutes, siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: route === "/" ? siteConfig.url : `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
