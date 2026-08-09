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
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="font-heading text-sm font-semibold tracking-tight">
          {dictionary.siteName}
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
