import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const primary = [
  ["AI Tools", "/ai-tools"], ["Business Software", "/business-software"], ["Finance Apps", "/finance-apps"],
  ["Reviews", "/reviews"], ["Compare", "/compare"],
] as const;
const secondary = [["About", "/about"], ["Contact", "/contact"], ["Disclosure", "/disclosure"], ["Privacy", "/privacy-policy"], ["Terms", "/terms"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
      <Link to="/" className="font-display text-[1.7rem] font-extrabold leading-none text-foreground">THE<span className="text-primary">/</span>HYPED</Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        {primary.map(([label, to]) => <Link key={to} to={to} className="text-xs font-bold uppercase text-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild className="h-10 rounded-none px-5 font-bold uppercase"><Link to="/newsletter">Get the briefing <ArrowUpRight /></Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden" aria-label="Mobile navigation"><div className="grid gap-1">{primary.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border py-3 font-display text-2xl font-bold">{label}</Link>)}<Link to="/newsletter" onClick={() => setOpen(false)} className="mt-5 bg-primary px-4 py-3 text-center text-sm font-bold uppercase text-primary-foreground">Get the briefing</Link></div></nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-ink text-paper"><div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
    <div className="grid gap-12 border-b border-paper/20 pb-14 md:grid-cols-[1.4fr_1fr]">
      <div><p className="font-display text-4xl font-extrabold md:text-6xl">THE<span className="text-primary">/</span>HYPED</p><p className="mt-5 max-w-md text-sm leading-7 text-paper/70">Independent reviews for people choosing the technology their work depends on.</p></div>
      <div className="grid grid-cols-2 gap-5 text-sm">{secondary.map(([label,to]) => <Link key={to} to={to} className="text-paper/70 hover:text-paper">{label}</Link>)}</div>
    </div>
    <div className="flex flex-col gap-3 pt-7 text-xs uppercase text-paper/50 sm:flex-row sm:justify-between"><p>© 2026 TheHyped. Built for clear decisions.</p><p>Independent · Transparent · Useful</p></div>
  </div></footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><SiteHeader/><main>{children}</main><SiteFooter/></>; }
