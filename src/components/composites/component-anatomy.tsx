import { CompositeFigure } from "@/components/composites/figure";
export function ComponentAnatomy() {
  return (
    <CompositeFigure
      eyebrow="Fig. 02 · Legato in Production"
      title="Navigation · Content · Commerce"
      image="/visuals/design-system-studio.webp"
      alt="The current CDW website, built with the Legato design system, displayed in a polished studio monitor."
      caption={
        <>
          Shared foundations become real navigation, product surfaces, content
          cards, and commerce patterns across the CDW experience.
        </>
      }
      legend={[
        { label: "Foundation", note: "tokens, type, spacing, and behavior" },
        { label: "Patterns", note: "navigation, cards, calls to action" },
        { label: "Product", note: "the system working at enterprise scale" },
      ]}
    />
  );
}
