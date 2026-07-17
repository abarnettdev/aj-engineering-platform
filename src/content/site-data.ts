export type TimelineEntry = {
  year: string;
  chapter: string;
  role: string;
  tech: string[];
  changed: string;
  learned: string;
  bridge: string;
  /** The engineering lesson forged in this era, the through-line to today. */
  forged?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2001",
    chapter: "First Website",
    role: "Curious teenager",
    tech: ["GeoCities", "HTML"],
    changed:
      "The problem: I wanted something that didn't exist yet, so I built it. A page on the open web, hand-typed, no permission needed.",
    learned:
      "The call was to publish before I felt ready. That instinct, ship, then improve, never left.",
    forged:
      "Curiosity as an operating system. The compounding advantage that outlasts every framework.",
    bridge: "The web became the medium. Craft became the next problem.",
  },
  {
    year: "2006–2010",
    chapter: "Creative Technologist",
    role: "Design + motion",
    tech: [
      "Dreamweaver",
      "Flash",
      "ActionScript",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Cinema 4D",
    ],
    changed:
      "The problem: interfaces felt lifeless. Static comps couldn't answer how an experience should feel in motion.",
    learned:
      "The call was to treat design and code as one discipline, every pixel, easing curve, and frame a decision, not a default.",
    forged:
      "Taste as a skill. The belief that rhythm, weight, and restraint are engineering choices, not decoration.",
    bridge:
      "Craft opened the door to client work, and the harder problem of owning outcomes end-to-end.",
  },
  {
    year: "2010–2015",
    chapter: "Founder, RealiDreams",
    role: "Independent studio",
    tech: ["Branding", "Web", "Motion", "3D", "Print"],
    changed:
      "The problem: clients didn't need a deliverable, they needed a result. Nobody was coming to bridge the gap between what they asked for and what would actually work.",
    learned:
      "The call was to start with the business outcome and reason backward to the artifact. Scope, price, and say no on my own signature.",
    forged:
      "Ownership. Product thinking begins with the client's business, not the file you're about to open.",
    bridge:
      "Running the studio revealed the ceiling of solo work, and the leverage of shipping inside a team.",
  },
  {
    year: "2015–2016",
    chapter: "Caldwell & Kerr",
    role: "Designer → Senior Frontend Web Developer",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Coda"],
    changed:
      "The problem: automotive campaigns shipped weekly, with real ad spend and real deadlines. Perfection was a luxury nobody paid for.",
    learned:
      "The call was to trade artisan pace for repeatable velocity, templates, patterns, and disciplined tradeoffs a team could inherit.",
    forged:
      "Attention as a system. Visual hierarchy and conversion literacy every interface engineer needs before they touch a component library.",
    bridge:
      "Agency cadence prepared me for owning long-lived codebases at CMS scale.",
  },
  {
    year: "2016–2020",
    chapter: "Priority Marketing",
    role: "Web Developer, CMS specialist",
    tech: [
      "PHP",
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "Apache",
      "GSAP",
      "SEO",
    ],
    changed:
      "The problem: fifty-plus sites, each with its own editor, each needing to survive years of hand-off, plugin churn, and content the client hadn't written yet.",
    learned:
      "The call was to build for the second engineer and the third editor, conventions, guardrails, and predictable seams over clever one-offs.",
    forged:
      "Systems built for other humans. The seed of every design system I've touched since.",
    bridge:
      "Volume and accountability set the stage for product engineering with real state.",
  },
  {
    year: "2020–2022",
    chapter: "Midland Trust",
    role: "Software Engineer, Fintech",
    tech: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Sequelize",
      "Express",
      "Ionic",
      "Salesforce",
    ],
    changed:
      "The problem: client, payment, and pro portals had to move real money and hold real trust, across auth boundaries, regulated workflows, and Salesforce integrations that could not be papered over on the client.",
    learned:
      "The call was to design the data shape and API contracts first, then the interface. Every state, error, and edge case is a promise to the user.",
    forged:
      "Regulated-industry rigor. Full-stack judgment, database, service, UI, treated as one decision.",
    bridge:
      "End-to-end product engineering readied me for systems that multiply other teams.",
  },
  {
    year: "2022–2026",
    chapter: "CDW, Legato Design System",
    role: "Senior Software Engineer I / Technical Lead",
    tech: [
      "React",
      "TypeScript",
      "Stencil",
      "Web Components",
      "Storybook",
      "Nx",
      "Design Tokens",
      "A11y",
    ],
    changed:
      "The problem: ten-plus product teams, fifteen-plus enterprise apps, each drifting toward its own vocabulary. Every diverging button was a tax on every future decision.",
    learned:
      "The call was to treat the system as a product with its own users, engineers, designers, PMs, and lower ambiguity as a measurable outcome. Tokens, accessibility, and docs as first-class API surface.",
    forged:
      "Leverage at scale. When the system answers a question once, ten teams stop asking it. Judgment compounds.",
    bridge:
      "Fortune 500 depth plus AI-assisted workflows shaped what I'm building next.",
  },
  {
    year: "2026",
    chapter: "Now",
    role: "Lead Sr. Software Engineer / Staff Engineer roles",
    tech: ["MCP", "AI workflows", "React", "TypeScript"],
    changed:
      "The problem worth solving now: full product lifecycle, architecture, backend seams, product surface, accelerated by AI without ceding judgment to it.",
    learned:
      "The call is to treat AI as leverage, not authorship. Widen the surface I can hold; keep the last read before ship human.",
    forged:
      "Engineering judgment as the axis. Technologies expire. Problems, and the taste to choose which ones, do not.",
    bridge: "The next chapter is being written, by design.",
  },
];

