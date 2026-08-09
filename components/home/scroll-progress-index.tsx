"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  { id: "bio", label: "I" },
  { id: "experience", label: "II" },
  { id: "tech-stack", label: "III" },
  { id: "featured-projects", label: "IV" },
  { id: "contact", label: "V" },
];

export function ScrollProgressIndex() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    let ticking = false;

    const updateActive = () => {
      ticking = false;
      const reference = window.innerHeight / 2;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= reference) {
          current = id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-hidden
      className="pointer-events-none fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
    >
      <span
        aria-hidden
        className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-border"
      />
      {sections.map(({ id, label }) => (
        <div key={id} className="relative flex flex-col items-center gap-2">
          <span
            className={
              "font-accent bg-background text-sm transition-colors duration-300 " +
              (id === activeId
                ? "text-primary italic"
                : "text-muted-foreground/40")
            }
          >
            {label}
          </span>
          {id === "bio" && activeId === "bio" ? (
            <span className="text-brand-rose bg-background flex items-center gap-0.5 whitespace-nowrap text-[8px] font-medium tracking-[0.1em] uppercase">
              Scroll to discover
              <ChevronDown className="size-2.5" />
            </span>
          ) : null}
        </div>
      ))}
    </nav>
  );
}
