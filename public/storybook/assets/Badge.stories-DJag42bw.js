import{t as e}from"./jsx-runtime-BBNe6-Ph.js";import{n as t,t as n}from"./badge-BHB6p9lx.js";var r=e(),i={title:`Primitives/Badge`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Badge — mono uppercase micro-label used across the site for metadata,\neyebrow tags, and technology chips. Three tones: `default`, `accent`,\n`outline`. Use `TechBadge` for technology chips inside case studies."}}},argTypes:{variant:{control:`select`,options:[`default`,`accent`,`outline`]}}},a={args:{children:`Stable`},parameters:{docs:{source:{code:`<Badge>Stable</Badge>`}}}},o={args:{children:`Featured`,variant:`accent`},parameters:{docs:{source:{code:`<Badge variant="accent">Featured</Badge>`}}}},s={args:{children:`Draft`,variant:`outline`},parameters:{docs:{source:{code:`<Badge variant="outline">Draft</Badge>`}}}},c={args:{children:`Technology`},render:()=>(0,r.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,r.jsx)(t,{children:`TypeScript`}),(0,r.jsx)(t,{children:`React 19`}),(0,r.jsx)(t,{children:`TanStack Start`}),(0,r.jsx)(t,{children:`Tailwind v4`})]}),parameters:{docs:{source:{code:`<TechBadge>TypeScript</TechBadge>
<TechBadge>React 19</TechBadge>
<TechBadge>TanStack Start</TechBadge>
<TechBadge>Tailwind v4</TechBadge>`}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Stable"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Badge>Stable</Badge>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Featured",
    variant: "accent"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Badge variant="accent">Featured</Badge>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Draft",
    variant: "outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Badge variant="outline">Draft</Badge>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Technology"
  },
  render: () => <div className="flex flex-wrap gap-2">
      <TechBadge>TypeScript</TechBadge>
      <TechBadge>React 19</TechBadge>
      <TechBadge>TanStack Start</TechBadge>
      <TechBadge>Tailwind v4</TechBadge>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<TechBadge>TypeScript</TechBadge>
<TechBadge>React 19</TechBadge>
<TechBadge>TanStack Start</TechBadge>
<TechBadge>Tailwind v4</TechBadge>\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`Accent`,`Outline`,`Technology`];export{o as Accent,a as Default,s as Outline,c as Technology,l as __namedExportsOrder,i as default};