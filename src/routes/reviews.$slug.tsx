import { createFileRoute, notFound } from "@tanstack/react-router";
import { ReviewArticle } from "@/components/site/ReviewArticle";
import { reviewsBySlug } from "@/lib/reviews-data";

export const Route = createFileRoute("/reviews/$slug")({
  loader: ({ params }) => {
    const review = reviewsBySlug[params.slug];
    if (!review) throw notFound();
    return { review };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Review not found — TheHyped" }, { name: "robots", content: "noindex" }] };
    }
    const { review } = loaderData;
    const title = `${review.name} Review (${review.score}/10) — TheHyped`;
    return {
      meta: [
        { title },
        { name: "description", content: review.dek },
        { property: "og:title", content: title },
        { property: "og:description", content: review.dek },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ReviewNotFound,
  component: ReviewRoute,
});

function ReviewRoute() {
  const { review } = Route.useLoaderData();
  return <ReviewArticle review={review} />;
}

function ReviewNotFound() {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-24 lg:px-10">
      <p className="text-xs font-bold uppercase text-primary">404</p>
      <h1 className="mt-5 font-display text-5xl font-extrabold">We haven’t reviewed that yet.</h1>
      <p className="mt-6 text-lg text-muted-foreground">Browse the reviews index to see everything we have tested so far.</p>
    </div>
  );
}
