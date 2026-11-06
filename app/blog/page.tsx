import type { Metadata } from "next";
import { Suspense } from "react";

import { FilteredPostList, PostList } from "@/components/blog/post-list";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        博客
      </h1>
      {/* The fallback is the unfiltered list, so the prerendered HTML still
          contains every post; the ?tag= filter applies once on the client. */}
      <Suspense fallback={<PostList posts={posts} tags={tags} />}>
        <FilteredPostList posts={posts} tags={tags} />
      </Suspense>
    </section>
  );
}
