import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { TagLink } from "@/components/blog/tag-link";
import { formatPostDate } from "@/lib/date";
import {
  getAdjacentPosts,
  getAllPosts,
  getPostMeta,
  type PostMeta,
} from "@/lib/posts";
import { cn } from "@/lib/utils";

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
      // Setting openGraph here replaces the inherited one, so fall back to
      // the site-wide image explicitly.
      images: [post.cover ?? "/opengraph-image"],
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

  const { newer, older } = getAdjacentPosts(slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" /> 返回博客
      </Link>
      <p className="mt-8 text-sm text-muted-foreground">
        {formatPostDate(post.date)} · {post.readingMinutes} 分钟阅读
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
        {post.title}
      </h1>
      {post.subtitle ? (
        <p className="mt-3 text-lg text-muted-foreground">{post.subtitle}</p>
      ) : null}
      {post.tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagLink key={tag} tag={tag} />
          ))}
        </div>
      ) : null}
      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        <PostContent />
      </div>
      {newer || older ? (
        <nav
          aria-label="更多文章"
          className="mt-16 grid gap-4 border-t border-border/60 pt-8 sm:grid-cols-2"
        >
          {older ? (
            <AdjacentLink post={older} label="上一篇" />
          ) : (
            <span aria-hidden />
          )}
          {newer ? (
            <AdjacentLink post={newer} label="下一篇" align="right" />
          ) : null}
        </nav>
      ) : null}
    </article>
  );
}

function AdjacentLink({
  post,
  label,
  align = "left",
}: {
  post: PostMeta;
  label: string;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group rounded-lg border border-border p-4 transition-colors hover:border-primary/60",
        align === "right" && "sm:text-right",
      )}
    >
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium group-hover:text-primary">{post.title}</p>
    </Link>
  );
}
