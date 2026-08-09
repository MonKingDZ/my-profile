import Link from "next/link";

import { dictionary } from "@/lib/i18n/dictionaries/zh";

export function Bio() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        你好，我是{dictionary.siteName}
      </h1>
      {/* TODO: 替换为真实个人简介 */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        我是一名软件工程师，专注于构建体验良好的产品。平时的代码大多公开在{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:no-underline"
        >
          GitHub
        </a>{" "}
        上，偶尔也会写点东西发在这个站点的{" "}
        <Link
          href="/blog"
          className="text-primary underline underline-offset-4 hover:no-underline"
        >
          博客
        </Link>{" "}
        里。
      </p>
    </section>
  );
}
