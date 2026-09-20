import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { reviews, type Review } from "@/lib/reviews-data";

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="bg-secondary p-5"><p className="text-xs font-bold uppercase text-muted-foreground">{label}</p><p className="mt-2 font-display text-xl font-bold">{value}</p></div>;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2>{title}</h2>{children}</section>;
}

function ProsCons({ title, items, good = false }: { title: string; items: string[]; good?: boolean }) {
  return <div className="border border-border p-6"><h3 className="font-display text-xl font-bold">{title}</h3><ul className="mt-5 space-y-3">{items.map((x) => <li key={x} className="flex gap-3 text-sm">{good ? <Check className="size-5 shrink-0 text-accent" /> : <X className="size-5 shrink-0 text-primary" />}{x}</li>)}</ul></div>;
}

export function reviewSchema(review: Review) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        headline: review.headline,
        reviewBody: review.verdict,
        author: { "@type": "Organization", name: "TheHyped" },
        reviewRating: { "@type": "Rating", ratingValue: review.score, bestRating: "10", worstRating: "1" },
        itemReviewed: { "@type": "SoftwareApplication", name: review.name, applicationCategory: "BusinessApplication", operatingSystem: "Web" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Reviews", item: "/reviews" },
          { "@type": "ListItem", position: 3, name: review.name },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: review.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };
}

export function ReviewArticle({ review }: { review: Review }) {
  const related = reviews.filter((r) => review.alternatives.includes(r.name));
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema(review)) }} />
      <div className="mx-auto max-w-[1200px] px-5 py-12 lg:px-10 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link><span>/</span>
          <Link to="/reviews" className="hover:text-primary">Reviews</Link><span>/</span>
          <span className="text-primary">{review.name}</span>
        </nav>
        <p className="text-xs font-bold uppercase text-primary">{review.categoryLabel} · Sample editorial review</p>
        <h1 className="mt-5 max-w-5xl font-display text-4xl font-extrabold leading-[1.02] md:text-6xl xl:text-7xl">{review.headline}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">{review.dek}</p>
        <div className="mt-9 grid gap-px bg-border sm:grid-cols-3">
          <Metric label="Best for" value={review.bestFor} />
          <Metric label="Price" value={review.price} />
          <Metric label="Our score" value={`${review.score} / 10`} />
        </div>
        <img src={review.image} alt={`${review.name} interface illustration`} width={1200} height={900} className="mt-12 aspect-[16/9] w-full object-cover" />
      </div>
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pb-20 lg:grid-cols-[1fr_300px] lg:px-10">
        <div className="prose-editorial">
          <Block title="The quick verdict"><p>{review.verdict}</p></Block>
          <Block title="The problem it solves"><p>{review.problem}</p></Block>
          <Block title="Key features"><ul>{review.features.map((f) => <li key={f}>{f}</li>)}</ul></Block>
          <div className="grid gap-4 sm:grid-cols-2">
            <ProsCons title="What works" items={review.pros} good />
            <ProsCons title="What to know" items={review.cons} />
          </div>
          <Block title="Pricing">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead><tr><th>Plan</th><th>Best for</th><th>Monthly</th></tr></thead>
                <tbody>{review.pricing.map(([plan, best, cost]) => <tr key={plan}><td>{plan}</td><td>{best}</td><td>{cost}</td></tr>)}</tbody>
              </table>
            </div>
          </Block>
          <Block title="Alternatives worth testing">
            <ul>{related.length ? related.map((r) => <li key={r.slug}><Link to="/reviews/$slug" params={{ slug: r.slug }}>{r.name}</Link> — {r.bestFor.toLowerCase()}</li>) : <li>No direct alternative reviewed yet.</li>}</ul>
          </Block>
          <Block title="Frequently asked">
            <dl>{review.faqs.map(([q, a]) => <div key={q}><dt className="font-display text-lg font-bold">{q}</dt><dd className="mt-2 mb-5 text-muted-foreground">{a}</dd></div>)}</dl>
          </Block>
          <Block title="Final verdict"><p>{review.final}</p></Block>
        </div>
        <aside className="h-fit border-t-4 border-primary bg-secondary p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase text-primary">Editorial note</p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">This is demonstration editorial content created to show TheHyped’s review format. Pricing and product details are illustrative.</p>
          <Button asChild className="mt-6 w-full rounded-none"><Link to="/compare/atlas-ai-vs-flowdesk">Compare alternatives</Link></Button>
          <Link to="/reviews" className="mt-5 flex items-center gap-2 text-xs font-bold uppercase hover:text-primary">All reviews <ArrowRight className="size-4" /></Link>
        </aside>
      </div>
    </article>
  );
}

export function ReviewGrid({ items }: { items: Review[] }) {
  return (
    <div className="border-t-2 border-foreground">
      {items.map((r) => (
        <Link key={r.slug} to="/reviews/$slug" params={{ slug: r.slug }} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-secondary md:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase text-primary">{r.categoryLabel}</p>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{r.name}</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{r.dek}</p>
          </div>
          <p className="hidden text-sm text-muted-foreground md:block">{r.bestFor} · {r.price}</p>
          <span className="font-display text-2xl font-extrabold">{r.score}</span>
        </Link>
      ))}
    </div>
  );
}
