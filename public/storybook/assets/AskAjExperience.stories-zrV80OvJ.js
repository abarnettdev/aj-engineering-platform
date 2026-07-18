import"./iframe-BA_dk4VP.js";import{t as e}from"./react-DwUShDbr.js";import{t}from"./jsx-runtime-BBNe6-Ph.js";import{fn as n}from"./dist-C6xiV65B.js";import{t as r}from"./utils-DXalBF5w.js";import{t as i}from"./createLucideIcon-B9rAmjSd.js";import{t as a}from"./arrow-up-right-DLbhqvBI.js";import{i as o,n as s,r as c,t as l}from"./contact-contracts-BHTCf6-Y.js";import{t as u}from"./ask-aj-status-C-l0se_x.js";import{t as d}from"./ask-aj-answer-content-DpyhO_jv.js";import{t as f}from"./dist-CmDi9KJf.js";import{t as p}from"./button-CYpBuK43.js";var m=i(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]);e();var h=t(),g=f(`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,{variants:{variant:{default:`border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80`,secondary:`border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80`,destructive:`border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80`,outline:`text-foreground`}},defaultVariants:{variant:`default`}});function _({className:e,variant:t,...n}){return(0,h.jsx)(`div`,{className:r(g({variant:t}),e),...n})}_.__docgenInfo={description:``,methods:[],displayName:`Badge`,composes:[`VariantProps`]};function v({question:e,messages:t,statusLabel:n,isStreaming:i,error:l,completionAnnouncement:f,reducedMotion:g,starterQuestions:v,contactForm:y,questionInputRef:b,conversationScrollRef:x,conversationEndRef:S,onQuestionChange:C,onStarterQuestion:w,onSubmit:T,onStop:E,onConversationScroll:D}){function O(t){t.nativeEvent.isComposing||t.shiftKey||t.key!==`Enter`||(t.preventDefault(),!(i||!e.trim())&&t.currentTarget.form?.requestSubmit())}let k=v.slice(0,4),A=v.slice(0,3),j=t.length>0;return(0,h.jsxs)(`main`,{className:`grid h-full min-h-0 gap-4 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-stretch`,children:[(0,h.jsxs)(`section`,{className:`grid min-h-0 min-w-0 grid-rows-[auto_minmax(0,1fr)_auto] border border-border bg-card`,"aria-labelledby":`ask-aj-heading`,children:[(0,h.jsxs)(`div`,{className:r(`border-b border-border transition-[padding] duration-200 motion-reduce:transition-none`,j?`p-3 md:p-4`:`p-4 md:p-5`),children:[(0,h.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-gold`,children:`Ask A.J.`}),(0,h.jsx)(`h1`,{id:`ask-aj-heading`,className:r(`mt-1.5 font-display leading-tight text-ink transition-[font-size,line-height] duration-200 motion-reduce:transition-none`,j?`text-2xl md:text-3xl`:`text-3xl md:text-4xl`),children:`Ask about how I build.`})]}),(0,h.jsx)(_,{variant:`outline`,className:`mono max-w-[9rem] text-right text-[10px] uppercase tracking-[0.16em] sm:max-w-none`,children:`Production AI Agent`})]}),(0,h.jsx)(`p`,{className:r(`mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground transition-opacity duration-200 motion-reduce:transition-none md:text-base`,j?`hidden`:`block`),children:`Ask A.J. is a production agent I designed and engineered so recruiters and engineering leaders can explore how I build software, architect systems, and solve complex problems.`})]}),(0,h.jsxs)(`div`,{ref:x,onScroll:D,className:`min-h-0 overflow-y-auto overscroll-contain scroll-smooth p-4 [scroll-padding-bottom:2rem] md:p-5`,"aria-busy":i,children:[t.length===0&&(0,h.jsxs)(`div`,{className:`space-y-3 transition-opacity duration-200 motion-reduce:transition-none`,children:[(0,h.jsx)(`div`,{className:`border border-border bg-surface p-3 md:p-4`,children:(0,h.jsx)(`p`,{className:`text-sm leading-relaxed text-foreground/85`,children:`Start with architecture, AI products, frontend platforms, design systems, accessibility, or engineering philosophy.`})}),(0,h.jsx)(`div`,{className:`flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4`,"aria-label":`Starter questions`,children:k.map(e=>(0,h.jsx)(`button`,{type:`button`,onClick:()=>w(e),className:`min-h-11 w-[15rem] shrink-0 border border-border bg-surface p-3 text-left text-sm leading-relaxed transition-colors hover:border-gold hover:bg-background md:w-auto`,children:e},e))})]}),(0,h.jsxs)(`div`,{className:`space-y-4 pb-6`,children:[t.map(e=>(0,h.jsxs)(`article`,{className:e.role===`user`?`ml-auto max-w-2xl bg-ink p-4 text-background`:`max-w-3xl border border-border bg-background p-5`,children:[(0,h.jsx)(`p`,{className:`mono mb-2 text-[10px] uppercase tracking-[0.22em] opacity-70`,children:e.role===`user`?`You`:`Ask A.J.`}),(0,h.jsx)(d,{content:e.content,isPending:e.role===`assistant`&&i}),e.sources.length>0&&(0,h.jsxs)(`div`,{className:`mt-5 border-t border-border pt-4`,children:[(0,h.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.22em] text-gold`,children:`Sources`}),(0,h.jsx)(`ul`,{className:`mt-3 space-y-3`,children:e.sources.map(e=>(0,h.jsx)(`li`,{children:(0,h.jsxs)(`a`,{href:e.url,className:`group block border border-border bg-surface p-4 transition-colors hover:border-gold hover:bg-background`,children:[(0,h.jsxs)(`span`,{className:`flex items-center justify-between gap-4`,children:[(0,h.jsx)(`span`,{className:`font-semibold text-ink`,children:e.title}),(0,h.jsx)(a,{className:`h-4 w-4 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5`})]}),e.section&&(0,h.jsxs)(`span`,{className:`mono mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground`,children:[e.section,` · `,e.sourceId]}),(0,h.jsx)(`span`,{className:`mt-2 block text-sm leading-relaxed text-muted-foreground`,children:e.excerpt})]})},e.id))})]})]},e.id)),j&&!i&&(0,h.jsx)(`div`,{className:`flex gap-2 overflow-x-auto pb-2 pt-1`,"aria-label":`Follow-up suggestions`,children:A.map(e=>(0,h.jsx)(`button`,{type:`button`,onClick:()=>w(e),className:`min-h-10 w-[13rem] shrink-0 border border-border bg-surface px-3 py-2 text-left text-xs leading-relaxed text-muted-foreground transition-colors hover:border-gold hover:bg-background hover:text-ink`,children:e},e))}),(0,h.jsx)(`div`,{ref:S,"aria-hidden":`true`})]}),l&&(0,h.jsx)(`div`,{className:`border border-oxblood/40 bg-oxblood/5 p-4 text-sm text-oxblood`,role:`alert`,children:l})]}),(0,h.jsxs)(`form`,{onSubmit:T,className:`border-t border-border bg-card px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:px-5 md:pb-[max(1rem,env(safe-area-inset-bottom))]`,children:[(0,h.jsx)(`label`,{className:`sr-only`,htmlFor:`ask-aj-question`,children:`Ask A.J. a question`}),(0,h.jsx)(c,{id:`ask-aj-question`,ref:b,value:e,rows:2,onChange:e=>C(e.target.value),onKeyDown:O,placeholder:`Ask about AI products, architecture, or frontend platforms...`,className:`max-h-32 min-h-16 resize-none overflow-y-auto bg-background leading-relaxed`,disabled:i}),(0,h.jsxs)(`div`,{className:`mt-3 grid min-h-11 grid-cols-[minmax(0,1fr)_auto] items-center gap-3`,children:[(0,h.jsxs)(`div`,{className:`min-w-0 space-y-1`,children:[(0,h.jsx)(u,{label:n,isLoading:i,reducedMotion:g}),(0,h.jsx)(`p`,{className:`min-h-4 text-xs leading-none text-muted-foreground`,children:`Press Enter to send · Shift + Enter for a new line`})]}),(0,h.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,h.jsxs)(p,{type:`button`,variant:`outline`,className:`min-h-11 w-20 ${i?``:`invisible`}`,onClick:E,disabled:!i,"aria-hidden":!i,tabIndex:i?void 0:-1,children:[(0,h.jsx)(m,{className:`h-4 w-4`}),`Stop`]}),(0,h.jsxs)(p,{type:`submit`,className:`min-h-11 w-20`,disabled:i||!e.trim(),children:[(0,h.jsx)(o,{className:`h-4 w-4`}),`Ask`]})]})]})]}),(0,h.jsx)(`p`,{className:`sr-only`,"aria-live":`polite`,children:f})]}),(0,h.jsxs)(`aside`,{className:`hidden min-h-0 overflow-y-auto overscroll-contain border border-border bg-surface p-5 lg:block`,children:[(0,h.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-gold`,children:`Recruiter contact`}),(0,h.jsx)(`h2`,{className:`mt-3 font-display text-2xl text-ink`,children:`Want to talk with AJ?`}),(0,h.jsx)(`p`,{className:`mt-3 text-sm leading-relaxed text-muted-foreground`,children:`Reach out with your role, company, and what you would like to discuss.`}),(0,h.jsx)(s,{...y})]})]})}v.__docgenInfo={description:``,methods:[],displayName:`AskAjExperience`,props:{question:{required:!0,tsType:{name:`string`},description:``},messages:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
>`,required:!0}},{key:`state`,value:{name:`union`,raw:`"idle" | "submitting" | "success" | "error"`,elements:[{name:`literal`,value:`"idle"`},{name:`literal`,value:`"submitting"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"error"`}],required:!0}},{key:`error`,value:{name:`string`,required:!1}},{key:`onChange`,value:{name:`signature`,type:`function`,raw:`(field: keyof ContactFormValues, value: string) => void`,signature:{arguments:[{type:{name:`z.infer`,elements:[{name:`contactFormValuesSchema`}],raw:`z.infer<typeof contactFormValuesSchema>`,required:!0},name:`field`},{type:{name:`string`},name:`value`}],return:{name:`void`}},required:!0}},{key:`onSubmit`,value:{name:`signature`,type:`function`,raw:`(event: FormEvent<HTMLFormElement>) => void`,signature:{arguments:[{type:{name:`FormEvent`,elements:[{name:`HTMLFormElement`}],raw:`FormEvent<HTMLFormElement>`},name:`event`}],return:{name:`void`}},required:!0}}]}},description:``},questionInputRef:{required:!1,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`HTMLTextAreaElement | null`,elements:[{name:`HTMLTextAreaElement`},{name:`null`}]}],raw:`RefObject<HTMLTextAreaElement | null>`},description:``},conversationScrollRef:{required:!1,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`HTMLDivElement | null`,elements:[{name:`HTMLDivElement`},{name:`null`}]}],raw:`RefObject<HTMLDivElement | null>`},description:``},conversationEndRef:{required:!1,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`HTMLDivElement | null`,elements:[{name:`HTMLDivElement`},{name:`null`}]}],raw:`RefObject<HTMLDivElement | null>`},description:``},onQuestionChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(question: string) => void`,signature:{arguments:[{type:{name:`string`},name:`question`}],return:{name:`void`}}},description:``},onStarterQuestion:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(question: string) => void`,signature:{arguments:[{type:{name:`string`},name:`question`}],return:{name:`void`}}},description:``},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: FormEvent<HTMLFormElement>) => void`,signature:{arguments:[{type:{name:`FormEvent`,elements:[{name:`HTMLFormElement`}],raw:`FormEvent<HTMLFormElement>`},name:`event`}],return:{name:`void`}}},description:``},onStop:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onConversationScroll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: UIEvent<HTMLDivElement>) => void`,signature:{arguments:[{type:{name:`UIEvent`,elements:[{name:`HTMLDivElement`}],raw:`UIEvent<HTMLDivElement>`},name:`event`}],return:{name:`void`}}},description:``}}};var y=[{id:`ask-aj-work`,sourceId:`work-case:ask-aj`,title:`Ask A.J. AI Portfolio Agent`,url:`/work/ask-aj`,section:`Work`,excerpt:`A production-minded AI portfolio agent with server-side provider calls, streamed application events, and recruiter-facing interaction design.`},{id:`architecture-principles`,sourceId:`page:engineering`,title:`Engineering Principles`,url:`/engineering`,section:`Engineering`,excerpt:`Framing problems, weighing tradeoffs, naming risk, and using AI as leverage while keeping human judgment responsible for final decisions.`},{id:`platform-thinking`,sourceId:`page:systems`,title:`Systems and Platform Thinking`,url:`/systems`,section:`Architecture`,excerpt:`Reusable architecture, component contracts, accessibility, documentation, and developer experience treated as product infrastructure.`}],b=`Ask A.J. is a live AI portfolio agent built by AJ Barnett to show how he approaches production-minded AI application engineering. It uses a TanStack Start server boundary for model calls, streams application-owned NDJSON events to the browser, and keeps provider keys out of client code.

The implementation emphasizes small product-shaped decisions:
- recruiter-facing answers instead of a generic chatbot frame
- visible streaming and graceful waiting states
- clear boundaries between implemented behavior and future retrieval work
- supporting evidence from AJ's enterprise design-system and frontend platform background`,x={title:`Features/Ask A.J./Experience`,component:v,parameters:{layout:`fullscreen`},argTypes:{question:{control:`text`},messages:{control:`object`},statusLabel:{control:`text`},isStreaming:{control:`boolean`},error:{control:`text`},reducedMotion:{control:`boolean`},starterQuestions:{control:`object`},onQuestionChange:{action:`question changed`},onStarterQuestion:{action:`starter selected`},onSubmit:{action:`question submitted`},onStop:{action:`stream stopped`}},args:{question:``,messages:[],statusLabel:`Ready`,isStreaming:!1,reducedMotion:!1,starterQuestions:[`What is Ask A.J. and how was it engineered?`,`How does AJ build AI-powered products?`,`How does AJ think about design systems?`],onQuestionChange:n(),onStarterQuestion:n(),onSubmit:n(),onStop:n(),contactForm:{values:l,errors:{},state:`idle`,onChange:n(),onSubmit:n()}}};function S({children:e,width:t,height:n,label:r}){return(0,h.jsxs)(`div`,{className:`bg-background p-3`,children:[(0,h.jsx)(`p`,{className:`mono mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground`,children:r}),(0,h.jsx)(`div`,{className:`overflow-hidden border border-border bg-background`,style:{width:t,height:n},children:e})]})}var C=(e,t=[])=>({id:`assistant-engineering`,role:`assistant`,content:e,sources:t}),w={},T={args:{question:`How would AJ approach an AI feature rollout?

Please cover architecture, reliability, and user trust.`,statusLabel:`Ready`}},E={args:{question:`What is Ask A.J. and how was it engineered?`,isStreaming:!0,statusLabel:`Thinking through AJ's experience...`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},C(``)]}},D={args:{question:`How does AJ build AI-powered products?`,isStreaming:!0,statusLabel:`Reviewing the relevant details...`,messages:[{id:`user-ai-products`,role:`user`,content:`How does AJ build AI-powered products?`,sources:[]},C(``)]}},O={args:{question:`What is Ask A.J. and how was it engineered?`,isStreaming:!0,statusLabel:`Writing a concise response...`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},C(`Ask A.J. is a live AI portfolio agent built with a server-owned streaming boundary`)]}},k={args:{question:`This draft stays disabled while Ask A.J. is responding.`,isStreaming:!0,statusLabel:`Writing a concise response...`,messages:[{id:`user-streaming-lock`,role:`user`,content:`How does AJ keep AI interfaces reliable?`,sources:[]},C(`AJ starts with server-owned boundaries, explicit stream events, and failure states users can understand.`)]}},A={args:{question:`How does AJ build AI-powered products?`,isStreaming:!0,reducedMotion:!0,statusLabel:`Almost ready...`,messages:[{id:`user-ai-products`,role:`user`,content:`How does AJ build AI-powered products?`,sources:[]},C(``)]}},j={args:{statusLabel:`Ready for a follow-up`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},C(b,y)]}},M={args:{question:`How does that connect to AJ's enterprise experience?`,statusLabel:`Ready for a follow-up`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},C(b,y),{id:`user-follow-up`,role:`user`,content:`How does that connect to AJ's enterprise experience?`,sources:[]},C(`The same instincts show up across AI products and platform engineering: define stable contracts, make behavior visible, protect users from internal complexity, and design the system so teams can build on it safely. For Ask A.J., that means server-owned provider boundaries, streamed application events, honest fallback states, and a UI that makes the system's limits clear.`,[y[0]])]}},N={args:{question:`What is Ask A.J. and how was it engineered?`,error:`Ask A.J. received an invalid stream event. Please try again.`}},P={args:{statusLabel:`Stopped`,messages:[{id:`user-ask-aj`,role:`user`,content:`What is Ask A.J. and how was it engineered?`,sources:[]},C(`Ask A.J. is a live AI portfolio agent built by AJ Barnett.`)]}},F={args:{statusLabel:`Ready for a follow-up`,messages:[{id:`user-long`,role:`user`,content:`How does AJ approach a design-system architecture decision that affects several product teams?`,sources:[]},C(`${b}\n\nAJ would begin by framing the decision as a product and adoption problem, not simply a component-library choice. The useful questions are who owns the system, which teams need to migrate, what contracts must stay stable, and where the system has to permit flexibility without making every team invent a new convention. That makes tradeoffs visible before implementation creates a costly path dependency.`,[{...y[0],excerpt:`A deliberately long source excerpt demonstrates wrapping, stable spacing, and readable citation cards when source material contains detail about adoption, governance, accessibility requirements, component contracts, design tokens, cross-team migration planning, and the everyday engineering decisions that turn a library into dependable shared infrastructure.`},...y.slice(1)])]},render:e=>(0,h.jsx)(`div`,{className:`max-w-sm`,children:(0,h.jsx)(v,{...e})})},I={render:e=>(0,h.jsx)(S,{width:`320px`,height:`640px`,label:`320px mobile empty`,children:(0,h.jsx)(v,{...e})})},L={args:{question:``,statusLabel:`Ready for a follow-up`,messages:[{id:`user-mobile-active`,role:`user`,content:`How does AJ think about reliable AI interfaces?`,sources:[]},C(`AJ treats reliability as part of the product experience: make waiting states honest, keep provider details server-side, stream small application events, and design clear recovery paths when something fails.`)]},render:e=>(0,h.jsx)(S,{width:`375px`,height:`667px`,label:`375px mobile active`,children:(0,h.jsx)(v,{...e})})},R={args:{question:`What would AJ focus on next?`,statusLabel:`Ready for a follow-up`,messages:[{id:`user-ai-products`,role:`user`,content:`How does AJ build AI-powered products?`,sources:[]},C(b,y),{id:`user-architecture`,role:`user`,content:`What architecture choices matter most?`,sources:[]},C(`The important choices are the boundaries users cannot see but will feel: server-side model calls, stable stream contracts, resilient error handling, useful observability, and honest copy that does not pretend the product can do more than it can.`,[y[1]]),{id:`user-platform`,role:`user`,content:`How does that connect to frontend platform work?`,sources:[]},C(`Frontend platform work has the same shape: shared contracts, accessible components, repeatable patterns, and enough documentation that other engineers can move faster without inheriting hidden complexity.`,[y[2]])]},render:e=>(0,h.jsx)(S,{width:`390px`,height:`720px`,label:`390px long thread`,children:(0,h.jsx)(v,{...e})})},z={args:{question:`I am evaluating AJ for a senior product engineering role.

Can you explain how his AI application work connects to frontend architecture, backend boundaries, accessibility, and developer experience?

Please keep the answer concise but specific.`,statusLabel:`Ready`,messages:[{id:`user-max-composer`,role:`user`,content:`What can I ask here?`,sources:[]},C(`Ask about AI products, architecture decisions, frontend platform work, accessibility, design systems, backend services, or engineering philosophy.`)]},render:e=>(0,h.jsx)(S,{width:`390px`,height:`720px`,label:`390px capped multiline composer`,children:(0,h.jsx)(v,{...e})})},B={args:{question:`This draft stays in a stable composer row while streaming.`,isStreaming:!0,statusLabel:`Writing a concise response...`,messages:[{id:`user-streaming-mobile`,role:`user`,content:`How does AJ keep AI interfaces reliable?`,sources:[]},C(`AJ starts with a server-owned boundary, application-level stream events, visible waiting states, and clear failure behavior.`)]},render:e=>(0,h.jsx)(S,{width:`390px`,height:`720px`,label:`390px streaming composer`,children:(0,h.jsx)(v,{...e})})},V={args:{question:`How would AJ approach this rollout?`,statusLabel:`Ready`,messages:[{id:`user-keyboard`,role:`user`,content:`What makes Ask A.J. production-shaped?`,sources:[]},C(`It uses the existing app boundary, keeps provider calls server-side, streams typed events, and designs the recruiter experience around honest system capabilities.`)]},render:e=>(0,h.jsx)(S,{width:`390px`,height:`520px`,label:`390px software-keyboard approximation`,children:(0,h.jsx)(v,{...e})})},H={args:{question:`How does AJ balance speed and reliability?`,statusLabel:`Ready for a follow-up`,messages:[{id:`user-short-desktop`,role:`user`,content:`What should engineering leaders know about AJ?`,sources:[]},C(b,y)]},render:e=>(0,h.jsx)(S,{width:`1024px`,height:`520px`,label:`short desktop`,children:(0,h.jsx)(v,{...e})})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How would AJ approach an AI feature rollout?\\n\\nPlease cover architecture, reliability, and user trust.",
    statusLabel: "Ready"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-ask-aj",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage(completedAnswer, sources)]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    question: "What is Ask A.J. and how was it engineered?",
    error: "Ask A.J. received an invalid stream event. Please try again."
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    statusLabel: "Stopped",
    messages: [{
      id: "user-ask-aj",
      role: "user",
      content: "What is Ask A.J. and how was it engineered?",
      sources: []
    }, assistantMessage("Ask A.J. is a live AI portfolio agent built by AJ Barnett.")]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <ViewportFrame width="320px" height="640px" label="320px mobile empty">
      <AskAjExperience {...args} />
    </ViewportFrame>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    question: "",
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-mobile-active",
      role: "user",
      content: "How does AJ think about reliable AI interfaces?",
      sources: []
    }, assistantMessage("AJ treats reliability as part of the product experience: make waiting states honest, keep provider details server-side, stream small application events, and design clear recovery paths when something fails.")]
  },
  render: args => <ViewportFrame width="375px" height="667px" label="375px mobile active">
      <AskAjExperience {...args} />
    </ViewportFrame>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    question: "What would AJ focus on next?",
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-ai-products",
      role: "user",
      content: "How does AJ build AI-powered products?",
      sources: []
    }, assistantMessage(completedAnswer, sources), {
      id: "user-architecture",
      role: "user",
      content: "What architecture choices matter most?",
      sources: []
    }, assistantMessage("The important choices are the boundaries users cannot see but will feel: server-side model calls, stable stream contracts, resilient error handling, useful observability, and honest copy that does not pretend the product can do more than it can.", [sources[1]]), {
      id: "user-platform",
      role: "user",
      content: "How does that connect to frontend platform work?",
      sources: []
    }, assistantMessage("Frontend platform work has the same shape: shared contracts, accessible components, repeatable patterns, and enough documentation that other engineers can move faster without inheriting hidden complexity.", [sources[2]])]
  },
  render: args => <ViewportFrame width="390px" height="720px" label="390px long thread">
      <AskAjExperience {...args} />
    </ViewportFrame>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    question: "I am evaluating AJ for a senior product engineering role.\\n\\nCan you explain how his AI application work connects to frontend architecture, backend boundaries, accessibility, and developer experience?\\n\\nPlease keep the answer concise but specific.",
    statusLabel: "Ready",
    messages: [{
      id: "user-max-composer",
      role: "user",
      content: "What can I ask here?",
      sources: []
    }, assistantMessage("Ask about AI products, architecture decisions, frontend platform work, accessibility, design systems, backend services, or engineering philosophy.")]
  },
  render: args => <ViewportFrame width="390px" height="720px" label="390px capped multiline composer">
      <AskAjExperience {...args} />
    </ViewportFrame>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    question: "This draft stays in a stable composer row while streaming.",
    isStreaming: true,
    statusLabel: "Writing a concise response...",
    messages: [{
      id: "user-streaming-mobile",
      role: "user",
      content: "How does AJ keep AI interfaces reliable?",
      sources: []
    }, assistantMessage("AJ starts with a server-owned boundary, application-level stream events, visible waiting states, and clear failure behavior.")]
  },
  render: args => <ViewportFrame width="390px" height="720px" label="390px streaming composer">
      <AskAjExperience {...args} />
    </ViewportFrame>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How would AJ approach this rollout?",
    statusLabel: "Ready",
    messages: [{
      id: "user-keyboard",
      role: "user",
      content: "What makes Ask A.J. production-shaped?",
      sources: []
    }, assistantMessage("It uses the existing app boundary, keeps provider calls server-side, streams typed events, and designs the recruiter experience around honest system capabilities.")]
  },
  render: args => <ViewportFrame width="390px" height="520px" label="390px software-keyboard approximation">
      <AskAjExperience {...args} />
    </ViewportFrame>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    question: "How does AJ balance speed and reliability?",
    statusLabel: "Ready for a follow-up",
    messages: [{
      id: "user-short-desktop",
      role: "user",
      content: "What should engineering leaders know about AJ?",
      sources: []
    }, assistantMessage(completedAnswer, sources)]
  },
  render: args => <ViewportFrame width="1024px" height="520px" label="short desktop">
      <AskAjExperience {...args} />
    </ViewportFrame>
}`,...H.parameters?.docs?.source}}};var U=[`Empty`,`MultilineDraft`,`InitialThinking`,`RotatingWaiting`,`Writing`,`StreamingLocksComposer`,`ReducedMotion`,`CompletedWithSources`,`FollowUpConversation`,`Error`,`Aborted`,`LongContent`,`NarrowMobileEmpty`,`NarrowMobileActiveConversation`,`LongConversation`,`MultilineComposerMaxHeight`,`StreamingStableComposer`,`SoftwareKeyboardViewport`,`ShortDesktopViewport`];export{P as Aborted,j as CompletedWithSources,w as Empty,N as Error,M as FollowUpConversation,E as InitialThinking,F as LongContent,R as LongConversation,z as MultilineComposerMaxHeight,T as MultilineDraft,L as NarrowMobileActiveConversation,I as NarrowMobileEmpty,A as ReducedMotion,D as RotatingWaiting,H as ShortDesktopViewport,V as SoftwareKeyboardViewport,k as StreamingLocksComposer,B as StreamingStableComposer,O as Writing,U as __namedExportsOrder,x as default};