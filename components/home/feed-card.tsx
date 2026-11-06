"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useVelocity,
} from "motion/react";

export interface FeedCardData {
  key: string;
  href: string;
  title: string;
  summary: string;
  image?: string;
}

const ASPECT_RATIOS = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
];

const PLACEHOLDER_STYLES = [
  "bg-gradient-to-br from-brand-gold/30 via-brand-rose/15 to-brand-navy/40",
  "bg-gradient-to-tr from-primary/30 via-brand-cream/20 to-brand-rose/25",
  "bg-gradient-to-bl from-brand-navy/40 via-primary/20 to-brand-gold/25",
  "bg-gradient-to-r from-brand-rose/20 via-brand-gold/25 to-primary/20",
];

export function FeedCard({
  item,
  index,
}: {
  item: FeedCardData;
  index: number;
}) {
  const isExternal = item.href.startsWith("http");
  const aspect = ASPECT_RATIOS[index % ASPECT_RATIOS.length];
  const placeholder = PLACEHOLDER_STYLES[index % PLACEHOLDER_STYLES.length];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  useEffect(() => {
    if (!isInView) return;
    // Faster scroll = shorter, snappier rise. Slower/idle scroll = a longer, more graceful float up.
    const speed = Math.abs(scrollVelocity.get());
    const duration = Math.min(1.1, Math.max(0.45, 1.1 - speed / 2500));
    controls.start(
      { y: 0, opacity: 1, scale: 1 },
      { type: "spring", duration, bounce: 0.32 },
    );
  }, [isInView, controls, scrollVelocity]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0, scale: 0.92 }}
      animate={controls}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 25 } }}
      className="mb-6 break-inside-avoid"
    >
      <Link
        href={item.href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group block overflow-hidden rounded-lg border border-border bg-card"
      >
        {item.image ? (
          <div className={`relative w-full overflow-hidden ${aspect}`}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div
            className={`relative flex items-center justify-center overflow-hidden px-4 text-center ${aspect} ${placeholder}`}
          >
            <span
              aria-hidden
              className="absolute -top-6 -right-6 size-24 rounded-full bg-white/10 blur-xl"
            />
            <span
              aria-hidden
              className="absolute -bottom-8 -left-8 size-28 rounded-full bg-black/10 blur-xl"
            />
            <span className="relative font-heading text-sm text-foreground">
              {item.title}
            </span>
          </div>
        )}
        <div className="p-5">
          <h3 className="font-medium group-hover:text-primary">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
        </div>
      </Link>
    </motion.div>
  );
}
