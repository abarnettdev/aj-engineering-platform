import { createFileRoute } from "@tanstack/react-router";
import { AskAjInterface } from "@/features/ask-aj/ask-aj-interface";

export const Route = createFileRoute("/ask-aj")({
  head: () => ({
    meta: [
      { title: "Ask A.J. · AI Engineering Representative" },
      {
        name: "description",
        content:
          "Ask AJ Barnett about enterprise design systems, React and TypeScript architecture, accessibility, developer experience, mentoring, and AI-assisted workflows.",
      },
      {
        property: "og:title",
        content: "Ask A.J. · AI Engineering Representative",
      },
      {
        property: "og:description",
        content:
          "A recruiter-facing way to explore AJ Barnett's engineering experience and projects.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AskAjPage,
});

function AskAjPage() {
  return (
    <div className="border-b border-border/70 bg-background">
      <div className="container-page py-10 md:py-14">
        <AskAjInterface />
      </div>
    </div>
  );
}
