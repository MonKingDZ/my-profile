import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts/zh");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  tags: string[];
}

const REQUIRED_FIELDS = ["title", "date", "excerpt"] as const;

function parsePostMeta(slug: string, raw: string): PostMeta {
  const { data } = matter(raw);

  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) {
      throw new Error(
        `Post "${slug}" is missing required frontmatter field "${field}"`
      );
    }
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    cover: data.cover,
    tags: data.tags ?? [],
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return slugs
    .map((slug) =>
      parsePostMeta(slug, fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8"))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parsePostMeta(slug, fs.readFileSync(filePath, "utf8"));
}
