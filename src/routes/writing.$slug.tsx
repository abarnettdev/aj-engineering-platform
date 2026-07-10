import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ReadingProgress } from "@/components/scroll-scene";
import { ActiveToc } from "@/components/composites/active-toc";
import { articles, type Article } from "@/content/site-data";

export const Route = createFileRoute("/writing/$slug")({
  head: ({ params }) => {
    const a = articles.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${a?.title ?? "Article"}, AJ Barnett` },
        { name: "description", content: a?.dek ?? "Field notes by AJ Barnett." },
      ],
    };
  },
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">404</p>
      <h1 className="mt-6 font-display text-5xl font-medium text-ink">
        Article not found
      </h1>
      <Link to="/writing" className="mono mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-ink hover:text-gold">
        ← Back to field notes
      </Link>
    </div>
  ),
  component: Article,
});

function Article() {
  const { article } = Route.useLoaderData() as { article: Article };
  const related: Article[] = article.related
    .map((slug: string) => articles.find((a) => a.slug === slug))
    .filter((a): a is Article => Boolean(a));

  return (
    <>
      <ReadingProgress />
      {/* Cinematic hero */}
      <section className="relative overflow-hidden border-b border-border/70 bg-ink text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 40% at 20% 100%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 0%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 60%)",
          }}
        />
        <div className="container-page relative py-20 md:py-28">
          <Link
            to="/writing"
            className="mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-background/70 hover:text-gold"
          >
            <ArrowLeft className="h-3 w-3" /> Back to field notes
          </Link>
          <Reveal delay={80}>
            <p className="mono mt-10 text-[10px] uppercase tracking-[0.24em] text-gold">
              {article.tag}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1] tracking-tight text-background md:text-7xl">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg text-background/80">{article.dek}</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mono mt-10 flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.22em] text-background/60">
              <span className="text-gold">AJ Barnett</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.read}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <div className="container-page grid gap-16 py-20 md:grid-cols-[1fr_3fr] md:py-28">
        {/* TOC */}
        <aside className="min-w-0 md:sticky md:top-24 md:self-start">
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
            In this essay
          </p>
          <ActiveToc items={article.toc} className="mt-4" />
        </aside>



        {/* Prose */}
        <article className="min-w-0 max-w-2xl">
          {article.body.map((block: Article["body"][number], i: number) => {
            if (block.kind === "h2") {
              return (
                <h2
                  key={i}
                  id={block.id}
                  className="mt-14 scroll-mt-24 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.kind === "p") {
              return (
                <p
                  key={i}
                  className={`mt-5 leading-relaxed text-foreground/85 ${i === 0 ? "drop-cap text-lg" : ""}`}
                >
                  {block.text}
                </p>
              );
            }
            if (block.kind === "quote") {
              return (
                <blockquote key={i} className="rule-gold my-10 pl-6">
                  <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                    {block.text}
                  </p>
                </blockquote>
              );
            }
            if (block.kind === "callout") {
              return (
                <aside
                  key={i}
                  className="my-10 border-y border-gold/40 bg-gold/5 px-6 py-6"
                >
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    Note
                  </p>
                  <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                    {block.text}
                  </p>
                </aside>
              );
            }
            if (block.kind === "code") {
              return (
                <pre
                  key={i}
                  className="mono my-8 overflow-auto border border-border bg-ink p-5 text-[12px] leading-relaxed text-background"
                >
                  <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-background/50">
                    <span>{block.lang ?? "code"}</span>
                    <span className="text-gold">// snippet</span>
                  </div>
                  <code>{block.text}</code>
                </pre>
              );
            }
            return null;
          })}

          {/* Author */}
          <div className="mt-16 border-t border-border pt-8">
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
              Written by
            </p>
            <p className="mt-3 font-display text-2xl font-medium text-ink">
              AJ Barnett
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Frontend architect, design systems engineer, AI practitioner.
              Twenty-five years of shipping.
            </p>
          </div>
        </article>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-border/70 bg-surface/40">
          <div className="container-page py-20">
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
              Keep reading
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((r: Article) => (
                <Link
                  key={r.slug}
                  to="/writing/$slug"
                  params={{ slug: r.slug }}
                  className="group lift block border border-border bg-card p-7"
                >
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    {r.tag} · {r.read}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
                    {r.title}
                  </h3>
                  <span className="mono mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink group-hover:text-gold">
                    Read <ArrowUpRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
