import"./iframe-4FfVh-9Z.js";import{t as e}from"./react-CCQ14-Tr.js";import{t}from"./jsx-runtime-B4XW9ad0.js";import{fn as n}from"./dist-Ccw_2GY5.js";import{t as r}from"./utils-DXalBF5w.js";import{t as i}from"./createLucideIcon-BDlJh4aW.js";import{t as a}from"./arrow-up-right-CPKEX3wd.js";import{i as o,n as s,r as c,t as l}from"./contact-contracts-C1lpEsi3.js";import{t as u}from"./ask-aj-status-CmS0yRWT.js";import{t as d}from"./ask-aj-answer-content-mxeKWrcR.js";import{n as f,t as p}from"./button-CLiQ9REN.js";var m=i(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]);e();var h=t(),g=f(`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,{variants:{variant:{default:`border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80`,secondary:`border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80`,destructive:`border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80`,outline:`text-foreground`}},defaultVariants:{variant:`default`}});function _({className:e,variant:t,...n}){return(0,h.jsx)(`div`,{className:r(g({variant:t}),e),...n})}_.__docgenInfo={description:``,methods:[],displayName:`Badge`,composes:[`VariantProps`]};function v({question:e,messages:t,statusLabel:n,isStreaming:r,error:i,completionAnnouncement:l,reducedMotion:f,starterQuestions:g,contactForm:v,questionInputRef:y,onQuestionChange:b,onStarterQuestion:x,onSubmit:S,onStop:C}){function w(t){t.nativeEvent.isComposing||t.shiftKey||t.key!==`Enter`||(t.preventDefault(),!(r||!e.trim())&&t.currentTarget.form?.requestSubmit())}return(0,h.jsxs)(`main`,{className:`grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start`,children:[(0,h.jsxs)(`section`,{className:`min-w-0 border border-border bg-card`,"aria-labelledby":`ask-aj-heading`,children:[(0,h.jsxs)(`div`,{className:`border-b border-border p-5`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-gold`,children:`Ask A.J.`}),(0,h.jsx)(`h1`,{id:`ask-aj-heading`,className:`mt-2 font-display text-3xl leading-tight text-ink md:text-5xl`,children:`Explore my AI product engineering.`})]}),(0,h.jsx)(_,{variant:`outline`,className:`mono uppercase tracking-[0.18em]`,children:`MVP`})]}),(0,h.jsx)(`p`,{className:`mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base`,children:`Ask A.J. is a live AI agent built to help recruiters and engineering leaders understand my work: AI-powered product systems, React and TypeScript architecture, frontend platforms, enterprise design systems, accessibility, and production tradeoffs.`})]}),(0,h.jsxs)(`div`,{className:`space-y-5 p-5`,children:[t.length===0&&(0,h.jsx)(`div`,{className:`grid gap-3 md:grid-cols-3`,children:g.map(e=>(0,h.jsx)(`button`,{type:`button`,onClick:()=>x(e),className:`min-h-11 border border-border bg-surface p-4 text-left text-sm leading-relaxed transition-colors hover:border-gold hover:bg-background`,children:e},e))}),(0,h.jsx)(`div`,{className:`min-h-[15rem] space-y-4 pb-36`,"aria-busy":r,children:t.map(e=>(0,h.jsxs)(`article`,{className:e.role===`user`?`ml-auto max-w-2xl bg-ink p-4 text-background`:`max-w-3xl border border-border bg-background p-5`,children:[(0,h.jsx)(`p`,{className:`mono mb-2 text-[10px] uppercase tracking-[0.22em] opacity-70`,children:e.role===`user`?`You`:`Ask A.J.`}),(0,h.jsx)(d,{content:e.content,isPending:e.role===`assistant`&&r}),e.sources.length>0&&(0,h.jsxs)(`div`,{className:`mt-5 border-t border-border pt-4`,children:[(0,h.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.22em] text-gold`,children:`Sources`}),(0,h.jsx)(`ul`,{className:`mt-3 space-y-3`,children:e.sources.map(e=>(0,h.jsx)(`li`,{children:(0,h.jsxs)(`a`,{href:e.url,className:`group block border border-border bg-surface p-4 transition-colors hover:border-gold hover:bg-background`,children:[(0,h.jsxs)(`span`,{className:`flex items-center justify-between gap-4`,children:[(0,h.jsx)(`span`,{className:`font-semibold text-ink`,children:e.title}),(0,h.jsx)(a,{className:`h-4 w-4 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5`})]}),e.section&&(0,h.jsxs)(`span`,{className:`mono mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground`,children:[e.section,` · `,e.sourceId]}),(0,h.jsx)(`span`,{className:`mt-2 block text-sm leading-relaxed text-muted-foreground`,children:e.excerpt})]})},e.id))})]})]},e.id))}),i&&(0,h.jsx)(`div`,{className:`border border-oxblood/40 bg-oxblood/5 p-4 text-sm text-oxblood`,role:`alert`,children:i}),(0,h.jsxs)(`form`,{onSubmit:S,className:`sticky bottom-0 z-10 -mx-5 border-y border-border bg-card/95 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur`,children:[(0,h.jsx)(`label`,{className:`sr-only`,htmlFor:`ask-aj-question`,children:`Ask A.J. a question`}),(0,h.jsx)(c,{id:`ask-aj-question`,ref:y,value:e,onChange:e=>b(e.target.value),onKeyDown:w,placeholder:`Ask how AJ builds AI-powered products, reliable AI interfaces, or frontend platforms...`,className:`min-h-24 resize-none bg-background`,disabled:r}),(0,h.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-center justify-between gap-3`,children:[(0,h.jsxs)(`div`,{className:`space-y-1`,children:[(0,h.jsx)(u,{label:n,isLoading:r,reducedMotion:f}),(0,h.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Press Enter to send · Shift + Enter for a new line`})]}),(0,h.jsxs)(`div`,{className:`flex gap-2`,children:[r&&(0,h.jsxs)(p,{type:`button`,variant:`outline`,className:`min-h-11`,onClick:C,children:[(0,h.jsx)(m,{className:`h-4 w-4`}),`Stop`]}),(0,h.jsxs)(p,{type:`submit`,className:`min-h-11`,disabled:r||!e.trim(),children:[(0,h.jsx)(o,{className:`h-4 w-4`}),`Ask`]})]})]})]}),(0,h.jsx)(`p`,{className:`sr-only`,"aria-live":`polite`,children:l})]})]}),(0,h.jsxs)(`aside`,{className:`h-fit border border-border bg-surface p-5 lg:sticky lg:top-24`,children:[(0,h.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-gold`,children:`Recruiter contact`}),(0,h.jsx)(`h2`,{className:`mt-3 font-display text-2xl text-ink`,children:`Want to talk with AJ?`}),(0,h.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-muted-foreground`,children:`Reach out with your role, company, and what you would like to discuss.`}),(0,h.jsx)(s,{...v})]})]})}v.__docgenInfo={description:``,methods:[],displayName:`AskAjExperience`,props:{question:{required:!0,tsType:{name:`string`},description:``},messages:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  role: "user" | "assistant";
  content: string;
  sources: AskAjCitation[];
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`role`,value:{name:`union`,raw:`"user" | "assistant"`,elements:[{name:`literal`,value:`"user"`},{name:`literal`,value:`"assistant"`}],required:!0}},{key:`content`,value:{name:`string`,required:!0}},{key:`sources`,value:{name:`Array`,elements:[{name:`z.infer`,elements:[{name:`askAjCitationSchema`}],raw:`z.infer<typeof askAjCitationSchema>`}],raw:`AskAjCitation[]`,required:!0}}]}}],raw:`AskAjMessage[]`},description:``},statusLabel:{required:!0,tsType:{name:`string`},description:``},isStreaming:{required:!0,tsType:{name:`boolean`},description:``},error:{required:!1,tsType:{name:`string`},description:``},completionAnnouncement:{required:!1,tsType:{name:`string`},description:``},reducedMotion:{required:!1,tsType:{name:`boolean`},description:``},starterQuestions:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},contactForm:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  values: ContactFormValues;
  errors: ContactFieldErrors;
  state: "idle" | "submitting" | "success" | "error";
  error?: string;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}`,signature:{properties:[{key:`values`,value:{name:`z.infer`,elements:[{name:`contactFormValuesSchema`}],raw:`z.infer<typeof contactFormValuesSchema>`,required:!0}},{key:`errors`,value:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`z.infer`,elements:[{name:`contactFormValuesSchema`}],raw:`z.infer<typeof contactFormValuesSchema>`,required:!0},{name:`string`}],raw:`Record<keyof ContactFormValues, string>`}],raw:`Partial<
  Record<keyof ContactFormValues, string>
>`,required:!0}},{key:`state`,value:{name:`union`,raw:`"idle" | "submitting" | "success" | "error"`,elements:[{name:`literal`,value:`"idle"`},{name:`literal`,value:`"submitting"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"error"`}],required:!0}},{key:`error`,value:{name:`string`,required:!1}},{key:`onChange`,value:{name:`signature`,type:`function`,raw:`(field: keyof ContactFormValues, value: string) => void`,signature:{arguments:[{type:{name:`z.infer`,elements:[{name:`contactFormValuesSchema`}],raw:`z.infer<typeof contactFormValuesSchema>`,required:!0},name:`field`},{type:{name:`string`},name:`value`}],return:{name:`void`}},required:!0}},{key:`onSubmit`,value:{name:`signature`,type:`function`,raw:`(event: FormEvent<HTMLFormElement>) => void`,signature:{arguments:[{type:{name:`FormEvent`,elements:[{name:`HTMLFormElement`}],raw:`FormEvent<HTMLFormElement>`},name:`event`}],return:{name:`void`}},required:!0}}]}},description:``},questionInputRef:{required:!1,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`HTMLTextAreaElement | null`,elements:[{name:`HTMLTextAreaElement`},{name:`null`}]}],raw:`RefObject<HTMLTextAreaElement | null>`},description:``},onQuestionChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(question: string) => void`,signature:{arguments:[{type:{name:`string`},name:`question`}],return:{name:`void`}}},description:``},onStarterQuestion:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(question: string) => void`,signature:{arguments:[{type:{name:`string`},name:`question`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: FormEvent<HTMLFormElement>) => void`,signature:{arguments:[{type:{name:`FormEvent`,elements:[{name:`HTMLFormElement`}],raw:`FormEvent<HTMLFormElement>`},name:`event`}],return:{name:`void`}}},description:``},onStop:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}};var y=[{id:`ask-aj-work`,sourceId:`work-case:ask-aj`,title:`Ask A.J. AI Portfolio Agent`,url:`/work/ask-aj`,section:`Work`,excerpt:`A production-minded AI portfolio agent with server-side provider calls, streamed application events, and recruiter-facing interaction design.`},{id:`architecture-principles`,sourceId:`page:engineering`,title:`Engineering Principles`,url:`/engineering`,section:`Engineering`,excerpt:`Framing problems, weighing tradeoffs, naming risk, and using AI as leverage while keeping human judgment responsible for final decisions.`},{id:`platform-thinking`,sourceId:`page:systems`,title:`Systems and Platform Thinking`,url:`/systems`,section:`Architecture`,excerpt:`Reusable architecture, component contracts, accessibility, documentation, and developer experience treated as product infrastructure.`}],b=`Ask A.J. is a live AI portfolio agent built by AJ Barnett to show how he approaches production-minded AI application engineering. It uses a TanStack Start server boundary for model calls, streams application-owned NDJSON events to the browser, and keeps provider keys out of client code.

The implementation emphasizes small product-shaped decisions:
- recruiter-facing answers instead of a generic chatbot frame
- visible streaming and graceful waiting states
- clear boundaries between implemented behavior and future retrieval work
- supporting evidence from AJ's enterprise design-system and frontend platform background`,x={title:`Features/Ask A.J./Experience`,component:v,parameters:{layout:`fullscreen`},argTypes:{question:{control:`text`},messages:{control:`object`},statusLabel:{control:`text`},isStreaming:{control:`boolean`},error:{control:`text`},reducedMotion:{control:`boolean`},starterQuestions:{control:`object`},onQuestionChange:{action:`question changed`},onStarterQuestion:{action:`starter selected`},onSubmit:{action:`question submitted`},onStop:{action:`stream stopped`}},args:{question:``,messages:[],statusLabel:`Ready`,isStreaming:!1,reducedMotion:!1,starterQuestions:[`What is Ask A.J. and how was it engineered?`,`How does AJ build AI-powered products?`,`How does AJ think about design systems?`],onQuestionChange:n(),onStarterQuestion:n(),onSubmit:n(),onStop:n(),contactForm:{values:l,errors:{},state:`idle`,onChange:n(),onSubmit:n()}}},S=(e,t=[])=>({id:`assistant-engineering`,role:`assistant`,content:e,sources:t}),C={},w={args:{question:`How would AJ approach an AI feature rollout?

Please cover architecture, reliability, and user trust.`,statusLabel:`Ready`}},T={args:{question:`What is Ask A.J. and how was it engineered?`,isStreaming:!0,statusLabel:`Thinking through AJ's experience...`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},S(``)]}},E={args:{question:`How does AJ build AI-powered products?`,isStreaming:!0,statusLabel:`Reviewing the relevant details...`,messages:[{id:`user-ai-products`,role:`user`,content:`How does AJ build AI-powered products?`,sources:[]},S(``)]}},D={args:{question:`What is Ask A.J. and how was it engineered?`,isStreaming:!0,statusLabel:`Writing a concise response...`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},S(`Ask A.J. is a live AI portfolio agent built with a server-owned streaming boundary`)]}},O={args:{question:`This draft stays disabled while Ask A.J. is responding.`,isStreaming:!0,statusLabel:`Writing a concise response...`,messages:[{id:`user-streaming-lock`,role:`user`,content:`How does AJ keep AI interfaces reliable?`,sources:[]},S(`AJ starts with server-owned boundaries, explicit stream events, and failure states users can understand.`)]}},k={args:{question:`How does AJ build AI-powered products?`,isStreaming:!0,reducedMotion:!0,statusLabel:`Almost ready...`,messages:[{id:`user-ai-products`,role:`user`,content:`How does AJ build AI-powered products?`,sources:[]},S(``)]}},A={args:{statusLabel:`Ready for a follow-up`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},S(b,y)]}},j={args:{question:`How does that connect to AJ's enterprise experience?`,statusLabel:`Ready for a follow-up`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},S(b,y),{id:`user-follow-up`,role:`user`,content:`How does that connect to AJ's enterprise experience?`,sources:[]},S(`The same instincts show up across AI products and platform engineering: define stable contracts, make behavior visible, protect users from internal complexity, and design the system so teams can build on it safely. For Ask A.J., that means server-owned provider boundaries, streamed application events, honest fallback states, and a UI that makes the system's limits clear.`,[y[0]])]}},M={args:{question:`What is Ask A.J. and how was it engineered?`,error:`Ask A.J. received an invalid stream event. Please try again.`}},N={args:{statusLabel:`Stopped`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},S(`Ask A.J. is a live AI portfolio agent built by AJ Barnett.`)]}},P={args:{statusLabel:`Ready for a follow-up`,messages:[{id:`user-long`,role:`user`,content:`How does AJ approach a design-system architecture decision that affects several product teams?`,sources:[]},S(`${b}\n\nAJ would begin by framing the decision as a product and adoption problem, not simply a component-library choice. The useful questions are who owns the system, which teams need to migrate, what contracts must stay stable, and where the system has to permit flexibility without making every team invent a new convention. That makes tradeoffs visible before implementation creates a costly path dependency.`,[{...y[0],excerpt:`A deliberately long source excerpt demonstrates wrapping, stable spacing, and readable citation cards when source material contains detail about adoption, governance, accessibility requirements, component contracts, design tokens, cross-team migration planning, and the everyday engineering decisions that turn a library into dependable shared infrastructure.`},...y.slice(1)])]},render:e=>(0,h.jsx)(`div`,{className:`max-w-sm`,children:(0,h.jsx)(v,{...e})})},F={args:{question:`How did AJ approach adoption across product teams?`,statusLabel:`Ready for a follow-up`,messages:[{id:`user-mobile`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},S(`${b}\n\n${b}`,y)]},render:e=>(0,h.jsx)(`div`,{className:`h-[42rem] max-w-sm overflow-hidden border border-border bg-background`,children:(0,h.jsx)(`div`,{className:`h-full overflow-y-auto pb-32`,children:(0,h.jsx)(v,{...e})})})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How would AJ approach an AI feature rollout?\\n\\nPlease cover architecture, reliability, and user trust.",
    statusLabel: "Ready"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    question: "What is Ask A.J. and how was it engineered?",
    isStreaming: true,
    statusLabel: "Thinking through AJ's experience...",
    messages: [{
      id: "user-ask-aj",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage("")]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How does AJ build AI-powered products?",
    isStreaming: true,
    statusLabel: "Reviewing the relevant details...",
    messages: [{
      id: "user-ai-products",
      role: "user",
      content: "How does AJ build AI-powered products?",
      sources: []
    }, assistantMessage("")]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    question: "What is Ask A.J. and how was it engineered?",
    isStreaming: true,
    statusLabel: "Writing a concise response...",
    messages: [{
      id: "user-ask-aj",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage("Ask A.J. is a live AI portfolio agent built with a server-owned streaming boundary")]
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    question: "This draft stays disabled while Ask A.J. is responding.",
    isStreaming: true,
    statusLabel: "Writing a concise response...",
    messages: [{
      id: "user-streaming-lock",
      role: "user",
      content: "How does AJ keep AI interfaces reliable?",
      sources: []
    }, assistantMessage("AJ starts with server-owned boundaries, explicit stream events, and failure states users can understand.")]
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How does AJ build AI-powered products?",
    isStreaming: true,
    reducedMotion: true,
    statusLabel: "Almost ready...",
    messages: [{
      id: "user-ai-products",
      role: "user",
      content: "How does AJ build AI-powered products?",
      sources: []
    }, assistantMessage("")]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-ask-aj",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage(completedAnswer, sources)]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How does that connect to AJ's enterprise experience?",
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-ask-aj",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage(completedAnswer, sources), {
      id: "user-follow-up",
      role: "user",
      content: "How does that connect to AJ's enterprise experience?",
      sources: []
    }, assistantMessage("The same instincts show up across AI products and platform engineering: define stable contracts, make behavior visible, protect users from internal complexity, and design the system so teams can build on it safely. For Ask A.J., that means server-owned provider boundaries, streamed application events, honest fallback states, and a UI that makes the system's limits clear.", [sources[0]])]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    question: "What is Ask A.J. and how was it engineered?",
    error: "Ask A.J. received an invalid stream event. Please try again."
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    statusLabel: "Stopped",
    messages: [{
      id: "user-ask-aj",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage("Ask A.J. is a live AI portfolio agent built by AJ Barnett.")]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-long",
      role: "user",
      content: "How does AJ approach a design-system architecture decision that affects several product teams?",
      sources: []
    }, assistantMessage(\`\${completedAnswer}\\n\\nAJ would begin by framing the decision as a product and adoption problem, not simply a component-library choice. The useful questions are who owns the system, which teams need to migrate, what contracts must stay stable, and where the system has to permit flexibility without making every team invent a new convention. That makes tradeoffs visible before implementation creates a costly path dependency.\`, [{
      ...sources[0],
      excerpt: "A deliberately long source excerpt demonstrates wrapping, stable spacing, and readable citation cards when source material contains detail about adoption, governance, accessibility requirements, component contracts, design tokens, cross-team migration planning, and the everyday engineering decisions that turn a library into dependable shared infrastructure."
    }, ...sources.slice(1)])]
  },
  render: args => <div className="max-w-sm">
      <AskAjExperience {...args} />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How did AJ approach adoption across product teams?",
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-mobile",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage(\`\${completedAnswer}\\n\\n\${completedAnswer}\`, sources)]
  },
  render: args => <div className="h-[42rem] max-w-sm overflow-hidden border border-border bg-background">
      <div className="h-full overflow-y-auto pb-32">
        <AskAjExperience {...args} />
      </div>
    </div>
}`,...F.parameters?.docs?.source}}};var I=[`Empty`,`MultilineDraft`,`InitialThinking`,`RotatingWaiting`,`Writing`,`StreamingLocksComposer`,`ReducedMotion`,`CompletedWithSources`,`FollowUpConversation`,`Error`,`Aborted`,`LongContent`,`MobileStickyComposer`];export{N as Aborted,A as CompletedWithSources,C as Empty,M as Error,j as FollowUpConversation,T as InitialThinking,P as LongContent,F as MobileStickyComposer,w as MultilineDraft,k as ReducedMotion,E as RotatingWaiting,O as StreamingLocksComposer,D as Writing,I as __namedExportsOrder,x as default};