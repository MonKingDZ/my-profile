import type { Metadata } from "next";

import { PostList } from "@/components/blog/post-list";
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
      <PostList posts={posts} />
    </section>
  );
}
