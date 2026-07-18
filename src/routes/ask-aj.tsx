import { createFileRoute } from "@tanstack/react-router";
import { AskAjInterface } from "@/features/ask-aj/ask-aj-interface";

export const Route = createFileRoute("/ask-aj")({
  head: () => ({
    meta: [
      { title: "Ask A.J. · AI Engineering Representative" },
      {
        name: "description",
        content:
          "Ask A.J. is a recruiter-facing AI agent built by AJ Barnett to explain his AI product engineering, frontend platform, React, TypeScript, and enterprise systems work.",
      },
      {
        property: "og:title",
        content: "Ask A.J. · AI Agent Built by AJ Barnett",
      },
      {
        property: "og:description",
        content:
          "A live AI portfolio agent demonstrating production-minded AI product engineering.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AskAjPage,
});

function AskAjPage() {
  return (
    <div className="h-[calc(100dvh-4rem)] overflow-hidden border-b border-border/70 bg-background">
      <div className="container-page h-full py-3 md:py-5">
        <AskAjInterface />
      </div>
    </div>
  );
}
