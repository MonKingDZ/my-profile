import type { Metadata } from "next";

import { HorizontalProjectGallery } from "@/components/projects/horizontal-gallery";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "项目",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-16 sm:pt-24">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          项目
        </h1>
      </section>
      <HorizontalProjectGallery projects={projects} />
    </>
  );
}
