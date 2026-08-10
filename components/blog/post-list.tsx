"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/posts";

const PAGE_SIZE = 5;

export function PostList({ posts }: { posts: PostMeta[] }) {
  const [expanded, setExpanded] = useState(false);
  const visiblePosts = expanded ? posts : posts.slice(0, PAGE_SIZE);

  return (
    <>
      <ul className="mt-10 space-y-10">
        {visiblePosts.map((post) => (
          <li key={post.slug} className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium underline-offset-4 group-hover:underline"
            >
              {post.title}
            </Link>
            {post.subtitle ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {post.subtitle}
              </p>
            ) : null}
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
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
      {!expanded && posts.length > PAGE_SIZE ? (
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
