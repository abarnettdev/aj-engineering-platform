import{t as e}from"./jsx-runtime-BQAsMLu1.js";import{t}from"./utils-DXalBF5w.js";var n=e();function r({children:e,className:r,as:i=`section`,eyebrow:a,title:o,description:s,align:c=`left`}){return(0,n.jsxs)(i,{className:t(`container-page py-20 md:py-28`,r),children:[(a||o||s)&&(0,n.jsxs)(`header`,{className:t(`mb-12 max-w-3xl`,c===`center`&&`mx-auto text-center`),children:[a&&(0,n.jsx)(`p`,{className:`mono mb-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground`,children:a}),o&&(0,n.jsx)(`h2`,{className:`text-balance font-display text-4xl leading-[1.05] md:text-5xl`,children:o}),s&&(0,n.jsx)(`p`,{className:`mt-5 text-balance text-lg text-muted-foreground`,children:s})]}),e]})}function i({children:e}){return(0,n.jsxs)(`span`,{className:`mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground`,children:[(0,n.jsx)(`span`,{className:`h-px w-6 bg-border-strong`}),e]})}r.__docgenInfo={description:``,methods:[],displayName:`Section`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},as:{required:!1,tsType:{name:`union`,raw:`"section" | "div"`,elements:[{name:`literal`,value:`"section"`},{name:`literal`,value:`"div"`}]},description:``,defaultValue:{value:`"section"`,computed:!1}},eyebrow:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},align:{required:!1,tsType:{name:`union`,raw:`"left" | "center"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"center"`}]},description:``,defaultValue:{value:`"left"`,computed:!1}}}},i.__docgenInfo={description:``,methods:[],displayName:`Eyebrow`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}};var a={title:`Primitives/Section`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Section — the editorial container.

Standard \`container-page\` width, vertical rhythm (\`py-20 md:py-28\`),
and an optional header with eyebrow / title / description. Compose
children freely; the shell does not enforce a layout.`}}},tags:[`autodocs`]},o={render:()=>(0,n.jsx)(r,{eyebrow:`Chapter · Principles`,title:`Six rules I keep coming back to`,description:`Working principles — earned, re-tested, and still useful after twenty-five years of shipping.`,children:(0,n.jsxs)(`div`,{className:`grid gap-6 md:grid-cols-3`,children:[(0,n.jsx)(`div`,{className:`border border-border bg-card p-6`,children:`A`}),(0,n.jsx)(`div`,{className:`border border-border bg-card p-6`,children:`B`}),(0,n.jsx)(`div`,{className:`border border-border bg-card p-6`,children:`C`})]})}),parameters:{docs:{source:{code:`<Section
  eyebrow="Chapter · Principles"
  title="Six rules I keep coming back to"
  description="Working principles — earned, re-tested, and still useful."
>
  {children}
</Section>`}}}},s={render:()=>(0,n.jsx)(`div`,{className:`container-page py-20`,children:(0,n.jsx)(i,{children:`Figure 03 · Practice`})}),parameters:{docs:{source:{code:`<Eyebrow>Figure 03 · Practice</Eyebrow>`}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Section eyebrow="Chapter · Principles" title="Six rules I keep coming back to" description="Working principles — earned, re-tested, and still useful after twenty-five years of shipping.">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="border border-border bg-card p-6">A</div>
        <div className="border border-border bg-card p-6">B</div>
        <div className="border border-border bg-card p-6">C</div>
      </div>
    </Section>,
  parameters: {
    docs: {
      source: {
        code: \`<Section
  eyebrow="Chapter · Principles"
  title="Six rules I keep coming back to"
  description="Working principles — earned, re-tested, and still useful."
>
  {children}
</Section>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="container-page py-20">
      <Eyebrow>Figure 03 · Practice</Eyebrow>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Eyebrow>Figure 03 · Practice</Eyebrow>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};var c=[`WithHeader`,`EyebrowOnly`];export{s as EyebrowOnly,o as WithHeader,c as __namedExportsOrder,a as default};