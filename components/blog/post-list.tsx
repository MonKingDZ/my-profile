"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";

import { TagLink } from "@/components/blog/tag-link";
import { buttonVariants } from "@/components/ui/button";
import { formatPostDate } from "@/lib/date";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/posts";

const PAGE_SIZE = 5;

interface PostListProps {
  posts: PostMeta[];
  tags: string[];
}

/** Reads `?tag=` from the URL. Must sit inside a <Suspense> boundary. */
export function FilteredPostList(props: PostListProps) {
  const tag = useSearchParams().get("tag");
  const activeTag = tag && props.tags.includes(tag) ? tag : null;
  return <PostList {...props} activeTag={activeTag} />;
}

export function PostList({
  posts,
  tags,
  activeTag = null,
}: PostListProps & { activeTag?: string | null }) {
  const [expanded, setExpanded] = useState(false);
  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;
  const visiblePosts = expanded ? filteredPosts : filteredPosts.slice(0, PAGE_SIZE);

  return (
    <>
      <nav aria-label="按标签筛选" className="mt-8 flex flex-wrap gap-2">
        <TagLink tag={null} active={activeTag === null}>
          全部
        </TagLink>
        {tags.map((tag) => (
          <TagLink key={tag} tag={tag} active={tag === activeTag} />
        ))}
      </nav>
      <ul className="mt-10 space-y-10">
        {visiblePosts.map((post) => (
          <li key={post.slug} className="group">
            <p className="text-xs text-muted-foreground">
              {formatPostDate(post.date)} · {post.readingMinutes} 分钟阅读
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-1 inline-block text-lg font-medium underline-offset-4 group-hover:underline"
            >
              {post.title}
            </Link>
            {post.subtitle ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {post.subtitle}
              </p>
            ) : null}
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            {post.tags.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TagLink key={tag} tag={tag} active={tag === activeTag} />
                ))}
              </div>
            ) : null}
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-flex items-center text-sm text-brand-gold"
            >
              <span className="group-hover:underline">阅读更多</span>
              <span className="ml-1 flex items-center">
                <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                <ChevronRight
                  aria-hidden
                  className="-ml-2.5 size-4 -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:opacity-60"
                />
                <ChevronRight
                  aria-hidden
                  className="-ml-2.5 size-4 -translate-x-2 opacity-0 transition-all duration-300 delay-75 ease-out group-hover:translate-x-0.5 group-hover:opacity-30"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {!expanded && filteredPosts.length > PAGE_SIZE ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-10")}
        >
          展开更多
        </button>
      ) : null}
    </>
  );
}
