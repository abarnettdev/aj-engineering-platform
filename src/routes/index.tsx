import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowDownToLine,
  ArrowRight,
  Check,
  Code2,
  FileCode,
  Gauge,
  Layers,
  Mail,
  PenTool,
  Smartphone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AJ Barnett · Product Designer & Software Engineer" },
      {
        name: "description",
        content:
          "AJ Barnett designs product interfaces, builds design systems, and ships production software from first concept to working code.",
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

const stats = [
  ["20+", "Years across design and engineering"],
  ["92%", "Legato adoption across targeted experiences"],
  ["170+", "Shared UI assets shipped"],
] as const;

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const buttonOutline =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function Eyebrow({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${dark ? "border-white/15 bg-white/5 text-white" : "border-border bg-card text-accent-ink"}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

function Home() {
  return (
    <>
      <section className="px-3 pt-3" aria-labelledby="home-title">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] bg-surface shadow-soft">
          <div
            aria-hidden="true"
            className="glow pointer-events-none absolute inset-0"
          />
          <div className="relative px-6 pb-6 pt-16 text-center md:px-12 md:pt-24">
            <Eyebrow>Product Designer &amp; Software Engineer</Eyebrow>
            <h1
              id="home-title"
              aria-label="From first concept to production code."
              className="mx-auto mt-6 max-w-5xl text-balance text-[clamp(3.2rem,8vw,7.4rem)] font-medium leading-[0.94] tracking-[-0.065em] text-ink"
            >
              From first concept to{" "}
              <span className="text-accent-ink">production code.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I’m AJ Barnett. I design interfaces, build design systems, and
              ship the software behind them.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/work" className={buttonPrimary}>
                Explore work{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link to="/systems" className={buttonOutline}>
                View design system
              </Link>
              <Link
                to="/ask-aj"
                className="inline-flex min-h-12 items-center rounded-full px-5 text-sm font-semibold text-ink hover:bg-muted"
              >
                Try Ask A.J.
              </Link>
            </div>
            <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-white/70 bg-white p-2 shadow-lift">
              <img
                src="/visuals/client-work-studio.webp"
                srcSet="/visuals/client-work-studio-960.webp 960w, /visuals/client-work-studio.webp 1580w"
                sizes="(min-width: 1280px) 1000px, calc(100vw - 3rem)"
                alt="Three polished browser mockups showing the current LSI Companies, Artisan Eatery, and Hope Hospice websites."
                width={1580}
                height={996}
                className="aspect-[8/5] w-full rounded-[1.15rem] object-cover"
              />
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
              Current public references captured October 20, 2026. These sites
              may differ from the versions AJ originally designed and built.
            </p>
          </div>
        </div>
      </section>

      <section
        className="container-page py-20 sm:py-28"
        aria-labelledby="about-work-title"
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-soft md:p-10 lg:col-span-7">
            <div
              aria-hidden="true"
              className="glow pointer-events-none absolute inset-0 opacity-70"
            />
            <div className="relative">
              <Eyebrow dark>About the work</Eyebrow>
              <h2
                id="about-work-title"
                aria-label="One person who speaks design and code fluently."
                className="mt-6 text-balance text-4xl font-medium text-white md:text-6xl"
              >
                One person who speaks{" "}
                <span className="text-accent">design</span> and{" "}
                <span className="text-accent">code</span> fluently.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                My work spans visual design, product design, design systems,
                frontend engineering, and production software. I keep the intent
                intact from the first sketch through delivery.
              </p>
            </div>
          </div>
          <div className="grid gap-4 lg:col-span-5">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="flex items-end justify-between gap-6 rounded-3xl bg-card p-7 shadow-soft"
              >
                <p className="max-w-[13rem] text-sm leading-relaxed text-muted-foreground">
                  {label}
                </p>
                <p className="text-5xl font-medium tracking-tight text-ink md:text-6xl">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="container-page pb-20 sm:pb-28"
        aria-labelledby="featured-title"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Eyebrow>Featured work</Eyebrow>
            <h2
              id="featured-title"
              className="mt-5 text-5xl font-medium tracking-tight text-ink md:text-7xl"
            >
              Selected projects
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Systems, software, and client sites designed and built for real
              teams.
            </p>
          </div>
          <Link to="/work" className={buttonOutline}>
            All work <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6">
          <article className="overflow-hidden rounded-3xl bg-card p-3 shadow-soft lg:grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-2xl bg-ink p-4 sm:p-8">
              <img
                src="/visuals/design-system-studio.webp"
                srcSet="/visuals/design-system-studio-960.webp 960w, /visuals/design-system-studio.webp 1581w"
                sizes="(min-width: 1024px) 55vw, 100vw"
                alt="AJ Barnett's interactive design-system playground displayed on a polished studio laptop."
                width={1581}
                height={995}
                className="aspect-[8/5] w-full rounded-xl object-cover shadow-lift"
              />
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-9">
              <div>
                <Eyebrow>Enterprise design system</Eyebrow>
                <h3 className="mt-5 text-4xl font-medium text-ink md:text-5xl">
                  CDW Legato
                </h3>
                <p className="mt-3 text-sm font-semibold">
                  Technical Lead · Senior Software Engineer
                </p>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Shared libraries, component APIs, tooling, accessibility,
                  documentation, and adoption across product teams.
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-medium">
                  92% adoption · 60%+ less implementation effort · 170+ shared
                  UI assets
                </p>
                <Link
                  to="/work/legato"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-ink"
                >
                  Read the case study{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <article className="grid overflow-hidden rounded-3xl bg-ink text-white shadow-soft lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <Eyebrow dark>Software project</Eyebrow>
              <h3 className="mt-6 text-4xl font-medium text-white md:text-6xl">
                Ask A.J.
              </h3>
              <p className="mt-5 max-w-lg leading-relaxed text-white/65">
                A working AI assistant that answers questions about my
                experience, process, and projects through a streamed, accessible
                interface.
              </p>
              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Ask A.J. capabilities"
              >
                {[
                  "Streaming responses",
                  "Server-only model access",
                  "Citations",
                  "Graceful fallbacks",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/ask-aj"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-ink hover:bg-accent hover:text-white"
              >
                Try Ask A.J.{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="m-3 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-3 lg:ml-0">
              <img
                src="/visuals/ask-aj-studio.webp"
                srcSet="/visuals/ask-aj-studio-960.webp 960w, /visuals/ask-aj-studio.webp 1580w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="The real Ask A.J. interface presented on a laptop in a dark coral studio scene."
                width={1580}
                height={995}
                loading="lazy"
                className="h-full min-h-72 w-full rounded-xl object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="px-3" aria-labelledby="disciplines-title">
        <div className="mx-auto max-w-[1240px] rounded-[2rem] bg-surface px-6 py-20 shadow-soft md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Two disciplines, one practice</Eyebrow>
            <h2
              id="disciplines-title"
              className="mt-5 text-balance text-4xl font-medium text-ink md:text-6xl"
            >
              Hire for design. Hire for engineering.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              One craft that covers the full product lifecycle.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: PenTool,
                title: "Product Design",
                to: "/design" as const,
                items: [
                  "Product strategy and UX flows",
                  "Visual and interaction design",
                  "Design systems and tokens",
                  "Accessible patterns",
                ],
              },
              {
                icon: Code2,
                title: "Software Engineering",
                to: "/engineering" as const,
                items: [
                  "React and TypeScript",
                  "Frontend architecture",
                  "Server integration and AI features",
                  "Testing, performance, and delivery",
                ],
              },
            ].map((discipline) => (
              <article
                key={discipline.title}
                className="rounded-3xl border border-border bg-card p-8"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
                  <discipline.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-3xl font-medium text-ink">
                  {discipline.title}
                </h3>
                <ul className="mt-6 grid gap-3">
                  {discipline.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check
                        className="size-4 text-accent-ink"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={discipline.to}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-ink"
                >
                  Explore {discipline.title.toLowerCase()}{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="container-page py-20 sm:py-28"
        aria-labelledby="system-title"
      >
        <Eyebrow>Design system</Eyebrow>
        <h2
          id="system-title"
          className="mt-5 max-w-4xl text-balance text-4xl font-medium text-ink md:text-6xl"
        >
          I build and document the systems behind the interface.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Layers,
              title: "Design tokens",
              description:
                "One source for color, type, spacing, radius, and elevation.",
            },
            {
              icon: FileCode,
              title: "Components",
              description:
                "Typed components with clear variants, states, and public APIs.",
            },
            {
              icon: PenTool,
              title: "Documentation",
              description:
                "Usage guidance and realistic examples beside the implementation.",
            },
            {
              icon: Accessibility,
              title: "Accessibility",
              description:
                "Keyboard support, visible focus, and WCAG targets by default.",
            },
            {
              icon: Code2,
              title: "Code quality",
              description:
                "Strict TypeScript, linting, and tests around meaningful contracts.",
            },
            {
              icon: Gauge,
              title: "Storybook",
              description:
                "A component workshop that shares the same tokens as the product.",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <article
              key={String(title)}
              className={`rounded-3xl p-7 ${index === 0 ? "bg-ink text-white" : "bg-card shadow-soft"}`}
            >
              <Icon
                className={`size-6 ${index === 0 ? "text-accent" : "text-accent-ink"}`}
                aria-hidden="true"
              />
              <h3
                className={`mt-8 text-xl font-medium ${index === 0 ? "text-white" : "text-ink"}`}
              >
                {title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${index === 0 ? "text-white/60" : "text-muted-foreground"}`}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/systems" className={buttonPrimary}>
            Explore the system
          </Link>
          <a href="/storybook/index.html" className={buttonOutline}>
            Open Storybook
          </a>
        </div>
      </section>

      <section
        className="container-page pb-20 sm:pb-28"
        aria-labelledby="test-title"
      >
        <div className="grid gap-10 rounded-3xl bg-card p-8 shadow-soft md:grid-cols-12 md:p-12">
          <div className="md:col-span-5">
            <Eyebrow>Test this website</Eyebrow>
            <h2
              id="test-title"
              className="mt-5 text-4xl font-medium text-ink md:text-5xl"
            >
              Inspect the work directly.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Review the site the same way you would review a product or pull
              request.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 md:col-span-7">
            {[
              {
                icon: Gauge,
                title: "Run Lighthouse",
                description: "Targets 100 in Accessibility and SEO.",
              },
              {
                icon: Accessibility,
                title: "Use a keyboard",
                description: "Skip links, focus rings, and labelled controls.",
              },
              {
                icon: Smartphone,
                title: "Resize it",
                description: "Responsive from small phones to wide desktops.",
              },
              {
                icon: Layers,
                title: "Read the system",
                description:
                  "Tokens and components are documented in Storybook.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <li
                key={String(title)}
                className="rounded-2xl border border-border p-5"
              >
                <Icon className="size-5 text-accent-ink" aria-hidden="true" />
                <p className="mt-4 font-medium text-ink">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="resumes"
        className="container-page scroll-mt-24 pb-20 sm:pb-28"
        aria-labelledby="resumes-title"
      >
        <div className="grid gap-8 rounded-3xl bg-surface p-8 shadow-soft md:grid-cols-2 md:items-end md:p-12">
          <div>
            <Eyebrow>Résumés</Eyebrow>
            <h2
              id="resumes-title"
              className="mt-5 text-4xl font-medium text-ink md:text-5xl"
            >
              Choose the version that fits the role.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="/resumes/aj-barnett-product-design.pdf"
              download
              className={buttonOutline}
            >
              <ArrowDownToLine className="size-4" aria-hidden="true" /> Product
              Design
            </a>
            <a
              href="/resumes/aj-barnett-software-engineering.pdf"
              download
              className={buttonOutline}
            >
              <ArrowDownToLine className="size-4" aria-hidden="true" />{" "}
              Engineering
            </a>
          </div>
        </div>
      </section>

      <section className="container-page pb-8" aria-labelledby="contact-title">
        <div className="flex flex-col gap-8 rounded-3xl bg-card p-8 shadow-soft sm:flex-row sm:items-end sm:justify-between md:p-12">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <h2
              id="contact-title"
              className="mt-5 max-w-3xl text-balance text-4xl font-medium text-ink md:text-6xl"
            >
              Building something worth caring about?
            </h2>
          </div>
          <Link to="/contact" className={buttonPrimary}>
            <Mail className="size-4" aria-hidden="true" /> Contact AJ
          </Link>
        </div>
      </section>
    </>
  );
}
