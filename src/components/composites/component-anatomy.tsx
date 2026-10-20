import { CompositeFigure } from "@/components/composites/figure";
export function ComponentAnatomy() {
  return (
    <CompositeFigure
      eyebrow="Fig. 02 · This Site in Production"
      title="Tokens · Type · Components"
      image="/projects/design-system-demo.webp"
      alt="The live ajbarnett.tech token playground demonstrating how site tokens change a real component."
      caption={
        <>
          The ajbarnett.tech system proves its contract in production: one set
          of tokens controls typography, spacing, surfaces, component states,
          interaction feedback, and responsive behavior.
        </>
      }
      legend={[
        { label: "Tokens", note: "shared visual decisions" },
        { label: "Type", note: "consistent editorial hierarchy" },
        { label: "Components", note: "reusable behavior and states" },
      ]}
    />
  );
}
