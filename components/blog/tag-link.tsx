import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function tagHref(tag: string | null): string {
  return tag ? `/blog?tag=${encodeURIComponent(tag)}` : "/blog";
}

export function TagLink({
  tag,
  active = false,
  children,
}: {
  tag: string | null;
  active?: boolean;
  children?: ReactNode;
}) {
  return (
    <Link
      href={tagHref(tag)}
      scroll={false}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full border px-3 py-1 text-xs transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary",
      )}
    >
      {children ?? `#${tag}`}
    </Link>
  );
}
