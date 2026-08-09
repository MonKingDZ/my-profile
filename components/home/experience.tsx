import { experience } from "@/lib/about";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        经历
      </h2>
      <ol className="mt-10 space-y-10 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={`${item.org}-${item.role}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-7 top-1.5 size-2 rounded-full bg-primary"
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
          </li>
        ))}
      </ol>
    </section>
  );
}
