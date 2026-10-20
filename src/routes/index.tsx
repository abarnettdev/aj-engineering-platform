import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowUpRight, Github, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AJ Barnett · Product Designer & Software Engineer" },
      {
        name: "description",
        content:
          "AJ Barnett connects product design, visual systems, frontend architecture, and production software. From first concept to production code.",
      },
      {
        property: "og:title",
        content: "AJ Barnett · Product Designer & Software Engineer",
      },
      {
        property: "og:description",
        content:
          "Product design, design systems, and software engineering from first concept to production code.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ajbarnett.tech/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ajbarnett.tech/" }],
  }),
  component: Home,
});

const expertise = [
  {
    title: "Product design",
    detail:
      "Interfaces, visual hierarchy, responsive behavior, and interaction design.",
  },
  {
    title: "Design systems",
    detail:
      "Tokens, component APIs, accessibility, documentation, and governance.",
  },
  {
    title: "Software engineering",
    detail:
      "React, TypeScript, full-stack applications, APIs, and production architecture.",
  },
  {
    title: "Technical leadership",
    detail:
      "Clear standards, practical mentoring, incremental modernization, and delivery.",
  },
] as const;

const featuredWork = [
  {
    eyebrow: "Enterprise design system · 2022–2026",
    title: "CDW Legato",
    role: "Technical Lead · Senior Software Engineer",
    description:
      "Architecture, shared libraries, component APIs, tooling, governance, and adoption across product teams.",
    outcome:
      "92% adoption · 60%+ less implementation effort · 170+ shared UI assets",
    image: "/projects/design-system-demo.png",
    alt: "Independent public design-system demonstration showing component states, tokens, and implementation guidance.",
    note: "Independent public demonstration. CDW source and design files remain private.",
    href: "/work#cdw-legato",
    tone: "dark",
  },
  {
    eyebrow: "Client web platform · 2016–2020",
    title: "LSI Companies",
    role: "Design & development · Priority Marketing",
    description:
      "A responsive commercial real-estate experience designed around service discovery, market content, and property search.",
    outcome: "Responsive UX · CMS architecture · production delivery",
    image: "/projects/lsi-current-reference.png",
    alt: "Current LSI Companies public homepage showing commercial real-estate navigation over an aerial property image.",
    note: "Current public site reference captured October 20, 2026. It may differ from the version AJ built.",
    href: "/work#priority-marketing",
    tone: "light",
  },
  {
    eyebrow: "Hospitality website · 2016–2020",
    title: "Artisan Eatery",
    role: "Design & development · Priority Marketing",
    description:
      "A food-first restaurant experience built to make the menu, location, story, and calls to action easy to find.",
    outcome: "Visual design · responsive frontend · content management",
    image: "/projects/artisan-current-reference.png",
    alt: "Current Artisan Eatery public homepage showing restaurant navigation over a close-up food image.",
    note: "Current public site reference captured October 20, 2026. It may differ from the version AJ built.",
    href: "/work#priority-marketing",
    tone: "light",
  },
] as const;

