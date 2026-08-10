"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { dictionary } from "@/lib/i18n/dictionaries/zh";

export function Bio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Headline is visible immediately at scroll position 0. The aura acts
      // as a spotlight focused on it — strongest at the top, then fading
      // out as the user scrolls. The intro paragraph reveals as you scroll.
      gsap.set(".bio-aura", { scale: 1, opacity: 0.35 });
      gsap.set(".bio-copy", { yPercent: 30, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
          },
        })
        .to(".bio-aura", { scale: 1.4, opacity: 0, ease: "none" }, 0)
        .to(".bio-copy", { yPercent: 0, opacity: 1, ease: "none" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="bio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <div
        aria-hidden
        className="bio-aura pointer-events-none absolute size-[60vmin] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)] opacity-35 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-intro text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          你好，我是
          <span className="font-accent text-primary italic"> {dictionary.siteName}</span>
        </h1>
        <p className="bio-copy font-intro mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          我是一名AI全栈独立开发者，喜欢通过代码改变现实生活。
          <br />
          同时我又是一个极度热爱生活的人，喜欢不断尝试新事物，对于探索未知有着强烈的好奇。{" "}
          <br />
          同时我也是一名终身学习者\滑雪教练\桨板爱好者\健身爱好者...
          <br />
          希望你能喜欢我的作品，也欢迎你和我交流。

          <a
            href="https://github.com/MonKingDZ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent italic underline underline-offset-4 hover:no-underline"
          >
            GitHub
          </a>{""}
          上，偶尔也会写点东西发在这个站点的{""}
          <Link
            href="https://monkingdz.com"
            className="underline underline-offset-4 hover:no-underline"
          >
            博客
          </Link>{""}
          里。
        </p>
      </div>
    </section>
  );
}
