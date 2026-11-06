export function formatPostDate(date: string): string {
  // Frontmatter dates ("2026-08-01") parse as UTC midnight; format in UTC so
  // visitors west of UTC don't see the previous day (and a hydration mismatch).
  return new Date(date).toLocaleDateString("zh-CN", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
