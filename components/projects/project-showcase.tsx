"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";

import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const MAX_TILT = 6; // degrees

const textColumn: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.8, bounce: 0.2 },
  },
};

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <ol className="mx-auto mt-12 max-w-5xl space-y-24 px-4 pb-24 sm:mt-16 sm:space-y-32 sm:pb-32">
      {projects.map((project, index) => (
        <ProjectCase key={project.slug} project={project} index={index} />
      ))}
    </ol>
  );
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const mediaRef = useRef<HTMLDivElement>(null);
  const isReversed = index % 2 === 1;

  // Parallax: the cover drifts slower than the page while it's on screen.
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-8%", "8%"],
  );

  // Hover: card tilts toward the cursor and a spotlight follows it.
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [MAX_TILT, -MAX_TILT]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-MAX_TILT, MAX_TILT]),
    springConfig,
  );
  const spotlightX = useTransform(pointerX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(pointerY, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${spotlightX} ${spotlightY}, color-mix(in oklab, var(--primary) 28%, transparent), transparent 70%)`;

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <li className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <motion.div
        ref={mediaRef}
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", duration: 1, bounce: 0.25 }}
        className={cn("[perspective:1000px]", isReversed && "md:order-2")}
      >
        <motion.div
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          style={reduceMotion ? undefined : { rotateX, rotateY }}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-xl"
        >
          <motion.div
            style={{ y: parallaxY }}
            className="absolute -inset-y-[10%] inset-x-0 transition-transform duration-500 ease-out group-hover:scale-105"
          >
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover"
              />
            ) : (
              <CoverPlaceholder title={project.title} />
            )}
          </motion.div>
          <motion.div
            aria-hidden
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={textColumn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className={cn(isReversed && "md:order-1")}
      >
        <motion.p
          variants={textItem}
          className="font-accent text-5xl text-primary italic"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.p>
        <motion.h2
          variants={textItem}
          className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {project.title}
        </motion.h2>
        <motion.p
          variants={textItem}
          className="mt-4 leading-relaxed text-muted-foreground"
        >
          {project.description}
        </motion.p>
        <motion.ul variants={textItem} className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </motion.ul>
        <motion.div
          variants={textItem}
          className="mt-6 flex items-center gap-5 text-sm"
        >
          {project.githubUrl ? (
            <ProjectLink href={project.githubUrl}>
              <GitHubIcon className="size-4" /> Code
            </ProjectLink>
          ) : null}
          {project.demoUrl ? (
            <ProjectLink href={project.demoUrl}>
              <ExternalLink className="size-4" /> Demo
            </ProjectLink>
          ) : null}
        </motion.div>
      </motion.div>
    </li>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 font-medium text-primary"
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover/link:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

function CoverPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex size-full items-center justify-center bg-gradient-to-br from-brand-gold/30 via-brand-rose/15 to-brand-navy/40">
      <span
        aria-hidden
        className="absolute top-[15%] right-[10%] size-40 rounded-full bg-white/15 blur-2xl"
      />
      <span
        aria-hidden
        className="absolute bottom-[15%] left-[8%] size-48 rounded-full bg-black/10 blur-2xl"
      />
      <span className="relative px-6 text-center font-accent text-4xl text-foreground italic sm:text-5xl">
        {title}
      </span>
    </div>
  );
}
