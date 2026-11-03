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

      // Entrance: greeting characters rise in one by one, then the name
      // emerges from a blur with a slight overshoot.
      gsap
        .timeline({ delay: 0.2 })
        .from(".bio-char", {
          yPercent: 60,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        })
        .from(
          ".bio-name",
          {
            opacity: 0,
            scale: 0.6,
            filter: "blur(16px)",
            duration: 1,
            ease: "back.out(1.6)",
          },
          "-=0.3",
        );

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
      <div className="relative mx-auto max-w-4xl text-center">
        <h1
          aria-label={`你好，我是 ${dictionary.siteName}`}
          className="font-intro text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span aria-hidden>
            {Array.from("你好，我是").map((char, i) => (
              <span key={i} className="bio-char inline-block">
                {char}
              </span>
            ))}{" "}
            <span className="bio-name font-accent text-primary inline-block italic">
              {dictionary.siteName}
            </span>
          </span>
        </h1>
        <p className="bio-copy font-intro mt-8 text-balance text-lg leading-loose text-muted-foreground sm:text-xl">
          我是一名AI全栈独立开发者，热衷于通过代码改变现实生活。
          <br />
          我又如此的热爱生活，喜欢不断尝试新事物，对于探索未知有着强烈的好奇。{" "}
          <br />
          我是一名终身学习者 \ 滑雪教练 \ 桨板爱好者 \ 健身爱好者，探索人生不同可能性。
          <br />
          有些作品会放到{" "}
          <a
            href="https://github.com/MonKingDZ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent italic underline underline-offset-4 hover:no-underline"
          >
            GitHub
          </a>{" "}
          上，有些想法与思考则会放在这个{""}
          <Link
            href="/blog"
            className="underline underline-offset-4 hover:no-underline"
          >
            博客
          </Link>{""}
          里
          <br />
          希望对你有所启发。
        </p>
      </div>
    </section>
  );
}
