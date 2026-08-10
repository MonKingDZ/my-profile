"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { experience } from "@/lib/about";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="overflow-hidden border-y border-border/60 bg-secondary/40 py-16 sm:py-24"
    >
      <motion.div
        style={{ scaleY, opacity, transformOrigin: "top" }}
        className="mx-auto max-w-4xl px-4"
      >
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          经历
        </h2>
        <ol className="relative mt-10 space-y-10 sm:space-y-16">
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-4 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          />
          {experience.map((item, index) => {
            const isRight = index % 2 === 1;
            return (
              <li
                key={`${item.org}-${item.role}`}
                className={cn(
                  "relative pl-10 sm:w-1/2 sm:pl-0",
                  isRight ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-1.5 size-2 rounded-full bg-primary",
                    "left-2.5 sm:left-auto",
                    isRight ? "sm:-left-1" : "sm:-right-1",
                  )}
                />
                <p className="text-sm text-muted-foreground">
                  {item.start} — {item.end}
                </p>
                <h3 className="mt-1 font-medium">
                  {item.role} · {item.org}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <ul
                  className={cn(
                    "mt-4 flex flex-wrap gap-2",
                    !isRight && "sm:justify-end",
                  )}
                >
                  {item.techStack.map((tech) => (
                    <li key={tech.name}>
                      <HoverCard>
                        <HoverCardTrigger className="block w-36 cursor-default rounded-full bg-foreground px-4 py-2 text-left text-background shadow-sm transition-transform duration-200 ease-out hover:scale-[1.04]">
                          <span className="flex items-center gap-1.5 text-xs font-medium">
                            <span className="truncate">{tech.name}</span>
                            {tech.growing && (
                              <span
                                aria-hidden
                                className="size-1.5 shrink-0 rounded-full bg-background/60"
                              />
                            )}
                          </span>
                          <span
                            aria-hidden
                            className="mt-1.5 block h-px w-full rounded-full bg-background/20"
                          >
                            <span
                              aria-hidden
                              className="block h-full rounded-full bg-background/70 transition-[width] duration-700 ease-out"
                              style={{ width: `${tech.level}%` }}
                            />
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="text-left">
                          <p className="text-sm font-medium">{tech.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </motion.div>
    </section>
  );
}
