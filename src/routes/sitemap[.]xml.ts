import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "@/content/site-data";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "https://ajbarnett.tech";

interface SitemapEntry {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0" },
          { path: "/work", changefreq: "monthly", priority: "0.9" },
          { path: "/engineering", changefreq: "monthly", priority: "0.9" },
          { path: "/systems", changefreq: "monthly", priority: "0.8" },
          { path: "/timeline", changefreq: "monthly", priority: "0.7" },
          { path: "/writing", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          ...articles.map<SitemapEntry>((a) => ({
            path: `/writing/${a.slug}`,
            changefreq: "yearly",
            priority: "0.6",
          })),
        ];

        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq
                ? `    <changefreq>${e.changefreq}</changefreq>`
                : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
