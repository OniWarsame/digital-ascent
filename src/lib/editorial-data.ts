import leadImage from "@/assets/lead-review.jpg";
import comparisonImage from "@/assets/comparison.jpg";
import financeImage from "@/assets/finance-apps.jpg";

export type Story = {
  title: string;
  eyebrow: string;
  dek: string;
  score: string;
  price: string;
  path: "/reviews/atlas-ai" | "/compare/atlas-ai-vs-flowdesk" | "/blog";
  image: string;
};

export const stories: Story[] = [
  { title: "Atlas AI review: serious research without the tab chaos", eyebrow: "AI TOOLS · EDITOR'S PICK", dek: "A practical look at where an AI research workspace saves time—and where human judgment still matters.", score: "9.1", price: "From $18/mo", path: "/reviews/atlas-ai", image: leadImage },
  { title: "Atlas AI vs Flowdesk: depth or speed?", eyebrow: "HEAD-TO-HEAD", dek: "We map the better fit for researchers, operators, and lean teams.", score: "WINNER: ATLAS", price: "8 min read", path: "/compare/atlas-ai-vs-flowdesk", image: comparisonImage },
  { title: "The finance apps that make cash flow legible", eyebrow: "FINANCE APPS", dek: "Three calmer ways to see what is moving, due, and at risk.", score: "3 PICKS", price: "Field guide", path: "/blog", image: financeImage },
];

export const rankings = [
  ["01", "Atlas AI", "Best for sourced research", "9.1"],
  ["02", "Flowdesk", "Best for fast team workflows", "8.8"],
  ["03", "Ledgerly", "Best for cash-flow clarity", "8.6"],
  ["04", "Northstar CRM", "Best for focused sales teams", "8.4"],
  ["05", "MinuteMind", "Best for meeting follow-through", "8.2"],
] as const;

export const categoryContent = {
  "/ai-tools": { label: "AI Tools", title: "AI that earns its place in your workflow.", intro: "Independent field notes on research, writing, automation, and the systems between them.", accent: "red" },
  "/business-software": { label: "Business Software", title: "Less software theatre. More useful work.", intro: "Clear-eyed reviews of the tools teams rely on to sell, plan, communicate, and deliver.", accent: "blue" },
  "/finance-apps": { label: "Finance Apps", title: "Know where the money is moving.", intro: "Practical analysis of finance products for operators, independent teams, and growing businesses.", accent: "red" },
} as const;
