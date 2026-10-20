import { CompositeFigure } from "@/components/composites/figure";
export function MentalModels() {
  return (
    <CompositeFigure
      eyebrow="Fig. 05 · Platform Model"
      title="Data · Interface · Trust"
      image="/visuals/platform-studio.webp"
      alt="A financial-platform interface displayed on a polished tablet device."
      caption={
        <>
          Strong platforms make complex data understandable while keeping the
          boundaries, permissions, and user trust visible in the experience.
        </>
      }
      legend={[
        { label: "Data", note: "the shape behind the product" },
        { label: "Interface", note: "the decisions users can see" },
        { label: "Trust", note: "reliability, access, and clarity" },
      ]}
    />
  );
}
