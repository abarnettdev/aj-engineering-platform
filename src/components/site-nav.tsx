import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { to: "/work", label: "Work", num: "01" },
  { to: "/design", label: "Product Design", num: "02" },
  { to: "/engineering", label: "Engineering", num: "03" },
  { to: "/systems", label: "Design System", num: "04" },
  { to: "/timeline", label: "About", num: "05" },
] as const;

const externalLinks = [
  {
    href: "https://github.com/abarnettdev",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/aj-barnett-2b5574382/",
    label: "LinkedIn",
    icon: Linkedin,
  },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const currentPath = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          aria-label="AJ Barnett, home"
          className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-ink font-display text-[12px] font-semibold tracking-[-0.04em] text-background transition-colors group-hover:bg-gold group-hover:text-ink">
            AJ
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[-0.01em] text-ink sm:inline">
            AJ Barnett
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-xs font-semibold text-muted-foreground transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&.active]:text-ink"
                  activeProps={{ className: "active" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#resumes"
            className="hidden min-h-11 items-center px-3 text-xs font-semibold text-muted-foreground hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
          >
            Résumés
          </a>
          <Link
            to="/contact"
            className="hidden min-h-11 items-center gap-2 bg-ink px-4 text-xs font-semibold text-background hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:inline-flex"
          >
            Contact
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-nav-panel"
                className="inline-flex h-11 w-11 items-center justify-center border border-border bg-background text-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:hidden"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              id="mobile-nav-panel"
              side="right"
              className="flex w-[min(24rem,100vw)] flex-col gap-0 border-l border-border bg-background p-0"
            >
              <MobileNavPanelContent
                currentPath={currentPath}
                onNavigate={() => setOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function MobileNavPanelContent({
  currentPath = "/",
  onNavigate,
  renderLink = ({ to, className, onClick, children }) => (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  ),
}: {
  currentPath?: string;
  onNavigate?: () => void;
  renderLink?: (props: MobileNavLinkProps) => ReactNode;
}) {
  return (
    <>
      <SheetTitle className="sr-only">Site navigation</SheetTitle>
      <SheetDescription className="sr-only">
        Browse AJ Barnett&apos;s work, experience, and contact information.
      </SheetDescription>

      <div className="flex min-h-20 items-center border-b border-border px-6 py-5 pr-20">
        <span className="font-display text-lg uppercase text-ink">
          AJ Barnett
        </span>
      </div>

      <nav aria-label="Site" className="flex-1 overflow-y-auto">
        <ul>
          <li className="border-b border-border">
            {renderLink({
              to: "/",
              onClick: onNavigate,
              className: mobileLinkClass(currentPath === "/"),
              children: (
                <>
                  <span className="mono text-[10px] text-gold-text">00</span>
                  <span>Home</span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4"
                    aria-hidden="true"
                  />
                </>
              ),
            })}
          </li>
          {navigation.map((item) => {
            const active = currentPath.startsWith(item.to);
            return (
              <li key={item.to} className="border-b border-border">
                {renderLink({
                  to: item.to,
                  onClick: onNavigate,
                  className: mobileLinkClass(active),
                  children: (
                    <>
                      <span className="mono text-[10px] text-gold-text">
                        {item.num}
                      </span>
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className="ml-auto h-4 w-4"
                        aria-hidden="true"
                      />
                    </>
                  ),
                })}
              </li>
            );
          })}
          <li className="border-b border-border">
            {renderLink({
              to: "/contact",
              onClick: onNavigate,
              className: mobileLinkClass(currentPath.startsWith("/contact")),
              children: (
                <>
                  <span className="mono text-[10px] text-gold-text">06</span>
                  <span>Contact</span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4"
                    aria-hidden="true"
                  />
                </>
              ),
            })}
          </li>
        </ul>
      </nav>

      <div className="border-t border-border bg-surface/50 p-6">
        <p className="mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
          Elsewhere
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {externalLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 items-center gap-3 border border-border bg-background p-3 text-sm font-semibold text-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-4 w-4 text-gold-text" aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <a
            href="/resumes/aj-barnett-product-design.pdf"
            className="text-xs font-semibold text-muted-foreground underline decoration-border-strong underline-offset-4 hover:text-ink"
          >
            Design résumé
          </a>
          <a
            href="/resumes/aj-barnett-software-engineering.pdf"
            className="text-xs font-semibold text-muted-foreground underline decoration-border-strong underline-offset-4 hover:text-ink"
          >
            Engineering résumé
          </a>
        </div>
      </div>
    </>
  );
}

function mobileLinkClass(active: boolean) {
  return [
    "flex min-h-16 items-center gap-4 px-6 text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
    active ? "bg-ink text-background" : "text-ink hover:bg-surface",
  ].join(" ");
}

export type MobileNavLinkProps = {
  to: string;
  className: string;
  onClick?: () => void;
  children: ReactNode;
};