export type WorkCase = {
  slug: string;
  company: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  metrics: [string, string][];
  challenge?: string;
  approach?: string[];
  impact?: string;
  lessons?: string;
  discipline?: string;
};

export const workCases: WorkCase[] = [
  {
    slug: "ask-aj",
    company: "AJ Barnett",
    title: "Ask A.J. AI Portfolio Agent",
    period: "2026",
    role: "Product Engineer",
    summary:
      "Designed and engineered a recruiter-facing AI agent with streamed responses, server-side OpenAI integration, request safeguards, fallback models, cached answers, and graceful degradation.",
    tags: ["AI", "OpenAI", "React", "TypeScript", "TanStack Start", "NDJSON"],
    metrics: [
      ["1", "live AI agent"],
      ["5", "availability layers"],
      ["0", "client-side secrets"],
    ],
    discipline: "AI application engineering",
    challenge:
      "The portfolio needed to show AI product engineering as a working system, not just a claim in copy.",
    approach: [
      "Kept provider calls, secrets, validation, retries, and fallback behavior server-side.",
      "Streamed application-owned NDJSON events so the browser never depends on provider-specific event names.",
      "Added request validation, origin checks, local rate limiting, duplicate request protection, token caps, and graceful fallback answers.",
      "Structured the knowledge source so future retrieval can build on curated portfolio facts.",
    ],
    impact:
      "Ask A.J. gives recruiters a direct way to understand AJ's work while demonstrating production-minded AI interface design.",
    lessons:
      "An AI product is the whole system around the model: context, trust boundaries, latency, failure behavior, and cost.",
  },
  {
    slug: "cdw-legato",
    company: "CDW",
    title: "Legato Design System",
    period: "2022, 2026",
    role: "Senior Software Engineer I / Technical Lead",
    summary:
      "Evolved an enterprise design system supporting 10+ product teams and 15+ applications across the CDW portfolio.",
    tags: ["React", "TypeScript", "Stencil", "Storybook", "Nx", "Tokens"],
    metrics: [
      ["170+", "UI assets"],
      ["20+", "engineers supported"],
      ["10+", "product teams"],
    ],
    discipline: "Design Systems at Fortune 500 scale",
    challenge:
      "A shared UI foundation had to serve dozens of engineers, product teams, and product surfaces without becoming the bottleneck that every team quietly worked around.",
    approach: [
      "Treat tokens as a language, not a stylesheet, semantic layers that translate design intent into code contracts.",
      "Ship primitives + composition slots instead of prop-heavy configurations.",
      "Publish accessibility and motion decisions as part of the component contract, not as a follow-up ticket.",
      "Make Storybook the single source of truth, docs, states, and interaction tests live next to the component.",
    ],
    impact:
      "The system moved from a component library that teams debated to shared infrastructure they built on. Reviews shifted from styling arguments to product decisions.",
    lessons:
      "Systems win when they lower ambiguity. Documentation is a product. The best API is the one that lets a caller write intent, not configuration.",
  },
  {
    slug: "midland-trust",
    company: "Midland Trust",
    title: "Fintech Portals, Client, Payment & Pro",
    period: "2020, 2022",
    role: "Software Engineer",
    summary:
      "Owned workflow design and production React/TypeScript delivery for regulated IRA and banking-related portals.",
    tags: ["React", "TypeScript", "PostgreSQL", "Express", "Ionic"],
    metrics: [
      ["3", "portals shipped"],
      ["Annual", "banking training"],
      ["1", "team, end-to-end"],
    ],
    discipline: "Product engineering in a regulated industry",
    challenge:
      "Self-serve IRA and payment workflows in a regulated industry, where every state, error, and edge case is a promise to the user and a compliance decision.",
    approach: [
      "Designed workflows in Balsamiq, mocked in Photoshop, then implemented the same flow end-to-end in React/TypeScript.",
      "Modeled the domain in PostgreSQL and Sequelize so the UI never lied about state.",
      "Treated loading, empty, error, and edge states as first-class UI, not exception handling.",
      "Shipped web and Ionic mobile from a single product intent.",
    ],
    impact:
      "Three portals, client, payment, and pro, running the daily operations of a regulated trust company, owned by a small team that could reason about the whole system.",
    lessons:
      "Financial software is a trust product. Every UI decision is a compliance decision. The path from workflow diagram to production code is the actual job.",
  },
  {
    slug: "priority-marketing",
    company: "Priority Marketing",
    title: "50+ Custom WordPress Websites",
    period: "2016, 2020",
    role: "Web Developer",
    summary:
      "Delivered 50+ bespoke WordPress builds: custom themes, responsive design, SEO, GSAP animation, and hosted deployment.",
    tags: ["PHP", "WordPress", "GSAP", "SEO", "Apache"],
    metrics: [
      ["50+", "sites shipped"],
      ["100%", "custom themes"],
      ["Editor-first", "authoring"],
    ],
    discipline: "Systems built for other humans",
    challenge:
      "Fifty-plus client sites, each a real business with real editors, all shipped at agency cadence without turning into fifty maintenance liabilities.",
    approach: [
      "Custom themes hand-built around the editor's workflow, not the developer's convenience.",
      "GSAP used surgically, motion that supported the story, never decoration for its own sake.",
      "SEO and performance baked into the template layer so editors couldn't accidentally regress them.",
      "Deployment discipline: the boring parts done reliably, every time.",
    ],
    impact:
      "A body of sites that stayed maintainable long after handoff, proof that volume and craft aren't at odds when the templates carry the discipline.",
    lessons:
      "Great CMS work is 20% templates and 80% empathy for the editor. This is where I first understood that systems are built for other humans.",
  },
  {
    slug: "affinitiv",
    company: "Caldwell & Kerr",
    title: "Automotive Campaigns, The Origin of the Product Instinct",
    period: "2015, 2016",
    role: "Junior Designer → Senior Frontend",
    summary:
      "Progressed from design production into senior frontend at Caldwell & Kerr (formerly Moore & Scarry, later Affinitiv), high-cadence automotive advertising where I learned visual hierarchy, conversion, typography, and how to earn a user's attention. This is where the engineering instinct was forged.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Hierarchy", "Conversion"],
    metrics: [
      ["4", "role progressions"],
      ["Agency", "cadence"],
      ["Origin", "of product thinking"],
    ],
    discipline: "Where the product instinct was forged",
    challenge:
      "High-volume automotive campaigns where every pixel was asking the user for a decision, and every deadline was tomorrow.",
    approach: [
      "Learned visual hierarchy by shipping under pressure, the eye follows weight before words.",
      "Owned the frontend end of campaigns: HTML, CSS, JavaScript, and enough PHP to keep the pipeline moving.",
      "Progressed through four roles by treating each brief as a product, not a task.",
    ],
    impact:
      "The foundational literacy every interface engineer needs, hierarchy, conversion, typography, attention, earned inside real deadlines with real accountability.",
    lessons:
      "Craft is a discipline. Typography is the quiet architecture of trust. User attention is the scarcest resource in every product I've built since.",
  },
  {
    slug: "realidreams",
    company: "RealiDreams",
    title: "Founder, Independent Studio",
    period: "2010, 2015",
    role: "Founder & Creative Director",
    summary:
      "Ran a studio delivering websites, branding, logos, print, motion, and 3D logo animation.",
    tags: ["Brand", "Web", "Motion", "3D"],
    metrics: [
      ["5", "years"],
      ["Full", "ownership"],
      ["Studio", "operations"],
    ],
    discipline: "Ownership, end to end",
    challenge:
      "Running a studio meant every discipline, brand, web, motion, 3D, print, plus the parts nobody teaches: scoping, delivery, and getting paid.",
    approach: [
      "Treated every client engagement as a product with a beginning, middle, and shipped end.",
      "Built brand systems and websites as one coherent artifact, not separate deliverables.",
      "Owned scoping, delivery, and support, the full lifecycle, not just the fun part.",
    ],
    impact:
      "Five years of shipping real work for real clients, with no one to escalate to. The habits from this era shape how I show up for product teams today.",
    lessons:
      "Nobody is coming to save the ship. You are the ship. Product thinking starts with the client's business, not the artifact.",
  },
];

