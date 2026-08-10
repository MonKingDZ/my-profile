"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";

export function HorizontalProjectGallery({
  projects,
}: {
  projects: Project[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Below sm the track already fits a natural swipeable row — pinning only
    // makes sense once there's real horizontal overflow to scrub through.
    if (window.matchMedia("(max-width: 639px)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    container.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - container.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${track.scrollWidth - container.offsetWidth}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      container.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center overflow-x-auto py-12 sm:h-screen sm:py-0"
    >
      <div ref={trackRef} className="flex w-max gap-6 px-4 sm:px-12">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex h-[420px] w-[85vw] shrink-0 flex-col overflow-hidden rounded-lg border border-border bg-card sm:h-[70vh] sm:w-[420px]"
          >
            {project.coverImage ? (
              <div className="relative aspect-video w-full shrink-0 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full shrink-0 items-center justify-center bg-muted text-muted-foreground">
                <span className="font-heading text-sm">{project.title}</span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-xl font-medium">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-muted-foreground">
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
          </article>
        ))}
      </div>
    </div>
  );
}
