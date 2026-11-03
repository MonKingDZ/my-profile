import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
      <p className="font-accent text-8xl text-primary italic sm:text-9xl">404</p>
      <h1 className="mt-6 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        这一页走丢了
      </h1>
      <p className="mt-4 text-muted-foreground">
        你要找的页面不存在，或者已经被移走了。
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
          回到首页
        </Link>
        <Link href="/blog" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
          去看看博客
        </Link>
      </div>
    </section>
  );
}
