import { CompositeFigure } from "@/components/composites/figure";
import image from "@/assets/composite-blueprint.jpg";

/**
 * BlueprintDiagram — editorial figure of the engineering system graph.
 *
 * A 3D isometric network of graphite nodes connected by thin gold
 * arrows, evoking the shape of a real production architecture without
 * naming any specific product.
 */
export function BlueprintDiagram() {
  return (
    <CompositeFigure
      eyebrow="Fig. 03 · Blueprint"
      title="Engineering graph"
      image={image}
      alt="Isometric architecture diagram: graphite nodes on small plinths connected by thin gold arrows forming a directed graph."
      caption={
        <>
          Every product is a directed graph. Some nodes matter more than
          others; the craft is knowing which, and drawing the edges honestly.
        </>
      }
      legend={[
        { label: "Nodes", note: "modules, services, surfaces" },
        { label: "Edges", note: "contracts, not wishes" },
        { label: "Clusters", note: "where the team already agrees" },
      ]}
    />
  );
}
