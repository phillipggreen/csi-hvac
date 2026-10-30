import type { Metadata } from "next";

import { siteConfig } from "@/data/site-config";

// Served by src/app/opengraph-image.tsx.
export const shareImage = {
  url: "/opengraph-image",
  alt: `${siteConfig.name}: Heating, Cooling & Restaurant Equipment Service`,
  width: 1200,
  height: 630,
  type: "image/png",
};

export const baseOpenGraph = {
  type: "website",
  locale: "en_US",
  siteName: siteConfig.name,
  // Listed explicitly because a page's own openGraph replaces the file-based image.
  images: [shareImage],
} satisfies Metadata["openGraph"];

type PageMetadataOptions = {
  title: Metadata["title"];
  description: string;
  path: string;
};

// Next.js merges metadata shallowly, so each page repeats the shared Open Graph fields.
// Open Graph title and description fall back to the page's own title and description.
export function createPageMetadata({ description, path, title }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, url: path },
  };
}
