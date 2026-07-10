import { Link } from "@tanstack/react-router";
import { Linkedin, Github, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/70 bg-surface/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-border-strong bg-surface-elevated text-[11px] font-semibold">
              AJ
            </span>
            <span className="text-sm font-medium">AJ Barnett</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Product-minded systems engineer. Twenty years chasing problems worth
            solving across the full product lifecycle, frontend architecture,
            backend services, system design, and the judgment between them.
          </p>
          <p className="mono mt-6 text-[11px] uppercase tracking-widest text-muted-foreground">
            Available for Senior · Staff · Principal engineering roles
          </p>
        </div>

        <div>
          <h2 className="mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Work", "/work"],
              ["Journey", "/timeline"],
              ["Engineering", "/engineering"],
              ["Systems", "/systems"],
              ["Field Notes", "/writing"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-foreground/80 hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Connect
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/aj-barnett-2b5574382/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/abarnettdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:aj.barnett84@gmail.com"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p className="mono">© {new Date().getFullYear()} AJ Barnett, Built with intent.</p>
          <p className="mono">Systems thinking · Product engineering · AI as leverage</p>
        </div>
      </div>
    </footer>
  );
}
