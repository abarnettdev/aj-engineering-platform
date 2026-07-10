import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * useGsap, scoped GSAP context. Auto-cleans on unmount. No-ops for reduced motion.
 */
export function useGsap(
  fn: (ctx: {
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
    scope: HTMLElement;
  }) => void | (() => void),
  deps: React.DependencyList = [],
  scopeRef?: RefObject<HTMLElement | null>,
) {
  const localRef = useRef<HTMLElement | null>(null);
  const ref = (scopeRef ?? localRef) as RefObject<HTMLElement | null>;

  useEffect(() => {
    const scope = ref.current;
    if (!scope || prefersReducedMotion()) return;

    let cleanup: void | (() => void);
    const ctx = gsap.context(() => {
      cleanup = fn({ gsap, ScrollTrigger, scope });
    }, scope);

    return () => {
      if (typeof cleanup === "function") cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
