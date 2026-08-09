import { techStack } from "@/lib/about";

export function TechStack() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="font-heading text-xl font-semibold tracking-tight">
        技术栈
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
