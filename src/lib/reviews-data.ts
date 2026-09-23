import leadImage from "@/assets/lead-review-redesign.jpg";
import comparisonImage from "@/assets/comparison-redesign.jpg";
import financeImage from "@/assets/finance-apps-redesign.jpg";

export type Category = "ai-tools" | "business-software" | "finance-apps";

export type Review = {
  slug: string;
  name: string;
  category: Category;
  categoryLabel: string;
  headline: string;
  dek: string;
  bestFor: string;
  price: string;
  score: string;
  image: string;
  verdict: string;
  problem: string;
  features: string[];
  pros: string[];
  cons: string[];
  pricing: [string, string, string][];
  alternatives: string[];
  final: string;
  faqs: [string, string][];
};

export const reviews: Review[] = [
  {
    slug: "atlas-ai",
    name: "Atlas AI",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    headline: "Atlas AI review: serious research without the tab chaos",
    dek: "A fast, source-conscious research workspace with enough structure to turn scattered questions into usable decisions.",
    bestFor: "Research-heavy teams",
    price: "From $18/mo",
    score: "9.1",
    image: leadImage,
    verdict:
      "Atlas AI is most convincing when a project begins with too many tabs, documents, and half-formed questions. Its value is not generating more words; it is keeping evidence attached to the work.",
    problem:
      "Research rarely fails because information is unavailable. It fails because context fragments. Atlas groups sources, notes, and drafts around a single working question, shortening the gap between finding evidence and using it.",
    features: ["Source-linked research spaces", "Reusable project instructions", "Fast document comparison", "Team comments and export controls"],
    pros: ["Sources stay visible", "Clean project structure", "Useful exports"],
    cons: ["Needs careful prompts", "Best value on paid plan", "No substitute for verification"],
    pricing: [["Free", "Trying the workflow", "$0"], ["Pro", "Independent researchers", "$18"], ["Team", "Shared research", "$32/user"]],
    alternatives: ["Flowdesk", "MinuteMind"],
    final:
      "Choose Atlas when traceable research matters more than instant output. For quick drafting alone a simpler assistant is enough; for sustained research Atlas earns its place.",
    faqs: [
      ["Is there a free plan?", "Yes. The free tier is enough to test the workflow on a single project before paying."],
      ["Does it replace fact-checking?", "No. Atlas keeps sources close, but every claim still needs human verification."],
    ],
  },
  {
    slug: "flowdesk",
    name: "Flowdesk",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    headline: "Flowdesk review: the fastest way to move work between people",
    dek: "An AI workspace built around motion rather than depth, and the better pick when handoffs are the bottleneck.",
    bestFor: "Fast-moving small teams",
    price: "From $12/mo",
    score: "8.8",
    image: comparisonImage,
    verdict:
      "Flowdesk trades archival depth for speed. Summaries, briefs, and task handoffs land in seconds, which suits teams whose problem is throughput rather than evidence.",
    problem:
      "Small teams lose hours restating context. Flowdesk turns a messy thread into a short brief someone else can act on without a meeting.",
    features: ["One-click summaries and briefs", "Shared prompt library", "Lightweight task handoffs", "Slack and email capture"],
    pros: ["Very quick to learn", "Strong summaries", "Cheapest useful tier"],
    cons: ["Weak source trail", "Shallow long-document handling", "Limited export formats"],
    pricing: [["Starter", "Solo operators", "$12"], ["Team", "Collaboration", "$24/user"], ["Business", "Admin controls", "$40/user"]],
    alternatives: ["Atlas AI", "MinuteMind"],
    final: "Pick Flowdesk when the goal is fewer meetings and faster handoffs. Pick Atlas when the reasoning trail has to survive.",
    faqs: [
      ["Can it handle long reports?", "It summarizes them, but detailed cross-document analysis is not its strength."],
      ["Is admin control available?", "Yes, on the Business tier."],
    ],
  },
  {
    slug: "minutemind",
    name: "MinuteMind",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    headline: "MinuteMind review: meetings that actually produce follow-through",
    dek: "Recording and transcription are commodities now. MinuteMind is judged on whether decisions survive the call.",
    bestFor: "Meeting-heavy teams",
    price: "From $10/mo",
    score: "8.2",
    image: financeImage,
    verdict:
      "MinuteMind is strongest at the boring part: turning a conversation into owners, dates, and a decision record people can find later.",
    problem:
      "Most meeting tools produce transcripts nobody reads. MinuteMind reduces a call to the few commitments that matter and pushes them where work happens.",
    features: ["Decision and action extraction", "Owner and due-date tagging", "Searchable decision log", "Calendar and task sync"],
    pros: ["Clear action items", "Good search", "Simple pricing"],
    cons: ["Accent accuracy varies", "Few integrations on entry plan", "No offline capture"],
    pricing: [["Solo", "Individual notes", "$10"], ["Team", "Shared decision log", "$18/user"], ["Scale", "Compliance retention", "$30/user"]],
    alternatives: ["Flowdesk", "Northstar CRM"],
    final: "Worth it if your meetings currently end without owners. Skip it if your team already runs tight written updates.",
    faqs: [
      ["Does it join calls automatically?", "Yes, via calendar connection on Team and above."],
      ["How long is history kept?", "Retention is configurable on the Scale tier."],
    ],
  },
  {
    slug: "northstar-crm",
    name: "Northstar CRM",
    category: "business-software",
    categoryLabel: "Business Software",
    headline: "Northstar CRM review: a pipeline tool that resists bloat",
    dek: "A focused CRM for teams that want forecasting discipline without a six-week implementation.",
    bestFor: "Focused sales teams",
    price: "From $22/user",
    score: "8.4",
    image: comparisonImage,
    verdict:
      "Northstar wins on restraint. Setup takes an afternoon, the pipeline view is honest, and reps are not punished with fields nobody reads.",
    problem:
      "Most CRMs grow until reps avoid them and forecasts become fiction. Northstar keeps the data model small enough that it stays current.",
    features: ["Opinionated pipeline stages", "Email and calendar sync", "Forecast confidence scoring", "Simple automation rules"],
    pros: ["Fast onboarding", "Clean reporting", "Reps actually update it"],
    cons: ["Limited customization", "Basic marketing features", "No native dialer"],
    pricing: [["Core", "Small teams", "$22/user"], ["Growth", "Forecasting", "$38/user"], ["Enterprise", "Permissions and audit", "Custom"]],
    alternatives: ["Ledgerly", "Flowdesk"],
    final: "Choose Northstar if your CRM problem is adoption, not features. Heavily customized sales processes will outgrow it.",
    faqs: [
      ["Can we migrate existing data?", "Yes, via CSV import with field mapping."],
      ["Is there an API?", "Yes, on Growth and above."],
    ],
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    category: "finance-apps",
    categoryLabel: "Finance Apps",
    headline: "Ledgerly review: cash flow you can read in ten seconds",
    dek: "A finance app built for the question owners actually ask: what is coming in, what is due, and what is at risk?",
    bestFor: "Cash-flow clarity",
    price: "From $16/mo",
    score: "8.6",
    image: financeImage,
    verdict:
      "Ledgerly is not accounting software and does not pretend to be. It is a clear runway and obligations view that makes weekly money decisions faster.",
    problem:
      "Spreadsheets tell you what happened. Ledgerly shows what is about to happen, with due dates, expected receipts, and a plain runway number.",
    features: ["Live runway projection", "Receivables and payables timeline", "Scenario planning", "Bank and invoice connections"],
    pros: ["Genuinely legible dashboard", "Useful scenarios", "Quick setup"],
    cons: ["Not a bookkeeping replacement", "Limited multi-currency", "Few regional bank links"],
    pricing: [["Solo", "Freelancers", "$16"], ["Business", "Teams and scenarios", "$39"], ["Advisor", "Multiple entities", "$79"]],
    alternatives: ["Harbor Pay", "Northstar CRM"],
    final: "A strong buy for owner-operators who want fewer money surprises. Larger finance teams will still need a full ledger.",
    faqs: [
      ["Does it replace an accountant?", "No. It is a planning layer on top of your books."],
      ["Are bank feeds read-only?", "Yes, connections are read-only."],
    ],
  },
  {
    slug: "harbor-pay",
    name: "Harbor Pay",
    category: "finance-apps",
    categoryLabel: "Finance Apps",
    headline: "Harbor Pay review: payments and payouts without the surprises",
    dek: "Transparent fees and predictable settlement matter more than a longer feature list. Harbor Pay is judged on both.",
    bestFor: "Cross-border payouts",
    price: "From 0.9% per payout",
    score: "8.5",
    image: leadImage,
    verdict:
      "Harbor Pay's advantage is disclosure: the fee, the rate, and the settlement date are visible before you approve anything.",
    problem:
      "Payout tools often hide cost in exchange rates and vague timelines. Harbor Pay quotes total landed cost up front, which makes reconciliation far less painful.",
    features: ["Up-front total-cost quotes", "Batch payouts with approvals", "Multi-currency wallets", "Exportable reconciliation files"],
    pros: ["Honest fee display", "Reliable settlement dates", "Clean approval flow"],
    cons: ["Not the cheapest at volume", "Limited country coverage", "Support hours are business-only"],
    pricing: [["Standard", "Occasional payouts", "0.9%"], ["Growth", "Regular batches", "0.7%"], ["Scale", "High volume", "Negotiated"]],
    alternatives: ["Ledgerly"],
    final: "Recommended when predictability beats the last basis point. High-volume operations should still negotiate custom pricing.",
    faqs: [
      ["Are quotes locked?", "Yes, quoted rates hold for a short window before approval."],
      ["Is two-person approval supported?", "Yes, on Growth and above."],
    ],
  },
];

export const reviewsBySlug = Object.fromEntries(reviews.map((r) => [r.slug, r])) as Record<string, Review>;
export const reviewsByCategory = (c: Category) => reviews.filter((r) => r.category === c);
