import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts/zh");

export interface PostMeta {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  excerpt: string;
  cover?: string;
  tags: string[];
  featured: boolean;
  readingMinutes: number;
}

const REQUIRED_FIELDS = ["title", "date", "excerpt"] as const;

// ~400 CJK characters or ~200 English words per minute.
function estimateReadingMinutes(content: string): number {
  const cjkChars = content.match(/[一-鿿]/g)?.length ?? 0;
  const latinWords =
    content.replace(/[一-鿿]/g, " ").match(/[A-Za-z0-9]+/g)?.length ?? 0;
  return Math.max(1, Math.round(cjkChars / 400 + latinWords / 200));
}

function parsePostMeta(slug: string, raw: string): PostMeta {
  const { data, content } = matter(raw);

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
    subtitle: data.subtitle,
    date: data.date,
    excerpt: data.excerpt,
    cover: data.cover,
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    readingMinutes: estimateReadingMinutes(content),
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

export function getFeaturedPosts(limit = 4): PostMeta[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

/** All tags across posts, most-used first. */
export function getAllTags(): string[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}

/** Neighbours in the date-sorted list: `newer` is published after, `older` before. */
export function getAdjacentPosts(slug: string): {
  newer: PostMeta | null;
  older: PostMeta | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}

export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parsePostMeta(slug, fs.readFileSync(filePath, "utf8"));
}
