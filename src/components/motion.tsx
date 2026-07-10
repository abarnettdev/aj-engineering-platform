import { useEffect, useRef, useState, type ReactNode } from "react";
import { useGsap } from "@/lib/gsap";

/**
 * Parallax, scroll-linked Y translation. Speed 0.2 = slow (background),
 * -0.2 = reverse. Cheap: single ScrollTrigger, scrubbed.
 */
export function Parallax({
  children,
  speed = 0.2,
  scale,
  className,
}: {
  children: ReactNode;
  speed?: number;
  scale?: [number, number];
  className?: string;
}) {
  const ref = useGsap(({ gsap, ScrollTrigger, scope }) => {
    const st = ScrollTrigger.create({
      trigger: scope,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.6,
      onUpdate: (self) => {
        const y = (self.progress - 0.5) * 200 * speed;
        const s = scale
          ? scale[0] + (scale[1] - scale[0]) * self.progress
          : undefined;
        gsap.set(scope, {
          y,
          scale: s,
          transformOrigin: "center center",
        });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div ref={ref as never} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/**
 * SplitReveal, splits text into words and staggers them in on mount.
 * Uses inline-block spans so it wraps naturally.
 */
export function SplitReveal({
  children,
  className,
  delay = 0,
  stagger = 0.06,
  y = 40,
  duration = 1.0,
}: {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
}) {
  const ref = useGsap(({ gsap, scope }) => {
    const words = scope.querySelectorAll("[data-word]");
    if (!words.length) return;
    gsap.from(words, {
      y,
      opacity: 0,
      duration,
      delay,
      stagger,
      ease: "power4.out",
    });
  }, []);

  const words = children.split(" ");
  return (
    <span ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block align-baseline"
          style={{ overflow: "visible", lineHeight: 1.1 }}
        >

          <span data-word className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}

/**
 * Magnetic — deprecated. Cursor-following buttons were removed from the
 * site. This is kept as an identity wrapper so existing imports and
 * Storybook demos continue to compile and render without motion.
 */
export function Magnetic({
  children,
  className,
}: {
  children: ReactNode;
  /** @deprecated no-op, kept for API compatibility */
  strength?: number;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}

/**
 * CursorSpotlight, a soft gold spotlight follows the pointer inside its container.
 * Zero cost on touch / reduced motion.
 */
export function CursorSpotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
      style={{ position: "relative" }}
    >
      {pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--gold) 18%, transparent), transparent 65%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

/**
 * Tilt3D, perspective-based 3D card tilt that follows the cursor.
 * Uses transform: perspective(...) rotateX/Y with GPU-friendly translateZ.
 * Fully accessible: no-ops on reduced motion, touch devices, or keyboard focus.
 */
export function Tilt3D({
  children,
  className,
  max = 8,
  glare = true,
  scale = 1.015,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * max * 2;
      const ry = (px - 0.5) * max * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(1100px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`;
        if (glareRef.current) {
          glareRef.current.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, color-mix(in oklab, var(--gold) 24%, transparent), transparent 55%)`;
          glareRef.current.style.opacity = "1";
        }
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)";
      if (glareRef.current) glareRef.current.style.opacity = "0";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [max, scale]);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)",
        willChange: "transform",
        position: "relative",
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{ opacity: 0, transition: "opacity 300ms ease" }}
        />
      )}
    </div>
  );
}

/**
 * FloatLayer — enter-and-settle layer for cinematic compositions.
 *
 * Animates in with a small Y offset + fade as it enters the viewport,
 * then STAYS at its natural resting pose. Scrolling back up reverses
 * the entrance via scrub; scrolling past does not drift or fade the
 * layer away. Respects reduced motion.
 */
export function FloatLayer({
  children,
  depth = 1,
  rotate = 0,
  className,
  style,
}: {
  children: ReactNode;
  /** 0 = static, 1 = strong entrance offset */
  depth?: number;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useGsap(({ gsap, ScrollTrigger, scope }) => {
    gsap.set(scope, { rotate });
    const st = ScrollTrigger.create({
      trigger: scope,
      start: "top 95%",
      end: "top 55%",
      scrub: 0.8,
      onUpdate: (self) => {
        // 0 = fully offset, 1 = at rest. Never overshoots past rest.
        const p = self.progress;
        const y = (1 - p) * 60 * depth;
        gsap.set(scope, { y, opacity: 0.2 + p * 0.8, rotate });
      },
    });
    return () => st.kill();
  }, [depth, rotate]);
  return (
    <div
      ref={ref as never}
      className={className}
      style={{ willChange: "transform, opacity", transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </div>
  );
}

/**
 * ScrollDrift3D — enter-and-settle 3D drift.
 *
 * As the user scrolls the element into view, it drifts from the `from`
 * pose to its natural resting pose (identity transform, full opacity)
 * and STAYS there. Scrolling past does NOT animate it away. Scrolling
 * back reverses the entrance via scrub. The `to`/`rest` props are kept
 * for API compatibility but are no-ops.
 */
export function ScrollDrift3D({
  children,
  className,
  style,
  from = { z: -600, rotateY: -35, rotateX: 10, x: -80, y: 60, opacity: 0 },
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  from?: { z?: number; rotateY?: number; rotateX?: number; x?: number; y?: number; opacity?: number };
  /** @deprecated no-op, kept for API compatibility */
  to?: { z?: number; rotateY?: number; rotateX?: number; x?: number; y?: number; opacity?: number };
  /** @deprecated no-op, kept for API compatibility */
  rest?: number;
}) {
  const ref = useGsap(({ gsap, ScrollTrigger, scope }) => {
    const st = ScrollTrigger.create({
      trigger: scope,
      start: "top 90%",
      end: "top 45%",
      scrub: 0.9,
      onUpdate: (self) => {
        const p = self.progress;
        const lerp = (a: number, b: number) => a + (b - a) * p;
        gsap.set(scope, {
          z: lerp(from.z ?? 0, 0),
          rotateY: lerp(from.rotateY ?? 0, 0),
          rotateX: lerp(from.rotateX ?? 0, 0),
          x: lerp(from.x ?? 0, 0),
          y: lerp(from.y ?? 0, 0),
          opacity: lerp(from.opacity ?? 1, 1),
          transformPerspective: 1200,
          transformOrigin: "center center",
        });
      },
    });
    return () => st.kill();
  }, []);
  return (
    <div
      ref={ref as never}
      className={className}
      style={{ willChange: "transform, opacity", transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </div>
  );
}

