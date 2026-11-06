import { experience } from "@/lib/about";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border/60 bg-secondary/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          经历
        </h2>
        <ol className="relative mt-10 space-y-10 sm:space-y-16">
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-4 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          />
          {experience.map((item, index) => {
            const isRight = index % 2 === 1;
            return (
              <li
                key={index}
                className={cn(
                  "relative pl-10 sm:w-1/2 sm:pl-0",
                  isRight ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-1.5 size-2 rounded-full bg-primary",
                    "left-2.5 sm:left-auto",
                    isRight ? "sm:-left-1" : "sm:-right-1",
                  )}
                />
                <p className="text-sm text-muted-foreground">
                  {item.start} — {item.end}
                </p>
                <h3 className="mt-1 font-medium">{item.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <ul
                  className={cn(
                    "mt-4 flex flex-wrap gap-2",
                    !isRight && "sm:justify-end",
                  )}
                >
                  {item.techStack.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <HoverCard>
                        <HoverCardTrigger className="relative isolate block w-fit cursor-default overflow-hidden whitespace-nowrap rounded-full bg-background px-4 py-2 text-left text-brand-cream ring-1 ring-inset ring-brand-gold/50 transition-transform duration-200 ease-out hover:scale-[1.04] dark:bg-transparent dark:text-white dark:ring-brand-rose/50">
                          <span
                            aria-hidden
                            className="absolute inset-y-0 left-0 rounded-full bg-brand-gold transition-[width] duration-700 ease-out dark:bg-brand-rose"
                            style={{ width: `${tech.level}%` }}
                          />
                          <span className="relative flex items-center text-xs font-medium">
                            <span>{tech.name}</span>
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="text-left">
                          <p className="text-sm font-medium">{tech.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