export const projects = [
  {
    slug: "enterprise-design-system",
    title: "Enterprise Design System",
    tagline: "React + Stencil Web Components at Fortune 500 scale.",
    tags: ["Design Systems", "React", "TypeScript", "Stencil", "Storybook"],
  },
  {
    slug: "fintech-client-portal",
    title: "Fintech Client Portal",
    tagline: "Self-serve IRA portal with regulated workflows.",
    tags: ["React", "TypeScript", "PostgreSQL", "Fintech"],
  },
  {
    slug: "payment-portal",
    title: "Payment Portal",
    tagline: "Secure payment experience across web and mobile.",
    tags: ["React", "Ionic", "Payments"],
  },
  {
    slug: "pro-portal",
    title: "Pro Portal",
    tagline: "Advisor-facing operations portal with elevated permissions.",
    tags: ["React", "TypeScript", "RBAC"],
  },
  {
    slug: "wordpress-client-sites",
    title: "WordPress Client Websites",
    tagline: "50+ bespoke themes, editor-friendly and performant.",
    tags: ["PHP", "WordPress", "SEO", "GSAP"],
  },
  {
    slug: "branding-motion",
    title: "Branding & Motion Graphics",
    tagline: "Studio-era brand systems, logos, motion, and 3D.",
    tags: ["Brand", "Motion", "3D", "Print"],
  },
  {
    slug: "ai-assisted-workflows",
    title: "AI-Assisted Engineering Workflows",
    tagline: "AI workflows woven into architecture and delivery.",
    tags: ["AI", "MCP", "DX", "Architecture"],
  },
];

