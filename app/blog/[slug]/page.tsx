import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostMeta } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) notFound();

  const { default: PostContent } = await import(
    `@/content/posts/zh/${slug}.mdx`
  );

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <p className="text-sm text-muted-foreground">
        {new Date(post.date).toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        <PostContent />
      </div>
    </article>
  );
}
