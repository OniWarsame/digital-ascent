import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/Editorial";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TheHyped — Independent Software Intelligence" },
      { name: "description", content: "Independent reviews and clear comparisons of AI tools, business software, and finance apps." },
      { property: "og:title", content: "TheHyped — Independent Software Intelligence" },
      { property: "og:description", content: "Cut through the hype and choose software that works." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
