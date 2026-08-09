import type { Metadata } from "next";
import { Rss } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "订阅",
};

export default function SubscribePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        订阅
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        本站提供 RSS feed，你可以用任意 RSS 阅读器订阅博客更新。
      </p>
      <a
        href="/rss.xml"
        className={cn(buttonVariants({ variant: "default" }), "mt-6 gap-1.5")}
      >
        <Rss className="size-4" />
        订阅 RSS
      </a>
    </section>
  );
}
