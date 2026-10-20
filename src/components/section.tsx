import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  as: Tag = "section",
  eyebrow,
  title,
  description,
  align = "left",
}: {
  children?: ReactNode;
  className?: string;
  as?: "section" | "div";
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Tag className={cn("container-page py-20 md:py-28", className)}>
      {(eyebrow || title || description) && (
        <header
          className={cn(
            "mb-12 max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-ink shadow-soft">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-5 text-balance text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-ink shadow-soft">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
