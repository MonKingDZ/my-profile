import { techStack } from "@/lib/about";

export function TechStack() {
  return (
    <section id="tech-stack" className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        技术栈
      </h2>
      <ul className="mt-8 flex flex-wrap gap-2.5">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
