import { CompositeFigure } from "@/components/composites/figure";
import image from "@/assets/composite-mental-models.jpg";

/**
 * MentalModels — editorial triptych of three ways to think about a system.
 *
 * A single 3D illustration containing three sculptural diagrams:
 * hierarchy (stepped pyramid), core-and-orbit (concentric rings), and
 * branching graph (node tree).
 */
export function MentalModels() {
  return (
    <CompositeFigure
      eyebrow="Fig. 05 · Mental Models"
      title="Hierarchy · Orbit · Graph"
      image={image}
      alt="Three isometric sculptural diagrams on plinths: a stepped pyramid, concentric rings around a gold sphere, and a branching node tree."
      caption={
        <>
          A system rarely fits one metaphor. The useful move is holding
          three at once and choosing the one that answers the question in
          front of you.
        </>
      }
      legend={[
        { label: "Hierarchy", note: "who reports to what" },
        { label: "Orbit", note: "what circles the core" },
        { label: "Graph", note: "how signal actually travels" },
      ]}
    />
  );
}
