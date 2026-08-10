import Link from "next/link";

import { ProjectCard } from "@/components/home/project-card";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="featured-projects" className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          精选项目
        </h2>
        <Link href="/projects" className="text-sm text-brand-rose hover:underline">
          查看全部 →
        </Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
