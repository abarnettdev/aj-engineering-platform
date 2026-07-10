import { forwardRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Tilt3D } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * ArticleCard — compound, composition-first card for editorial layouts.
 * Wraps a Tilt3D shell and exposes named slots so callers own layout.
 *
 *   <ArticleCard to="/writing/$slug" params={{ slug }}>
 *     <ArticleCard.Meta tag="Design Systems" read="6 min" />
 *     <ArticleCard.Title>Why tokens are a language</ArticleCard.Title>
 *     <ArticleCard.Dek>How tokens become the contract…</ArticleCard.Dek>
 *     <ArticleCard.Footer>Read</ArticleCard.Footer>
 *   </ArticleCard>
 */

type RootProps = {
  to?: string;
  params?: Record<string, string>;
  href?: string;
  featured?: boolean;
  className?: string;
  children: ReactNode;
};

const Root = forwardRef<HTMLElement, RootProps>(function ArticleCardRoot(
  { to, params, href, featured, className, children },
  ref,
) {
  const content = (
    <Tilt3D max={4} glare={false}>
      <article
        ref={ref}
        className={cn(
          "group/article relative flex h-full flex-col overflow-hidden border border-border bg-card p-7 transition-colors",
          "shadow-[0_10px_40px_-30px_rgba(0,0,0,0.2)]",
          "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity",
          "before:[background:linear-gradient(120deg,transparent_45%,color-mix(in_oklab,var(--gold)_10%,transparent)_50%,transparent_55%)]",
          "hover:before:opacity-100",
          "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500",
          "hover:after:scale-x-100",
          featured && "md:p-12",
          className,
        )}
      >
        {children}
      </article>
    </Tilt3D>
  );

  if (to) {
    return (
      <Link to={to} params={params as never} className="block h-full">
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className="block h-full">
        {content}
      </a>
    );
  }
  return <div className="block h-full">{content}</div>;
});

function Meta({
  tag,
  read,
  featured,
}: {
  tag: string;
  read?: string;
  featured?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
        {featured ? "Featured · " : ""}
        {tag}
      </p>
      {read && (
        <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {read}
        </p>
      )}
    </div>
  );
}

function Title({
  children,
  size = "md",
}: {
  children: ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <h2
      className={cn(
        "font-display font-medium leading-tight tracking-tight text-ink",
        size === "lg"
          ? "mt-6 text-4xl md:text-6xl"
          : "mt-6 text-2xl md:text-3xl",
      )}
    >
      {children}
    </h2>
  );
}

function Dek({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

function Footer({ children = "Read" }: { children?: ReactNode }) {
  return (
    <div className="mt-auto pt-6">
      <span className="mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink transition-colors group-hover/article:text-gold">
        {children} <ArrowUpRight className="h-3 w-3 transition-transform group-hover/article:-translate-y-0.5 group-hover/article:translate-x-0.5" />
      </span>
    </div>
  );
}

export const ArticleCard = Object.assign(Root, { Meta, Title, Dek, Footer });
