import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/site/Editorial";
import { ContactForm } from "@/components/site/Forms";

export const Route = createFileRoute("/contact")({head: () => ({ meta: [{ title: "Talk to the editorial desk. — TheHyped" }, { name: "description", content: "Send a correction, product tip, or question to the TheHyped editorial desk." }, { property: "og:title", content: "Talk to the editorial desk. — TheHyped" }, { property: "og:description", content: "Send a correction, product tip, or question to the TheHyped editorial desk." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Page });

function Page() {
  return <SimplePage label="Contact" title="Talk to the editorial desk.">
    <p>Have a correction, product tip, or thoughtful question? Send it below and it reaches the editorial desk directly.</p>
    <h2>Send a message</h2>
    <div className="not-prose my-6"><ContactForm /></div>
    <p>We read everything. Corrections and factual challenges are prioritised.</p>
  </SimplePage>;
}
