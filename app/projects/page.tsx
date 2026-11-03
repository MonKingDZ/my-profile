import type { Metadata } from "next";

import { ProjectShowcase } from "@/components/projects/project-showcase";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "项目",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:pt-24">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          项目
        </h1>
      </section>
      <ProjectShowcase projects={projects} />
    </>
  );
}
