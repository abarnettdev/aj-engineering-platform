import { CompositeFigure } from "@/components/composites/figure";
export function MentalModels() {
  return (
    <CompositeFigure
      eyebrow="Fig. 05 · Platform Model"
      title="Data · Interface · Trust"
      image="/visuals/mental-model-studio.webp"
      alt="A regulated fintech workflow connecting structured data, a clear customer interface, and explicit trust boundaries."
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
