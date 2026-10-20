import { CompositeFigure } from "@/components/composites/figure";
export function SystemsMap() {
  return (
    <CompositeFigure
      eyebrow="Fig. 01 · Product System"
      title="Tokens · Components · Code"
      image="/visuals/product-system-studio.webp"
      alt="Floating token, component, and code panels arranged as a polished product-system composition."
      caption={
        <>
          Product intent becomes reusable decisions, then working software a
          team can inspect, maintain, and ship.
        </>
      }
      legend={[
        { label: "Tokens", note: "shared visual decisions" },
        { label: "Components", note: "reusable interface contracts" },
        { label: "Code", note: "the production implementation" },
      ]}
    />
  );
}
