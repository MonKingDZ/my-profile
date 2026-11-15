import { dictionary } from "@/lib/i18n/dictionaries/zh";
import { GITHUB_URL, LINKEDIN_URL, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

export const PERSON_ID = `${SITE_URL}/#person`;

export const personJsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: dictionary.siteName,
  url: SITE_URL,
  jobTitle: "AI 全栈独立开发者",
  sameAs: [GITHUB_URL, LINKEDIN_URL],
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: dictionary.siteName,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "zh-CN",
  publisher: { "@id": PERSON_ID },
};

/** Renders schema.org structured data; `<` is escaped per the Next.js JSON-LD guide. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...data }).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
