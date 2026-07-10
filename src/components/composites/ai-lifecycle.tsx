import { CompositeFigure } from "@/components/composites/figure";
import image from "@/assets/composite-ai-lifecycle.jpg";

/**
 * AiLifecycle, editorial figure of the four-phase AI-assisted flow.
 *
 * Explore → Draft → Review → Ship, rendered as four physical objects
 * on plinths connected by a single continuous gold ribbon.
 */
export function AiLifecycle() {
  return (
    <CompositeFigure
      eyebrow="Fig. 04 · AI Lifecycle"
      title="Explore · Draft · Review · Ship"
      image={image}
      alt="Four isometric objects on plinths, a crystal, an unfolded blueprint, a stacked pair of panels, and a solid block, connected by a continuous gold ribbon."
      caption={
        <>
          AI is a co-author, never the signature. Each phase leaves an
          artifact a human can inspect, revise, and stand behind.
        </>
      }
      legend={[
        { label: "Explore", note: "find the shape of the problem" },
        { label: "Draft", note: "write the first honest attempt" },
        { label: "Review", note: "cut, sharpen, verify" },
        { label: "Ship", note: "sign the work and move on" },
      ]}
    />
  );
}
