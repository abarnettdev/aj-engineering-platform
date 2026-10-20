import { CompositeFigure } from "@/components/composites/figure";
export function BlueprintDiagram() {
  return (
    <CompositeFigure
      eyebrow="Fig. 03 · Production References"
      title="Real sites · Real constraints"
      image="/visuals/client-work-studio.webp"
      alt="Three real client websites presented as polished browser mockups."
      caption={
        <>
          The work spans different industries and audiences, but each product
          still has to turn design intent into reliable production behavior.
        </>
      }
      legend={[
        { label: "Design", note: "clear hierarchy and brand expression" },
        { label: "Build", note: "responsive production implementation" },
        { label: "Operate", note: "content and workflows teams can own" },
      ]}
    />
  );
}
