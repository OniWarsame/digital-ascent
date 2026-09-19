import { createFileRoute } from "@tanstack/react-router";

const paths = ["", "/reviews", "/reviews/atlas-ai", "/ai-tools", "/business-software", "/finance-apps", "/compare", "/compare/atlas-ai-vs-flowdesk", "/blog", "/newsletter", "/about", "/contact", "/disclosure", "/privacy-policy", "/terms"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const entries = paths.map((path) => `<url><loc>${origin}${path}</loc></url>`).join("");
        return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
