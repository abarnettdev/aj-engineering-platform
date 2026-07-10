import { CompositeFigure } from "@/components/composites/figure";
import image from "@/assets/composite-component-anatomy.jpg";

/**
 * ComponentAnatomy, editorial figure for the Design System page.
 *
 * An exploded-view 3D illustration of a Card compound component: the
 * four slots (header, title, body, footer) rendered as floating slabs
 * linked by gold connector wires. Replaces the previous SVG-based
 * anatomy diagram.
 */
export function ComponentAnatomy() {
  return (
    <CompositeFigure
      eyebrow="Fig. 02 · Component Anatomy"
      title="Card · compound slots"
      image={image}
      alt="Exploded isometric view of a card component, split into four floating slabs linked by thin gold connector wires."
      caption={
        <>
          A card is not a monolith. It is a contract between slots, each
          replaceable, each optional, each aligned to the same grid.
        </>
      }
      legend={[
        { label: "CardHeader", note: "eyebrow, controls, chapter marks" },
        { label: "CardTitle", note: "the primary label" },
        { label: "CardContent", note: "body prose, lists, media" },
        { label: "CardFooter", note: "trailing actions" },
      ]}
    />
  );
}
