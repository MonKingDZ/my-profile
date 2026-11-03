"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { ThemeToggle } from "@/components/theme-toggle";
import { dictionary } from "@/lib/i18n/dictionaries/zh";

const navLinks = [
  { href: "/blog", label: dictionary.nav.blog },
  { href: "/projects", label: dictionary.nav.projects },
  // Hidden for now — uncomment to bring back the RSS subscribe page.
  // { href: "/subscribe", label: dictionary.nav.subscribe },
  { href: "/#contact", label: dictionary.nav.contact },
];

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const scrollingDown = current > previous && current > 150;
    setHidden(scrollingDown);
    if (scrollingDown) setMenuOpen(false);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%", opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-accent text-2xl italic tracking-tight text-foreground"
        >
          {dictionary.siteName}
        </Link>
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="flex size-9 items-center justify-center rounded-md text-primary"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        <nav className="hidden items-center gap-8 text-sm sm:flex">
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
      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-border/60 px-4 py-2 sm:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-bold tracking-wide text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </motion.header>
  );
}