export const techEvolution = [
  "GeoCities",
  "Dreamweaver",
  "Flash",
  "ActionScript",
  "Photoshop",
  "Illustrator",
  "Cinema 4D",
  "After Effects",
  "PHP",
  "WordPress",
  "Apache",
  "ASP.NET MVC",
  "C#",
  "SQL",
  "React",
  "TypeScript",
  "Node",
  "Express",
  "PostgreSQL",
  "Storybook",
  "Nx",
  "Design Systems",
  "AI-Assisted Engineering",
];

export const metrics = [
  { value: "20+", label: "years shipping" },
  { value: "4", label: "years Fortune 500" },
  { value: "170+", label: "UI assets" },
  { value: "10+", label: "product teams" },
  { value: "15+", label: "enterprise apps" },
  { value: "50+", label: "custom sites" },
];

export type Article = {
  slug: string;
  title: string;
  tag: string;
  read: string;
  date: string;
  dek: string;
  toc: { id: string; label: string }[];
  body: {
    kind: "h2" | "p" | "quote" | "code" | "callout";
    text: string;
    lang?: string;
    id?: string;
  }[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "tokens-are-a-language",
    title: "Why tokens are a language, not a stylesheet",
    tag: "Design Systems",
    read: "6 min",
    date: "May 2026",
    dek: "How design tokens become the contract between designers, engineers, and product, and why that framing changes everything.",
    toc: [
      { id: "contract", label: "The contract" },
      { id: "grammar", label: "A grammar for teams" },
      { id: "scale", label: "Why it scales" },
      { id: "close", label: "Closing" },
    ],
    body: [
      {
        kind: "p",
        text: "A stylesheet describes appearance. A token describes intent. That single distinction is the difference between a design system that scales an organization and one that becomes a museum of past decisions.",
      },
      { kind: "h2", id: "contract", text: "The contract" },
      {
        kind: "p",
        text: "When a token is named color.action.primary, three teams now share a promise: design uses it in Figma, engineering imports it in code, and product reasons about it in specs. Nobody is inventing new grammar in a hallway.",
      },
      {
        kind: "quote",
        text: "Tokens aren't about consistency. They're about communication.",
      },
      { kind: "h2", id: "grammar", text: "A grammar for teams" },
      {
        kind: "p",
        text: "The best token architectures read like a language: nouns (color, space, radius), adjectives (subtle, strong, muted), and roles (surface, action, feedback). Once the grammar exists, individual decisions get faster because the space of choices is smaller.",
      },
      {
        kind: "code",
        lang: "ts",
        text: "// tokens as intent, not appearance\nexport const semantic = {\n  color: {\n    surface: { base: 'color.neutral.0', raised: 'color.neutral.50' },\n    action:  { primary: 'color.brand.600', danger: 'color.red.600' },\n    text:    { primary: 'color.neutral.900', muted: 'color.neutral.600' },\n  },\n} as const;",
      },
      { kind: "h2", id: "scale", text: "Why it scales" },
      {
        kind: "p",
        text: "Every team that adopts the token layer inherits the review process behind it, accessibility contrast, dark-mode parity, brand alignment. A single semantic change ripples across every product surface without a coordination meeting.",
      },
      {
        kind: "callout",
        text: "If your design system needs a change-management email, you don't have a system. You have a library.",
      },
      { kind: "h2", id: "close", text: "Closing" },
      {
        kind: "p",
        text: "Treat tokens as a language and the system stops being a burden on individual teams. It becomes shared infrastructure, quiet, durable, and multiplying every decision downstream.",
      },
    ],
    related: ["composition-over-configuration", "ai-in-the-engineering-loop"],
  },
  {
    slug: "composition-over-configuration",
    title: "Composition over configuration in component APIs",
    tag: "Frontend Architecture",
    read: "8 min",
    date: "April 2026",
    dek: "The tradeoffs of prop-heavy vs. composable component design, with examples from real production systems.",
    toc: [
      { id: "problem", label: "The prop explosion" },
      { id: "shape", label: "The shape that scales" },
      { id: "when", label: "When configuration wins" },
    ],
    body: [
      {
        kind: "p",
        text: "Every enterprise component eventually reaches a fork: add another boolean prop, or expose a slot and let the caller decide. The choice defines whether the component is a product or a prison.",
      },
      { kind: "h2", id: "problem", text: "The prop explosion" },
      {
        kind: "p",
        text: "A Card with 32 props is not flexible, it's brittle. Every consumer's edge case becomes another prop, another test matrix cell, another line in the migration guide.",
      },
      {
        kind: "code",
        lang: "tsx",
        text: '// configuration, the caller pleads with the component\n<Card\n  title="…" subtitle="…" icon={<X/>} iconPosition="start"\n  actionLabel="…" actionVariant="outline" showDivider hasFooter\n  footerAlign="end" densityCompact\n/>',
      },
      { kind: "h2", id: "shape", text: "The shape that scales" },
      {
        kind: "code",
        lang: "tsx",
        text: '// composition, the caller writes intent\n<Card>\n  <Card.Header>\n    <Card.Title>…</Card.Title>\n  </Card.Header>\n  <Card.Body>…</Card.Body>\n  <Card.Footer align="end">\n    <Button variant="outline">…</Button>\n  </Card.Footer>\n</Card>',
      },
      {
        kind: "quote",
        text: "Fewer props. Sharper primitives. Let composition carry the weight.",
      },
      { kind: "h2", id: "when", text: "When configuration wins" },
      {
        kind: "p",
        text: "Small, opinionated components (Badge, Avatar) benefit from a tight prop surface. The rule of thumb: if the component contains more than one meaningful region, expose slots. If it's a single atom, ship props.",
      },
    ],
    related: ["tokens-are-a-language", "accessibility-as-product"],
  },
  {
    slug: "ai-in-the-engineering-loop",
    title: "AI in the engineering loop",
    tag: "AI-Assisted",
    read: "7 min",
    date: "March 2026",
    dek: "Where AI accelerates delivery, and where it must stay out of the way. A practitioner's take.",
    toc: [
      { id: "loop", label: "The loop" },
      { id: "judgment", label: "Where judgment lives" },
      { id: "practice", label: "Daily practice" },
    ],
    body: [
      {
        kind: "p",
        text: "The best AI-assisted engineers I've worked with don't use AI to replace thinking. They use it to widen the surface of thinking they can hold at once.",
      },
      { kind: "h2", id: "loop", text: "The loop" },
      {
        kind: "p",
        text: "Explore → Draft → Review → Refine → Ship. AI is most valuable in Explore and Draft. It is dangerous in Review unless a human owns the last mile.",
      },
      { kind: "callout", text: "AI accelerates me. It does not replace me." },
      { kind: "h2", id: "judgment", text: "Where judgment lives" },
      {
        kind: "p",
        text: "Judgment lives in the framing of the work, the shape of the review, and the decision to keep or discard. That is engineering. The typing is not.",
      },
      { kind: "h2", id: "practice", text: "Daily practice" },
      {
        kind: "p",
        text: "Repository context, model-assisted exploration, in-editor completion, and design-to-code review each have a role. The role changes with the task, but the final judgment stays with the engineer.",
      },
    ],
    related: ["tokens-are-a-language", "accessibility-as-product"],
  },
  {
    slug: "accessibility-as-product",
    title: "Accessibility as a product feature",
    tag: "Accessibility",
    read: "5 min",
    date: "February 2026",
    dek: "Rewriting the internal narrative from 'compliance' to 'competitive advantage.'",
    toc: [
      { id: "reframe", label: "The reframe" },
      { id: "quality", label: "Quality by another name" },
    ],
    body: [
      {
        kind: "p",
        text: "When a team talks about accessibility as compliance, it becomes a ticket at the end of a sprint. When they talk about it as product quality, it becomes the default.",
      },
      { kind: "h2", id: "reframe", text: "The reframe" },
      {
        kind: "p",
        text: "WCAG 2.1 AA and Section 508 are the floor, not the ceiling. Keyboard flow, focus visibility, semantic HTML, reduced motion, and screen-reader parity are product decisions that raise the ceiling for every user.",
      },
      {
        kind: "quote",
        text: "Accessibility isn't a checklist. It's the shape of a mature product.",
      },
      { kind: "h2", id: "quality", text: "Quality by another name" },
      {
        kind: "p",
        text: "Every accessibility investment I've made at enterprise scale has paid back somewhere else: better test coverage, clearer component APIs, faster onboarding for new engineers. Quality compounds.",
      },
    ],
    related: ["tokens-are-a-language", "composition-over-configuration"],
  },
  {
    slug: "flash-to-react",
    title: "From Flash to React, a survivor's field notes",
    tag: "Career",
    read: "10 min",
    date: "January 2026",
    dek: "Lessons from two decades of technology upheaval, and what the next decade will demand.",
    toc: [
      { id: "cycles", label: "The cycles" },
      { id: "constants", label: "The constants" },
      { id: "next", label: "What's next" },
    ],
    body: [
      {
        kind: "p",
        text: "I've watched Flash die, jQuery peak, Backbone rise, Angular pivot, React arrive, TypeScript conquer, and AI arrive on the doorstep. The framework changes. The mindset doesn't.",
      },
      { kind: "h2", id: "cycles", text: "The cycles" },
      {
        kind: "p",
        text: "Every cycle promises to replace what came before. Very few actually do. Most inherit the same problems, state, layout, motion, accessibility, and re-express them in new syntax.",
      },
      { kind: "h2", id: "constants", text: "The constants" },
      {
        kind: "p",
        text: "Curiosity. Ownership. Communication. The engineers who thrive across cycles are the ones who invest in these three, and treat the framework of the moment as a rental.",
      },
      {
        kind: "callout",
        text: "The framework will change. The mindset won't.",
      },
      { kind: "h2", id: "next", text: "What's next" },
      {
        kind: "p",
        text: "AI-assisted engineering is not the next framework. It's the next layer of the loop, a peer, a co-author, a reviewer. Treat it as engineering practice, not as magic.",
      },
    ],
    related: ["ai-in-the-engineering-loop", "accessibility-as-product"],
  },
];
