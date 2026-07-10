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
            <p className="mono mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance font-display text-4xl leading-[1.05] md:text-5xl">
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
    <span className="mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-px w-6 bg-border-strong" />
      {children}
    </span>
  );
}
