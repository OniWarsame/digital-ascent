import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/site/Editorial";
import { NewsletterForm } from "@/components/site/Forms";

export const Route = createFileRoute("/newsletter")({head: () => ({ meta: [{ title: "The signal, once a week. — TheHyped" }, { name: "description", content: "A concise Tuesday briefing about software shifts worth acting on—not every update that happened." }, { property: "og:title", content: "The signal, once a week. — TheHyped" }, { property: "og:description", content: "A concise Tuesday briefing about software shifts worth acting on—not every update that happened." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Page });

function Page() {
  return <SimplePage label="Newsletter" title="The signal, once a week.">
    <p>A concise Tuesday briefing about software shifts worth acting on—not every update that happened.</p>
    <h2>What arrives</h2>
    <p>One tested tool, one useful comparison, and the week’s most important product change.</p>
    <h2>Join the list</h2>
    <div className="not-prose my-6"><NewsletterForm /></div>
    <p>Your email is used only to send the TheHyped briefing. It is never sold or shared.</p>
  </SimplePage>;
}
