import { CompositeFigure } from "@/components/composites/figure";
export function ComponentAnatomy() {
  return (
    <CompositeFigure
      eyebrow="Fig. 02 · System in Practice"
      title="Tokens · Controls · Components"
      image="/visuals/design-system-studio.webp"
      alt="AJ Barnett's interactive design-system playground displayed on a polished studio laptop."
      caption={
        <>
          Change a shared token and the component responds. The visible demo is
          backed by the same typed contract used across the product.
        </>
      }
      legend={[
        { label: "Tokens", note: "color, space, radius, density" },
        { label: "Controls", note: "a direct way to test the contract" },
        { label: "Components", note: "the downstream result" },
      ]}
    />
  );
}
