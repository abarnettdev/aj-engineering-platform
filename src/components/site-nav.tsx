import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Linkedin, ArrowUpRight, Menu, Github, Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

// Chapters, the site as one continuous story
const chapters = [
  { to: "/", label: "Prologue", num: "00" },
  { to: "/work", label: "Work", num: "01" },
  { to: "/timeline", label: "Journey", num: "02" },
  { to: "/engineering", label: "Engineering", num: "03" },
  { to: "/systems", label: "Systems", num: "04" },
  { to: "/writing", label: "Field Notes", num: "05" },
  { to: "/ask-aj", label: "Ask A.J.", num: "06" },
  { to: "/contact", label: "Contact", num: "07" },
] as const;

const externals = [
  {
    href: "https://github.com/abarnettdev",
    label: "GitHub",
    handle: "/aj",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/aj-barnett-2b5574382/",
    label: "LinkedIn",
    handle: "/in/aj-barnett",
    icon: Linkedin,
  },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const currentPath = useRouterState({
    select: (r) => r.location.pathname,
  });

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center border border-foreground bg-background font-display text-[13px] font-semibold tracking-tight text-ink">
            AJ
          </span>
          <span className="hidden truncate text-sm font-semibold tracking-tight sm:inline">
            AJ BARNETT
          </span>
        </Link>

        <nav aria-label="Chapters" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-xs">
            {chapters.slice(1, 7).map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  className="chapter-link font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-ink [&.active]:text-ink"
                  activeProps={{ className: "active" }}
                >
                  <span>{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={externals[1].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AJ Barnett on LinkedIn"
            title="Connect on LinkedIn"
            className="group hidden items-center gap-2 border border-border bg-background px-3 py-2 text-xs font-medium tracking-wide text-muted-foreground transition-all hover:border-gold hover:text-ink sm:inline-flex"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="mono uppercase tracking-[0.18em]">/in</span>
          </a>
          <Link
            to="/contact"
            className="group tactile hidden items-center gap-2 bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-background transition-all hover:bg-gold hover:text-ink lg:inline-flex"
          >
            Let's connect
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile menu trigger, visible below lg */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav-panel"
                className="tactile inline-flex h-11 w-11 items-center justify-center border border-border bg-background text-ink transition-colors hover:border-gold hover:text-gold lg:hidden"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              id="mobile-nav-panel"
              side="right"
              className="flex w-[min(22rem,100vw)] flex-col gap-0 border-l border-border bg-background p-0"
            >
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate the site chapters, links, and contact.
              </SheetDescription>

              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <span className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                  Chapters
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Menu
                </span>
              </div>

              <nav aria-label="Site" className="flex-1 overflow-y-auto">
                <ul>
                  {chapters.map((c) => {
                    const isActive =
                      c.to === "/"
                        ? currentPath === "/"
                        : currentPath.startsWith(c.to);
                    return (
                      <li key={c.to} className="border-b border-border/70">
                        <Link
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline justify-between gap-4 px-6 py-5 transition-colors hover:bg-surface"
                        >
                          <span className="flex items-baseline gap-4">
                            <span
                              className={`mono text-[10px] uppercase tracking-[0.24em] ${
                                isActive ? "text-gold" : "text-muted-foreground"
                              }`}
                            >
                              {c.num}
                            </span>
                            <span
                              className={`font-display text-2xl font-medium tracking-tight ${
                                isActive ? "text-gold" : "text-ink"
                              }`}
                            >
                              {c.label}
                            </span>
                          </span>
                          <ArrowUpRight
                            className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                              isActive ? "text-gold" : "text-muted-foreground"
                            }`}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-border px-6 py-5">
                <p className="mono mb-4 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Elsewhere
                </p>
                <ul className="flex flex-col gap-3">
                  {externals.map((e) => {
                    const Icon = e.icon;
                    return (
                      <li key={e.href}>
                        <a
                          href={e.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between gap-4 border border-border bg-background px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-all hover:border-gold hover:text-gold"
                          aria-label={`${e.label}, ${e.handle}`}
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                            {e.label}
                          </span>
                          <span className="mono text-[10px] normal-case tracking-[0.18em] text-muted-foreground group-hover:text-gold">
                            {e.handle}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between gap-4 bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background transition-all hover:bg-gold hover:text-ink"
                    >
                      <span className="flex items-center gap-3">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Start a conversation
                      </span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
