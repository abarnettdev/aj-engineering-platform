import { CompositeFigure } from "@/components/composites/figure";
export function AiLifecycle() {
  return (
    <CompositeFigure
      eyebrow="Fig. 04 · AI Product"
      title="Interface · Stream · Safeguards"
      image="/visuals/ask-aj-studio.webp"
      alt="The real Ask A.J. interface displayed in a polished dark coral laptop scene."
      caption={
        <>
          A useful AI product combines a clear interface with server-side model
          access, streamed feedback, citations, and graceful fallbacks.
        </>
      }
      legend={[
        { label: "Interface", note: "a focused question-and-answer flow" },
        { label: "Stream", note: "progress the user can see" },
        { label: "Safeguards", note: "validation, limits, and fallbacks" },
      ]}
    />
  );
}
