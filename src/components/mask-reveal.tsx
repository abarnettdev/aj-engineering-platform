import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * MaskReveal — clip-path wipe triggered when the element enters the viewport.
 * Direction controls where the mask retracts from. Reduced-motion users
 * see the final state immediately (handled in CSS).
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "top" | "bottom";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const initial: Record<typeof direction, string> = {
      left: "inset(0 100% 0 0)",
      right: "inset(0 0 0 100%)",
      top: "inset(100% 0 0 0)",
      bottom: "inset(0 0 100% 0)",
    };
    el.style.clipPath = initial[direction];
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-in", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.setAttribute("data-in", "true");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [direction]);

  return (
    <div
      ref={ref}
      data-in="false"
      className={cn("mask-reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
