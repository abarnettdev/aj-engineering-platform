import { createContext, forwardRef, useContext, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card — a compound, composition-first primitive.
 *
 * Prefer composition over configuration:
 *
 *   <Card>
 *     <Card.Header>
 *       <Card.Eyebrow>Component</Card.Eyebrow>
 *       <Card.Title>Button</Card.Title>
 *     </Card.Header>
 *     <Card.Body>…</Card.Body>
 *     <Card.Footer align="end"><Button /></Card.Footer>
 *   </Card>
 *
 * Sub-components are real named exports; children are free to reorder,
 * omit, or wrap them without new props on the parent.
 */

type Density = "comfortable" | "compact";
type Tone = "surface" | "raised" | "accent";

const CardContext = createContext<{ density: Density }>({ density: "comfortable" });

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual weight. `accent` gets a gold hairline; `raised` lifts on the page. */
  tone?: Tone;
  /** Spacing rhythm inherited by sub-components. */
  density?: Density;
  /** Render as a semantic <article> when the card represents a self-contained resource. */
  as?: "div" | "article" | "section";
}

const toneClass: Record<Tone, string> = {
  surface: "border-border bg-card",
  raised:
    "border-border bg-card shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]",
  accent: "border-gold/50 bg-card",
};

const CardRoot = forwardRef<HTMLDivElement, CardProps>(function Card(
  { tone = "surface", density = "comfortable", as: Tag = "div", className, children, ...rest },
  ref,
) {
  return (
    <CardContext.Provider value={{ density }}>
      <Tag
        ref={ref as never}
        className={cn(
          "group/card relative flex flex-col border transition-colors",
          toneClass[tone],
          className,
        )}
        {...rest}
      >
        {children}
      </Tag>
    </CardContext.Provider>
  );
});

const padX = (d: Density) => (d === "compact" ? "px-5" : "px-7");
const padY = (d: Density) => (d === "compact" ? "py-4" : "py-5");

function CardHeader({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const { density } = useContext(CardContext);
  return (
    <header
      className={cn(
        "flex items-baseline justify-between gap-4 border-b border-border",
        padX(density),
        padY(density),
        className,
      )}
      {...rest}
    >
      {children}
    </header>
  );
}

function CardEyebrow({ className, children, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mono text-[10px] uppercase tracking-[0.24em] text-gold",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

function CardTitle({ className, children, as: Tag = "h3", ...rest }: HTMLAttributes<HTMLHeadingElement> & { as?: "h2" | "h3" | "h4" }) {
  return (
    <Tag
      className={cn(
        "font-display text-xl font-medium tracking-tight text-ink",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function CardMeta({ className, children, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

function CardMedia({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative overflow-hidden border-b border-border", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

function CardBody({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const { density } = useContext(CardContext);
  return (
    <div
      className={cn(
        "flex flex-col gap-4 text-foreground/85",
        padX(density),
        density === "compact" ? "py-4" : "py-6",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

function CardFooter({
  className,
  children,
  align = "start",
  ...rest
}: HTMLAttributes<HTMLDivElement> & { align?: "start" | "between" | "end" }) {
  const { density } = useContext(CardContext);
  return (
    <footer
      className={cn(
        "mt-auto flex items-center gap-3 border-t border-border",
        padX(density),
        padY(density),
        align === "end" && "justify-end",
        align === "between" && "justify-between",
        className,
      )}
      {...rest}
    >
      {children}
    </footer>
  );
}

/**
 * Public compound API. Sub-components are real named exports AND attached to
 * the parent for the ergonomic `Card.Header` call site.
 */
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Eyebrow: CardEyebrow,
  Title: CardTitle,
  Meta: CardMeta,
  Media: CardMedia,
  Body: CardBody,
  Footer: CardFooter,
});

export {
  CardHeader,
  CardEyebrow,
  CardTitle,
  CardMeta,
  CardMedia,
  CardBody,
  CardFooter,
};

export type { Density as CardDensity, Tone as CardTone };

export function isCard(node: ReactNode): boolean {
  // Kept for tree-shakeable public API; consumers can guard slots by identity.
  return Boolean(node);
}
