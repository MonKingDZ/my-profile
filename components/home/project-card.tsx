"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%",
            end: "top 55%",
            scrub: true,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="h-full">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card"
      >
        {project.coverImage ? (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-medium">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4 text-sm">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <GitHubIcon className="size-4" /> Code
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="size-4" /> Demo
              </a>
            ) : null}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
