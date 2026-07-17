import{s as e}from"./iframe-4FfVh-9Z.js";import{t}from"./react-CCQ14-Tr.js";import{t as n}from"./jsx-runtime-B4XW9ad0.js";import{t as r}from"./utils-DXalBF5w.js";var i=e(t()),a=n();function o({items:e,className:t}){let[n,o]=(0,i.useState)(e[0]?.id??null);return(0,i.useEffect)(()=>{if(typeof window>`u`)return;let t=e.map(e=>document.getElementById(e.id)).filter(e=>!!e);if(!t.length)return;let n=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t[0]?.target?.id&&o(t[0].target.id)},{rootMargin:`-30% 0px -60% 0px`,threshold:[0,.1,.5,1]});return t.forEach(e=>n.observe(e)),()=>n.disconnect()},[e]),(0,a.jsx)(`nav`,{"aria-label":`Article sections`,className:r(`border-l border-border pl-4`,t),children:(0,a.jsx)(`ol`,{className:`space-y-3 text-sm`,children:e.map((e,t)=>{let i=n===e.id;return(0,a.jsx)(`li`,{children:(0,a.jsxs)(`a`,{href:`#${e.id}`,"aria-current":i?`true`:void 0,className:r(`group flex items-baseline gap-3 transition-colors`,i?`text-ink`:`text-muted-foreground hover:text-ink`),children:[(0,a.jsx)(`span`,{className:r(`mono text-[9.5px] tracking-[0.18em] transition-colors`,i?`text-gold`:`text-gold-dark`),children:String(t+1).padStart(2,`0`)}),(0,a.jsx)(`span`,{className:r(`story-link relative`,i&&`after:scale-x-100 after:origin-bottom-left`),children:e.label})]})},e.id)})})})}o.__docgenInfo={description:`ActiveToc — sticky table of contents that highlights the section currently
in view. Pure client behavior via IntersectionObserver; degrades gracefully.`,methods:[],displayName:`ActiveToc`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; label: string }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`{ id: string; label: string }[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}};var s={title:`Composites/ActiveToc`,component:o,parameters:{layout:`centered`,docs:{description:{component:`ActiveToc — sticky table of contents. Uses an \`IntersectionObserver\` to
highlight the section whose top is closest to the viewport top.

Accessibility: rendered as a \`<nav aria-label="Table of contents">\` on
the live page; keyboard focus advances through the anchor list; the
active state is announced by the anchor color.`}}}},c={args:{items:[{id:`intro`,label:`Introduction`},{id:`principles`,label:`Principles`},{id:`accessibility`,label:`Accessibility`},{id:`ai`,label:`AI-Assisted`}]},render:e=>(0,a.jsx)(`div`,{className:`w-64 border border-border bg-card p-6`,children:(0,a.jsx)(o,{...e})}),parameters:{docs:{source:{code:`<ActiveToc
  items={[
    { id: "intro", label: "Introduction" },
    { id: "principles", label: "Principles" },
    { id: "accessibility", label: "Accessibility" },
    { id: "ai", label: "AI-Assisted" },
  ]}
/>`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <div className="w-64 border border-border bg-card p-6">
      <ActiveToc {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<ActiveToc
  items={[
    { id: "intro", label: "Introduction" },
    { id: "principles", label: "Principles" },
    { id: "accessibility", label: "Accessibility" },
    { id: "ai", label: "AI-Assisted" },
  ]}
/>\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`];export{c as Default,l as __namedExportsOrder,s as default};