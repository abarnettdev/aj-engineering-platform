import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}) {
  const styles = {
    default: "border-border bg-surface text-foreground/80",
    accent: "border-accent/40 bg-accent/10 text-accent",
    outline: "border-border-strong bg-transparent text-muted-foreground",
  } as const;
  return (
    <span
      className={cn(
        "mono inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10.5px] uppercase tracking-widest",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="mono inline-flex items-center rounded border border-border bg-surface/60 px-2 py-1 text-[11px] text-foreground/80">
      {children}
    </span>
  );
}
