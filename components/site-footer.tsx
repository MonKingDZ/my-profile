import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { dictionary } from "@/lib/i18n/dictionaries/zh";

// TODO: replace with real contact/social links
const socialLinks = [
  { href: "mailto:you@example.com", label: "Email", icon: Mail },
  { href: "https://github.com/yourusername", label: "GitHub", icon: GitHubIcon },
  { href: "https://www.linkedin.com/in/yourusername", label: "LinkedIn", icon: LinkedInIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>{dictionary.footer.rights(new Date().getFullYear())}</p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-full text-brand-rose transition-colors hover:bg-brand-rose/10"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