function Home() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container-page grid min-h-[calc(100svh-4rem)] items-stretch lg:grid-cols-[1.45fr_0.55fr]">
          <div className="flex flex-col justify-center py-20 sm:py-28 lg:py-32 lg:pr-16">
            <p className="mono text-[11px] uppercase tracking-[0.24em] text-gold-text">
              AJ Barnett · Cape Coral, Florida
            </p>
            <h1 className="mt-8 max-w-5xl text-balance font-display text-[clamp(3.4rem,9vw,8.4rem)] uppercase leading-[0.84] tracking-[-0.065em] text-ink">
              Product Designer
              <span className="block font-accent normal-case tracking-[-0.025em] text-gold-text">
                &amp; Software Engineer
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-balance text-xl leading-relaxed text-foreground/80 sm:text-2xl">
              From first concept to production code. I connect visual design,
              user experience, frontend architecture, and reliable software.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex min-h-12 items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore my work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/design"
                className="inline-flex min-h-12 items-center gap-2 border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Product design
              </Link>
              <Link
                to="/engineering"
                className="inline-flex min-h-12 items-center gap-2 border border-border-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Software engineering
              </Link>
            </div>
          </div>

          <aside className="relative flex min-h-72 items-end overflow-hidden border-t border-border bg-ink p-8 text-background lg:min-h-0 lg:border-l lg:border-t-0 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 font-display text-[18rem] leading-none tracking-[-0.1em] text-white/40"
            >
              AJ
            </div>
            <div className="relative">
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text-on-dark">
                2001 → now
              </p>
              <p className="mt-5 max-w-xs text-2xl font-medium leading-tight text-white">
                Design craft became product thinking. Product thinking became
                software architecture.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-7">
                <div>
                  <dt className="mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                    Experience
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    15+ years
                  </dd>
                </div>
                <div>
                  <dt className="mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                    Perspective
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    Design + code
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-surface/35 py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text">
                Selected work
              </p>
              <h2 className="mt-4 max-w-xl text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.055em] sm:text-7xl">
                Work you can see and inspect.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              Real client work, enterprise systems, and public demonstrations.
              Each case study separates verified outcomes from independently
              recreated examples.
            </p>
          </div>

          <div className="mt-14 grid gap-8">
            {featuredWork.map((project, index) => (
              <article
                key={project.title}
                className="grid overflow-hidden border border-border bg-card lg:grid-cols-[1.35fr_0.65fr]"
              >
                <a
                  href={project.href}
                  className={`group relative block min-h-72 overflow-hidden sm:min-h-[30rem] ${
                    project.tone === "dark" ? "bg-ink" : "bg-surface"
                  }`}
                  aria-label={`Read the ${project.title} case study`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    width="1440"
                    height="900"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
                  />
                  <span className="absolute bottom-4 left-4 bg-black/75 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {project.note}
                  </span>
                </a>
                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-gold-text">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-5 font-display text-4xl uppercase tracking-[-0.045em] text-ink sm:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      {project.role}
                    </p>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-10 border-t border-border pt-6">
                    <p className="text-sm font-medium leading-relaxed text-foreground">
                      {project.outcome}
                    </p>
                    <a
                      href={project.href}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      View case study
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text">
              One career, two lenses
            </p>
            <h2 className="mt-4 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] sm:text-6xl">
              The handoff is part of the work.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              I have worked on both sides of the design-to-development handoff.
              That changes how I plan interfaces, shape APIs, document
              decisions, and support teams after launch.
            </p>
          </div>
          <ol className="grid border-l border-t border-border sm:grid-cols-2">
            {expertise.map((item, index) => (
              <li
                key={item.title}
                className="border-b border-r border-border p-7 sm:min-h-52 sm:p-9"
              >
                <span className="mono text-[10px] tracking-[0.2em] text-gold-text">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border bg-ink py-20 text-white sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text-on-dark">
              Don&apos;t take my word for it.
            </p>
            <h2 className="mt-4 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl">
              Test this website.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              Inspect the source, explore Storybook, navigate with a keyboard,
              check the tokens, resize the layout, and run your own Lighthouse
              audit. Remaining gaps are documented instead of hidden.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/storybook/index.html"
                className="inline-flex min-h-12 items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Storybook
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/abarnettdev/aj-engineering-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View source
              </a>
              <Link
                to="/systems"
                className="inline-flex min-h-12 items-center gap-2 border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Inspect the design system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="resumes" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text">
              Résumés
            </p>
            <h2 className="mt-4 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] sm:text-6xl">
              Choose the perspective that fits the role.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="/resumes/aj-barnett-product-design.pdf"
              download
              className="group flex min-h-28 items-center justify-between border border-border-strong p-5 hover:border-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="font-semibold text-ink">
                Product Design Résumé
              </span>
              <ArrowDownToLine
                className="h-5 w-5 text-gold-text"
                aria-hidden="true"
              />
            </a>
            <a
              href="/resumes/aj-barnett-software-engineering.pdf"
              download
              className="group flex min-h-28 items-center justify-between border border-border-strong p-5 hover:border-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="font-semibold text-ink">
                Software Engineering Résumé
              </span>
              <ArrowDownToLine
                className="h-5 w-5 text-gold-text"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-20 sm:py-24">
        <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text">
              Start a conversation
            </p>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] sm:text-7xl">
              Building something worth caring about?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold text-background hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact AJ
          </Link>
        </div>
      </section>
    </>
  );
}
