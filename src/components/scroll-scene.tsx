import { useEffect, useRef, type ReactNode } from "react";
import { useGsap } from "@/lib/gsap";

/**
 * Choreograph, stagger-reveal direct children on scroll.
 * Falls back to visible when reduced motion is preferred.
 */
export function Choreograph({
  children,
  stagger = 0.08,
  y = 24,
  duration = 0.9,
  className,
  selector = ":scope > *",
}: {
  children: ReactNode;
  stagger?: number;
  y?: number;
  duration?: number;
  className?: string;
  selector?: string;
}) {
  const ref = useGsap(({ gsap, ScrollTrigger, scope }) => {
    const items = scope.querySelectorAll(selector);
    if (!items.length) return;
    gsap.from(items, {
      y,
      opacity: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.trigger === scope && t.kill());
  }, []);

  return (
    <div ref={ref as never} className={className}>
      {children}
    </div>
  );
}

/**
 * ReadingProgress, thin gold bar at top of viewport for long-form pages.
 */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.transform = `scaleX(${pct / 100})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-gold"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
