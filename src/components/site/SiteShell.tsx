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
  return <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
    <div className="mx-auto flex min-h-24 max-w-[1440px] items-center justify-between gap-8 px-5 lg:px-10">
      <Link to="/" className="shrink-0 font-display text-2xl font-bold uppercase leading-none text-foreground md:text-3xl">THE<span className="text-primary">HYPED</span><span className="ml-2 inline-block size-2 bg-primary align-top" /></Link>
      <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
        {primary.map(([label, to]) => <Link key={to} to={to} className="text-[11px] font-bold uppercase text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{label}</Link>)}
      </nav>
      <div className="hidden items-center gap-5 xl:flex"><span className="font-display text-[10px] uppercase text-muted-foreground">Independent // 2026</span><Button asChild variant="outline" className="h-10 rounded-none px-5 text-xs font-bold uppercase"><Link to="/newsletter">Subscribe <ArrowUpRight /></Link></Button></div>
      <Button variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-6 xl:hidden" aria-label="Mobile navigation"><div className="grid gap-1">{primary.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-xl font-bold uppercase hover:text-primary">{label}</Link>)}<Link to="/newsletter" onClick={() => setOpen(false)} className="mt-5 border border-primary bg-primary px-4 py-3 text-center text-xs font-bold uppercase text-primary-foreground">Get the briefing</Link></div></nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-ink text-paper"><div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
    <div className="grid gap-12 border-b border-paper/15 pb-14 md:grid-cols-[1.4fr_1fr]">
      <div><p className="font-display text-4xl font-bold uppercase md:text-6xl">THE<span className="text-primary">HYPED</span><span className="text-primary">.</span></p><p className="mt-5 max-w-md text-sm leading-7 text-paper/65">Independent reviews for people choosing the technology their work depends on.</p></div>
      <div className="grid grid-cols-2 gap-5 text-xs font-bold uppercase">{secondary.map(([label,to]) => <Link key={to} to={to} className="text-paper/60 hover:text-primary">{label}</Link>)}</div>
    </div>
    <div className="flex flex-col gap-3 pt-7 font-display text-[10px] uppercase text-paper/45 sm:flex-row sm:justify-between"><p>© 2026 THEHYPED. All rights reserved.</p><p>Owned and published by THEHYPED // Edition 01</p></div>
  </div></footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><SiteHeader/><main>{children}</main><SiteFooter/></>; }
