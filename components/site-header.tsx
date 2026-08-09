import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { dictionary } from "@/lib/i18n/dictionaries/zh";

const navLinks = [
  { href: "/blog", label: dictionary.nav.blog },
  { href: "/projects", label: dictionary.nav.projects },
  { href: "/subscribe", label: dictionary.nav.subscribe },
  { href: "/#contact", label: dictionary.nav.contact },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-accent text-2xl italic tracking-tight text-foreground"
        >
          {dictionary.siteName}
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-1 py-1 font-bold tracking-wide text-primary"
            >
              <span
                aria-hidden
                className="absolute inset-0 scale-50 rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)] opacity-0 blur-md transition-all duration-300 ease-out group-hover:scale-[2.2] group-hover:opacity-40"
              />
              <span className="relative">{link.label}</span>
            </Link>
          ))}
          <span className="h-4 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
