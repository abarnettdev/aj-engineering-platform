import { askAjKnowledge } from "@/content/knowledge/ask-aj";

type CachedAnswer = {
  id: string;
  answer: string;
  exactQuestions: string[];
  keywords: string[];
};

const cachedAnswers: CachedAnswer[] = [
  {
    id: "about-aj",
    exactQuestions: ["tell me about aj", "who is aj"],
    keywords: ["about", "aj"],
    answer:
      "AJ Barnett is a software engineer building AI-powered products, frontend platforms, and scalable developer systems. He combines React, TypeScript, enterprise platform experience, accessibility, architecture judgment, and production-minded AI engineering.",
  },
  {
    id: "ask-aj",
    exactQuestions: [
      "what is ask aj",
      "what is ask a j",
      "who built ask aj",
      "is ask aj an ai agent",
    ],
    keywords: ["ask", "agent"],
    answer:
      "Ask A.J. is a recruiter-facing AI agent designed and engineered by AJ Barnett. It is a live portfolio artifact that demonstrates server-side OpenAI integration, NDJSON streaming, request validation, fallback models, cached answers, circuit breaking, cost controls, and graceful degradation.",
  },
  {
    id: "ai-product-engineering",
    exactQuestions: [
      "how does aj build ai-powered products",
      "what ai application engineering capabilities does aj have",
    ],
    keywords: ["ai", "engineering"],
    answer:
      "AJ builds AI-powered products by treating the model as one part of a product system: server-owned context, strict request validation, streamed UI, timeout and retry strategy, model fallback, cost controls, origin protection, structured logging, and clear separation between implemented features and roadmap ideas.",
  },
  {
    id: "cdw-legato",
    exactQuestions: ["what did aj build at cdw", "what did aj do at cdw"],
    keywords: ["cdw", "legato"],
    answer:
      "At CDW, AJ worked on the Legato Design System as a Senior Software Engineer I / Technical Lead. Legato supported more than 10 product teams and more than 15 applications across the CDW portfolio. His work included React, TypeScript, Stencil Web Components, Storybook, Nx, design tokens, and accessibility.",
  },
  {
    id: "design-systems",
    exactQuestions: [
      "explain aj's design-system experience",
      "explain aj's design system experience",
      "how does aj think about design systems",
    ],
    keywords: ["design", "system"],
    answer:
      "AJ treats design systems as shared product infrastructure. His Legato work combined component architecture, design tokens, accessibility, Storybook documentation, and frontend platform thinking so product teams could spend less energy resolving ambiguity and more energy building product experiences.",
  },
  {
    id: "hire-aj",
    exactQuestions: ["why should we hire aj", "why hire aj"],
    keywords: ["hire", "aj"],
    answer:
      "AJ is strongest where product engineering, frontend architecture, design systems, and AI-assisted workflows meet. He brings senior judgment around tradeoffs, risk, system boundaries, accessibility, and team leverage, with hands-on React and TypeScript experience across enterprise contexts.",
  },
  {
    id: "technologies",
    exactQuestions: [
      "what technologies does aj use",
      "what is aj's tech stack",
    ],
    keywords: ["technologies", "tech"],
    answer:
      "AJ's portfolio highlights React, TypeScript, design systems, Stencil Web Components, Storybook, Nx, Tailwind CSS, accessibility practices, CI/CD thinking, and AI-assisted engineering workflows.",
  },
  {
    id: "leadership",
    exactQuestions: ["what leadership experience does aj have"],
    keywords: ["leadership", "lead"],
    answer:
      "AJ's leadership shows up in technical direction, design-system stewardship, architecture decisions, tradeoff framing, and helping teams use shared infrastructure effectively. At CDW, his Legato role included Senior Software Engineer I / Technical Lead responsibilities.",
  },
  {
    id: "legato-impact",
    exactQuestions: ["what measurable impact did legato have"],
    keywords: ["impact", "legato"],
    answer:
      "The portfolio-approved Legato impact is its scale: the system supported more than 10 product teams and more than 15 applications across the CDW portfolio. Ask A.J. should not invent additional metrics beyond that approved evidence.",
  },
  {
    id: "frontend-full-stack",
    exactQuestions: ["is aj frontend or full stack"],
    keywords: ["frontend", "full", "stack"],
    answer:
      "AJ is primarily a frontend and systems-oriented engineer with deep React, TypeScript, design-system, accessibility, and frontend-platform experience. His work also touches architecture, CI/CD, AI workflows, and product infrastructure.",
  },
  {
    id: "target-roles",
    exactQuestions: ["what roles is aj targeting"],
    keywords: ["roles", "targeting"],
    answer:
      "AJ is well aligned with senior frontend, frontend platform, design systems, staff-level product engineering, and AI-assisted engineering roles where React, TypeScript, architecture, accessibility, and cross-team leverage matter.",
  },
  {
    id: "contact",
    exactQuestions: ["how can i contact aj"],
    keywords: ["contact", "aj"],
    answer:
      "You can contact AJ through the recruiter contact form on this Ask A.J. page or use the portfolio navigation to review more of his work before reaching out.",
  },
];

const staticFallbackAnswer = `Ask A.J. is temporarily unable to generate a personalized response right now. AJ is a software engineer building AI-powered products, frontend platforms, and scalable developer systems, with deep React, TypeScript, accessibility, and enterprise design-system experience.\n\nYou can still ask focused questions like:\n- What is Ask A.J. and how was it engineered?\n- How does AJ build AI-powered products?\n- What has AJ built at enterprise scale?\n- What AI application engineering capabilities does AJ have?\n\nYou can also use the contact form or portfolio navigation to learn more about AJ's work.`;

export function getCachedAskAjAnswer(question: string) {
  const normalized = normalizeQuestion(question);
  const exactMatch = cachedAnswers.find((item) =>
    item.exactQuestions.includes(normalized),
  );

  if (exactMatch) return exactMatch;

  return cachedAnswers.find((item) =>
    item.keywords.every((keyword) => normalized.includes(keyword)),
  );
}

export function getStaticAskAjFallbackAnswer() {
  return staticFallbackAnswer;
}

export async function* streamFallbackAnswer(
  answer: string,
  signal: AbortSignal,
): AsyncGenerator<string> {
  const chunks = answer.match(/.{1,80}(\s|$)/g) ?? [answer];

  for (const chunk of chunks) {
    if (signal.aborted) return;
    yield chunk;
    await wait(20, signal);
  }
}

function normalizeQuestion(question: string) {
  return question
    .toLowerCase()
    .replace(/[^\w\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wait(delayMs: number, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    if (signal.aborted) {
      resolve();
      return;
    }

    const timeout = setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve();
    }, delayMs);

    const onAbort = () => {
      clearTimeout(timeout);
      resolve();
    };

    signal.addEventListener("abort", onAbort, { once: true });
  });
}
