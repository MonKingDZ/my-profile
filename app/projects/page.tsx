import type { Metadata } from "next";

import { ProjectCard } from "@/components/home/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "项目",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        项目
      </h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
