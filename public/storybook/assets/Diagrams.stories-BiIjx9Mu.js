import{t as e}from"./jsx-runtime-BBNe6-Ph.js";import{t}from"./utils-DXalBF5w.js";var n=e();function r({eyebrow:e,title:r,caption:a,legend:o,image:s,alt:c,className:l,aspect:u=`16 / 10`}){return(0,n.jsxs)(`figure`,{className:t(`relative w-full max-w-none border border-border bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]`,l),children:[(0,n.jsxs)(`div`,{className:`flex items-center justify-between gap-4 border-b border-border/70 px-5 py-3`,children:[(0,n.jsx)(`span`,{className:`mono text-[10px] uppercase tracking-[0.28em] text-gold`,children:e}),r?(0,n.jsx)(`span`,{className:`mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground`,children:r}):null]}),(0,n.jsxs)(`div`,{className:`relative w-full overflow-hidden bg-background`,style:{aspectRatio:u},children:[(0,n.jsx)(`img`,{src:s,alt:c,loading:`lazy`,decoding:`async`,className:`absolute inset-0 h-full w-full object-cover`}),(0,n.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute inset-0`,style:{background:`radial-gradient(ellipse at 50% 40%, transparent 55%, color-mix(in oklab, var(--ink) 22%, transparent) 100%)`}}),(0,n.jsx)(i,{className:`left-3 top-3`,rotate:0}),(0,n.jsx)(i,{className:`right-3 top-3`,rotate:90}),(0,n.jsx)(i,{className:`right-3 bottom-3`,rotate:180}),(0,n.jsx)(i,{className:`left-3 bottom-3`,rotate:270})]}),(a||o?.length)&&(0,n.jsxs)(`figcaption`,{className:`border-t border-border/70 px-5 py-4`,children:[a?(0,n.jsx)(`p`,{className:`text-sm leading-relaxed text-foreground/85`,children:a}):null,o?.length?(0,n.jsx)(`dl`,{className:`mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3`,children:o.map((e,t)=>(0,n.jsxs)(`div`,{className:`flex items-baseline gap-2 border-l border-gold/50 pl-3`,children:[(0,n.jsx)(`dt`,{className:`mono text-[10px] uppercase tracking-[0.22em] text-gold`,children:String(t+1).padStart(2,`0`)}),(0,n.jsxs)(`dd`,{className:`text-xs text-foreground/80`,children:[(0,n.jsx)(`span`,{className:`font-medium text-ink`,children:e.label}),e.note?(0,n.jsxs)(`span`,{className:`text-muted-foreground`,children:[`, `,e.note]}):null]})]},t))}):null]})]})}function i({className:e,rotate:r=0}){return(0,n.jsxs)(`span`,{"aria-hidden":!0,className:t(`pointer-events-none absolute h-3 w-3`,e),style:{transform:`rotate(${r}deg)`},children:[(0,n.jsx)(`span`,{className:`absolute left-0 top-0 h-px w-full bg-gold/60`}),(0,n.jsx)(`span`,{className:`absolute left-0 top-0 h-full w-px bg-gold/60`})]})}r.__docgenInfo={description:`CompositeFigure, the shared editorial frame used by every diagram
composite. Renders a premium 3D illustration inside a bordered card
with an eyebrow, caption, and legend row. Static, high-contrast, no
interaction gates, the image is the argument.`,methods:[],displayName:`CompositeFigure`,props:{eyebrow:{required:!0,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`string`},description:``},caption:{required:!1,tsType:{name:`ReactNode`},description:``},legend:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; note?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`note`,value:{name:`string`,required:!1}}]}}],raw:`Array<{ label: string; note?: string }>`},description:``},image:{required:!0,tsType:{name:`string`},description:``},alt:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},aspect:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"16 / 10"`,computed:!1}}}};var a=``+new URL(`composite-component-anatomy-Dvx13VvF.jpg`,import.meta.url).href;function o(){return(0,n.jsx)(r,{eyebrow:`Fig. 02 · Component Anatomy`,title:`Card · compound slots`,image:a,alt:`Exploded isometric view of a card component, split into four floating slabs linked by thin gold connector wires.`,caption:(0,n.jsx)(n.Fragment,{children:`A card is not a monolith. It is a contract between slots, each replaceable, each optional, each aligned to the same grid.`}),legend:[{label:`CardHeader`,note:`eyebrow, controls, chapter marks`},{label:`CardTitle`,note:`the primary label`},{label:`CardContent`,note:`body prose, lists, media`},{label:`CardFooter`,note:`trailing actions`}]})}o.__docgenInfo={description:`ComponentAnatomy, editorial figure for the Design System page.

An exploded-view 3D illustration of a Card compound component: the
four slots (header, title, body, footer) rendered as floating slabs
linked by gold connector wires. Replaces the previous SVG-based
anatomy diagram.`,methods:[],displayName:`ComponentAnatomy`};var s=``+new URL(`composite-blueprint-Cdy-mpTD.jpg`,import.meta.url).href;function c(){return(0,n.jsx)(r,{eyebrow:`Fig. 03 · Blueprint`,title:`Engineering graph`,image:s,alt:`Isometric architecture diagram: graphite nodes on small plinths connected by thin gold arrows forming a directed graph.`,caption:(0,n.jsx)(n.Fragment,{children:`Every product is a directed graph. Some nodes matter more than others; the craft is knowing which, and drawing the edges honestly.`}),legend:[{label:`Nodes`,note:`modules, services, surfaces`},{label:`Edges`,note:`contracts, not wishes`},{label:`Clusters`,note:`where the team already agrees`}]})}c.__docgenInfo={description:`BlueprintDiagram — editorial figure of the engineering system graph.

A 3D isometric network of graphite nodes connected by thin gold
arrows, evoking the shape of a real production architecture without
naming any specific product.`,methods:[],displayName:`BlueprintDiagram`};var l=``+new URL(`composite-ai-lifecycle-BCMKTc-R.jpg`,import.meta.url).href;function u(){return(0,n.jsx)(r,{eyebrow:`Fig. 04 · AI Lifecycle`,title:`Explore · Draft · Review · Ship`,image:l,alt:`Four isometric objects on plinths, a crystal, an unfolded blueprint, a stacked pair of panels, and a solid block, connected by a continuous gold ribbon.`,caption:(0,n.jsx)(n.Fragment,{children:`AI is a co-author, never the signature. Each phase leaves an artifact a human can inspect, revise, and stand behind.`}),legend:[{label:`Explore`,note:`find the shape of the problem`},{label:`Draft`,note:`write the first honest attempt`},{label:`Review`,note:`cut, sharpen, verify`},{label:`Ship`,note:`sign the work and move on`}]})}u.__docgenInfo={description:`AiLifecycle, editorial figure of the four-phase AI-assisted flow.

Explore → Draft → Review → Ship, rendered as four physical objects
on plinths connected by a single continuous gold ribbon.`,methods:[],displayName:`AiLifecycle`};var d=``+new URL(`composite-mental-models-BpjTYKAP.jpg`,import.meta.url).href;function f(){return(0,n.jsx)(r,{eyebrow:`Fig. 05 · Mental Models`,title:`Hierarchy · Orbit · Graph`,image:d,alt:`Three isometric sculptural diagrams on plinths: a stepped pyramid, concentric rings around a gold sphere, and a branching node tree.`,caption:(0,n.jsx)(n.Fragment,{children:`A system rarely fits one metaphor. The useful move is holding three at once and choosing the one that answers the question in front of you.`}),legend:[{label:`Hierarchy`,note:`who reports to what`},{label:`Orbit`,note:`what circles the core`},{label:`Graph`,note:`how signal actually travels`}]})}f.__docgenInfo={description:`MentalModels — editorial triptych of three ways to think about a system.

A single 3D illustration containing three sculptural diagrams:
hierarchy (stepped pyramid), core-and-orbit (concentric rings), and
branching graph (node tree).`,methods:[],displayName:`MentalModels`};var p=``+new URL(`composite-systems-map-DMbS4c2u.jpg`,import.meta.url).href;function m(){return(0,n.jsx)(r,{eyebrow:`Fig. 01 · Systems Map`,title:`Inputs · Judgment · Production`,image:p,alt:`Isometric diagram: many input primitives on the left converge into a central obelisk labeled engineering judgment, then fan out to production surfaces on the right.`,caption:(0,n.jsx)(n.Fragment,{children:`Engineering judgment is the hinge, where raw inputs (constraints, research, prior art, taste) are weighed and shaped into the artifacts a team can actually ship.`}),legend:[{label:`Inputs`,note:`constraints, research, prior art`},{label:`Judgment`,note:`the hinge, what to build, refuse, defer`},{label:`Production`,note:`the artifacts a team can ship`}]})}m.__docgenInfo={description:`SystemsMap, editorial figure for the Engineering page.

Renders the "Inputs → Engineering Judgment → Production" thesis as a
premium 3D isometric illustration wrapped in the shared composite
frame. No hover isolation, no interaction gates; the image is the
argument, the caption anchors it.`,methods:[],displayName:`SystemsMap`};var h={title:`Composites/Diagrams`,parameters:{layout:`fullscreen`,docs:{description:{component:`The site's diagrams are real React components — not screenshots.
They share GSAP primitives, respect reduced motion, and mark all purely
decorative SVG geometry \`aria-hidden\` while keeping labels as text.`}}}},g={name:`SystemsMap`,render:()=>(0,n.jsx)(`div`,{className:`container-page py-16`,children:(0,n.jsx)(m,{})}),parameters:{docs:{description:{story:`Inputs → Engineering Judgment → Production. Scroll-narrated on the live page; static here.`},source:{code:`<SystemsMap />`}}}},_={name:`ComponentAnatomy`,render:()=>(0,n.jsx)(`div`,{className:`container-page py-16`,children:(0,n.jsx)(o,{})}),parameters:{docs:{description:{story:`Animated anatomy of the Card compound component. Slots assemble with gold connector lines that draw themselves on scroll.`},source:{code:`<ComponentAnatomy />`}}}},v={name:`BlueprintDiagram`,render:()=>(0,n.jsx)(`div`,{className:`container-page py-16`,children:(0,n.jsx)(c,{})}),parameters:{docs:{source:{code:`<BlueprintDiagram />`}}}},y={name:`AiLifecycle`,render:()=>(0,n.jsx)(`div`,{className:`container-page py-16`,children:(0,n.jsx)(u,{})}),parameters:{docs:{description:{story:`Four phases — Explore, Draft, Review, Ship — connected by a bezier gold path that draws itself on scroll.`},source:{code:`<AiLifecycle />`}}}},b={name:`MentalModels`,render:()=>(0,n.jsx)(`div`,{className:`container-page py-16`,children:(0,n.jsx)(f,{})}),parameters:{docs:{source:{code:`<MentalModels />`}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "SystemsMap",
  render: () => <div className="container-page py-16">
      <SystemsMap />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Inputs → Engineering Judgment → Production. Scroll-narrated on the live page; static here."
      },
      source: {
        code: \`<SystemsMap />\`
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "ComponentAnatomy",
  render: () => <div className="container-page py-16">
      <ComponentAnatomy />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Animated anatomy of the Card compound component. Slots assemble with gold connector lines that draw themselves on scroll."
      },
      source: {
        code: \`<ComponentAnatomy />\`
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "BlueprintDiagram",
  render: () => <div className="container-page py-16">
      <BlueprintDiagram />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<BlueprintDiagram />\`
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "AiLifecycle",
  render: () => <div className="container-page py-16">
      <AiLifecycle />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Four phases — Explore, Draft, Review, Ship — connected by a bezier gold path that draws itself on scroll."
      },
      source: {
        code: \`<AiLifecycle />\`
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "MentalModels",
  render: () => <div className="container-page py-16">
      <MentalModels />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<MentalModels />\`
      }
    }
  }
}`,...b.parameters?.docs?.source}}};var x=[`SystemsMap_Cinematic`,`ComponentAnatomy_Compound`,`Blueprint_EngineeringGraph`,`AI_Lifecycle`,`MentalModels_ThreeDiagrams`];export{y as AI_Lifecycle,v as Blueprint_EngineeringGraph,_ as ComponentAnatomy_Compound,b as MentalModels_ThreeDiagrams,g as SystemsMap_Cinematic,x as __namedExportsOrder,h as default};