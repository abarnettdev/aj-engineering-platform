import { CompositeFigure } from "@/components/composites/figure";
import image from "@/assets/composite-systems-map.jpg";

/**
 * SystemsMap, editorial figure for the Engineering page.
 *
 * Renders the "Inputs → Engineering Judgment → Production" thesis as a
 * premium 3D isometric illustration wrapped in the shared composite
 * frame. No hover isolation, no interaction gates; the image is the
 * argument, the caption anchors it.
 */
export function SystemsMap() {
  return (
    <CompositeFigure
      eyebrow="Fig. 01 · Systems Map"
      title="Inputs · Judgment · Production"
      image={image}
      alt="Isometric diagram: many input primitives on the left converge into a central obelisk labeled engineering judgment, then fan out to production surfaces on the right."
      caption={
        <>
          Engineering judgment is the hinge, where raw inputs (constraints,
          research, prior art, taste) are weighed and shaped into the
          artifacts a team can actually ship.
        </>
      }
      legend={[
        { label: "Inputs", note: "constraints, research, prior art" },
        { label: "Judgment", note: "the hinge, what to build, refuse, defer" },
        { label: "Production", note: "the artifacts a team can ship" },
      ]}
    />
  );
}
