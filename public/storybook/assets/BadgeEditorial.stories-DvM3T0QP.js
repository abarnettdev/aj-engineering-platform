import{t as e}from"./jsx-runtime-BQAsMLu1.js";import{n as t,t as n}from"./badge-C5JeKh32.js";var r=e(),i={title:`Primitives/Badge (editorial)`,component:n,parameters:{layout:`centered`,docs:{description:{component:`# Badge (editorial)

The site-native badge (distinct from the shadcn \`ui/badge\`). Mono,
uppercase, wide tracking — used for section eyebrows, chapter marks,
and status chips throughout editorial pages.

## Variants
- \`default\` — neutral surface, used for section eyebrows.
- \`accent\`  — gold, used sparingly for status ("Shipping", "Live").
- \`outline\` — quiet border-only, for tertiary metadata.

## When not to use
Body text tags inside prose — use inline \`<code>\` or plain text.

## Related
- \`TechBadge\` (below), \`ArticleCard.Meta\``}}},argTypes:{variant:{control:`inline-radio`,options:[`default`,`accent`,`outline`]},children:{control:`text`},className:{control:!1}}},a={args:{variant:`default`,children:`Design Systems`},parameters:{docs:{source:{code:`<Badge variant="default">Design Systems</Badge>`}}}},o={args:{variant:`accent`,children:`Shipping`},parameters:{docs:{source:{code:`<Badge variant="accent">Shipping</Badge>`}}}},s={args:{variant:`outline`,children:`Draft`},parameters:{docs:{source:{code:`<Badge variant="outline">Draft</Badge>`}}}},c={render:()=>(0,r.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,r.jsx)(t,{children:`React`}),(0,r.jsx)(t,{children:`TanStack`}),(0,r.jsx)(t,{children:`Tailwind`}),(0,r.jsx)(t,{children:`GSAP`})]}),parameters:{docs:{source:{code:`<TechBadge>React</TechBadge>
<TechBadge>TanStack</TechBadge>`}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "Design Systems"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Badge variant="default">Design Systems</Badge>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "accent",
    children: "Shipping"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Badge variant="accent">Shipping</Badge>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Draft"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Badge variant="outline">Draft</Badge>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <TechBadge>React</TechBadge>
      <TechBadge>TanStack</TechBadge>
      <TechBadge>Tailwind</TechBadge>
      <TechBadge>GSAP</TechBadge>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<TechBadge>React</TechBadge>
<TechBadge>TanStack</TechBadge>\`
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`## TechBadge
Small monospace chip for tech stack lists on project cards.`,...c.parameters?.docs?.description}}};var l=[`Default`,`Accent`,`Outline`,`Tech`];export{o as Accent,a as Default,s as Outline,c as Tech,l as __namedExportsOrder,i as default};