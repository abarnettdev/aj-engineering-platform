import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const exploreLinks = [
  ["Work", "/work"],
  ["Product Design", "/design"],
  ["Engineering", "/engineering"],
  ["Design System", "/systems"],
  ["Ask A.J.", "/ask-aj"],
  ["About", "/timeline"],
] as const;

export function SiteFooter() {
  return (
    <footer className="px-3 pb-3 pt-20 sm:pt-28">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white md:px-12">
        <div
          aria-hidden="true"
          className="glow pointer-events-none absolute inset-0 opacity-55"
        />
        <div className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="max-w-2xl text-balance text-4xl font-medium tracking-tight text-white md:text-6xl">
              From first concept to{" "}
              <span className="text-accent">production code.</span>
            </p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65">
              Websites, applications, design systems, and AI-powered software
              carried from clear product thinking into production code.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
            >
              Start a conversation
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h2 className="font-medium text-white/50">Explore</h2>
              <ul className="mt-4 grid gap-2.5">
                {exploreLinks.map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-white/80 hover:text-accent">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-medium text-white/50">Connect</h2>
              <ul className="mt-4 grid gap-2.5">
                <li>
                  <a
                    href="mailto:aj.barnett84@gmail.com"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-accent"
                  >
                    <Mail className="size-4" aria-hidden="true" /> Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/abarnettdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-accent"
                  >
                    <Github className="size-4" aria-hidden="true" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aj-barnett-2b5574382/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-accent"
                  >
                    <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/resumes/aj-barnett-product-design.pdf"
                    className="text-white/80 hover:text-accent"
                  >
                    Design résumé
                  </a>
                </li>
                <li>
                  <a
                    href="/resumes/aj-barnett-software-engineering.pdf"
                    className="text-white/80 hover:text-accent"
                  >
                    Engineering résumé
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} AJ Barnett. Product Designer &amp;
            Software Engineer.
          </p>
          <a
            href="#main"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            Back to top <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
