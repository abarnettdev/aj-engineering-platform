import { useGsap } from "@/lib/gsap";

/**
 * CountUp, animates numeric portion of a value (e.g. "170+", "25 years")
 * when scrolled into view. Non-numeric parts stay static.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useGsap(({ gsap, ScrollTrigger, scope }) => {
    if (!match) return;
    const target = Number(match[2]);
    const isDecimal = match[2].includes(".");
    const node = scope.querySelector("[data-num]");
    if (!node) return;
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: scope,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power3.out",
          onUpdate: () => {
            node.textContent = isDecimal
              ? obj.v.toFixed(1)
              : Math.round(obj.v).toString();
          },
        });
      },
    });
  }, []);

  if (!match) return <span className={className}>{value}</span>;
  const [, pre, , post] = match;
  return (
    <span ref={ref as never} className={className}>
      {pre}
      <span data-num>0</span>
      {post}
    </span>
  );
}
