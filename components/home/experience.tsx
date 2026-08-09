import { experience } from "@/lib/about";

export function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="font-heading text-xl font-semibold tracking-tight">
        经历
      </h2>
      <ol className="mt-8 space-y-8 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={`${item.org}-${item.role}`}>
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
