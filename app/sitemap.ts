import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getAllPosts();
  // The sitemap is generated at build time, so this is the deploy time.
  const buildTime = new Date();
  // /blog only changes when a post is published; posts are sorted newest first.
  const latestPostDate = allPosts[0] ? new Date(allPosts[0].date) : buildTime;

  const pages = [
    { url: SITE_URL, lastModified: buildTime },
    { url: `${SITE_URL}/blog`, lastModified: latestPostDate },
    { url: `${SITE_URL}/projects`, lastModified: buildTime },
  ];

  const posts = allPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...pages, ...posts];
}
