import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Product Design · AJ Barnett" },
      {
        name: "description",
        content:
          "Product, interface, visual, responsive, and design-system work by AJ Barnett.",
      },
      { property: "og:title", content: "Product Design · AJ Barnett" },
      {
        property: "og:description",
        content:
          "Interface design, visual systems, responsive experiences, accessibility, and design-to-development work.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://ajbarnett.tech/design" }],
  }),
  component: ProductDesign,
});

const capabilities = [
  "Interface and visual design",
  "Responsive systems",
  "Interaction and state design",
  "Typography and composition",
  "Accessibility",
  "Component specifications",
  "Design tokens",
  "Design-to-development workflows",
] as const;

const projects = [
  {
    title: "LSI Companies",
    type: "Commercial real estate",
    image: "/projects/lsi-current-reference.png",
    alt: "Current LSI Companies public homepage with property imagery and service navigation.",
    problem:
      "Present a broad real-estate business clearly while guiding visitors toward services, research, and property search.",
    role: "Design and frontend development while at Priority Marketing.",
    focus:
      "Information hierarchy, responsive layout, content structure, and CMS delivery.",
    note: "Current public reference captured October 20, 2026. The site may have changed since AJ's involvement.",
  },
  {
    title: "Artisan Eatery",
    type: "Hospitality",
    image: "/projects/artisan-current-reference.png",
    alt: "Current Artisan Eatery public homepage with food photography and restaurant navigation.",
    problem:
      "Translate the restaurant's character into a visual experience that makes the menu, story, and location easy to reach.",
    role: "Design and frontend development while at Priority Marketing.",
    focus:
      "Brand expression, food-first art direction, calls to action, and mobile behavior.",
    note: "Current public reference captured October 20, 2026. The site may have changed since AJ's involvement.",
  },
  {
    title: "Hope Hospice",
    type: "Healthcare and nonprofit",
    image: "/projects/hope-current-reference.png",
    alt: "Current Hope Hospice public contact page with care navigation and a referral form.",
    problem:
      "Help families find time-sensitive care information and contact options in a sensitive healthcare context.",
    role: "Design and frontend development while at Priority Marketing.",
    focus:
      "Clear navigation, readable content, prominent help paths, and accessible forms.",
    note: "Current public reference captured October 20, 2026. The site may have changed since AJ's involvement.",
  },
] as const;

function ProductDesign() {
  return (
    <>
      <section className="border-b border-border py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text">
              Product Design
            </p>
            <h1 className="mt-6 max-w-5xl text-balance font-display text-[clamp(2.8rem,12.5vw,8rem)] uppercase leading-[0.84] tracking-[-0.065em] text-ink">
              Design that survives production.
            </h1>
          </div>
          <p className="max-w-xl text-xl leading-relaxed text-muted-foreground">
            I started in visual design and web design before moving deeper into
            software engineering. I still treat hierarchy, interaction,
            accessibility, and responsive behavior as core product decisions.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface/40 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="sr-only">Design capabilities</h2>
          <ul className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <li
                key={capability}
                className="flex min-h-32 flex-col justify-between border-b border-r border-border p-5"
              >
                <span className="mono text-[9px] tracking-[0.18em] text-gold-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold text-ink">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text">
              Client work · 2016–2020
            </p>
            <h2 className="mt-5 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] sm:text-7xl">
              Commercial work, shown honestly.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              These projects were designed and developed while I worked at
              Priority Marketing. The images below show current public pages and
              are labeled because the sites may have changed since my
              involvement.
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-[1.2fr_0.8fr]"
              >
                <figure className="bg-surface">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width="1440"
                    height="900"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="aspect-[16/10] h-full w-full object-cover object-top"
                  />
                  <figcaption className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted-foreground">
                    {project.note}
                  </figcaption>
                </figure>
                <div className="p-7 sm:p-10">
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-gold-text">
                    {project.type}
                  </p>
                  <h3 className="mt-4 font-display text-4xl uppercase tracking-[-0.045em] text-ink sm:text-5xl">
                    {project.title}
                  </h3>
                  <dl className="mt-8 space-y-6">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
                        Problem
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
                        Role
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.role}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
                        Focus
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.focus}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ink py-20 text-white sm:py-24">
        <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold-text-on-dark">
              The other half
            </p>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl">
              See how the design becomes software.
            </h2>
          </div>
          <Link
            to="/engineering"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Software engineering
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
