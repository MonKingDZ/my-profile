import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/site";
// next/font/google chokes under Turbopack on these CJK fonts' large
// unicode-range subset count, and Google Fonts is unreachable from mainland
// China — so the woff2 slices are self-hosted under public/fonts.
import "../public/fonts/zcool-xiaowei/font.css";
import "../public/fonts/ma-shan-zheng/font.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Latin-only accent face for English words/names inside Chinese copy — see
// CONTEXT.md "Bio" and docs/adr/0003 for why Chinese text stays on Geist Sans.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
  title: {
    default: "MonKingdz", // TODO: replace with real name
    template: "%s | MonKingdz",
  },
  description: "个人主页：介绍、博客、项目与联系方式。MonKingdz's personal website.", // TODO: replace with real description
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
