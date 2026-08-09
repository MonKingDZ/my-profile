import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        博客
      </h1>
      <ul className="mt-10 space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-1 text-lg font-medium group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
