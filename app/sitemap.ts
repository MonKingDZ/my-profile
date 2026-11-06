import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/blog", "/projects"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...pages, ...posts];
}
