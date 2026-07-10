import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ActiveToc — sticky table of contents that highlights the section currently
 * in view. Pure client behavior via IntersectionObserver; degrades gracefully.
 */
export function ActiveToc({
  items,
  className,
}: {
  items: { id: string; label: string }[];
  className?: string;
}) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const nodes = items
      .map((it) => document.getElementById(it.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Choose the entry whose top is closest to the viewport top from above.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.1, 0.5, 1] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Article sections" className={cn("border-l border-border pl-4", className)}>
      <ol className="space-y-3 text-sm">
        {items.map((s, i) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group flex items-baseline gap-3 transition-colors",
                  isActive ? "text-ink" : "text-muted-foreground hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "mono text-[9.5px] tracking-[0.18em] transition-colors",
                    isActive ? "text-gold" : "text-gold/60",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "story-link relative",
                    isActive && "after:scale-x-100 after:origin-bottom-left",
                  )}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
