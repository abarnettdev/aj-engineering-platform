import { CompositeFigure } from "@/components/composites/figure";
export function AiLifecycle() {
  return (
    <CompositeFigure
      eyebrow="Fig. 04 · AI Product"
      title="Interface · Stream · Safeguards"
      image="/visuals/ai-lifecycle-studio.webp"
      alt="The Ask A.J. lifecycle from question through validation and streamed citation to graceful fallback."
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
