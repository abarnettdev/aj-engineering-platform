import{s as e}from"./iframe-C8PbLLHQ.js";import{t}from"./react-CRC35vgx.js";import{t as n}from"./jsx-runtime-BJJDrDjX.js";var r=e(t()),i=n();function a(){let[e,t]=(0,r.useState)(8),[n,a]=(0,r.useState)(24),[s,c]=(0,r.useState)(78),[l,u]=(0,r.useState)(1),d=`oklch(0.52 0.135 ${s})`,f=.9+l*.15;return(0,i.jsxs)(`div`,{className:`grid gap-8 border border-border bg-card p-6 md:grid-cols-[1fr_1.2fr] md:p-8`,children:[(0,i.jsxs)(`div`,{className:`space-y-6`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-gold`,children:`Tokens live`}),(0,i.jsx)(`p`,{className:`mt-3 text-sm text-muted-foreground`,children:`Change a token. Watch the component change. That's the contract.`})]}),(0,i.jsx)(o,{label:`color.accent.hue`,value:`${s}°`,min:20,max:200,step:1,v:s,set:c}),(0,i.jsx)(o,{label:`radius.base`,value:`${e}px`,min:0,max:28,step:1,v:e,set:t}),(0,i.jsx)(o,{label:`space.pad`,value:`${n}px`,min:12,max:48,step:2,v:n,set:a}),(0,i.jsx)(o,{label:`density.scale`,value:f.toFixed(2),min:0,max:2,step:1,v:l,set:u,discrete:[`Compact`,`Comfortable`,`Spacious`]}),(0,i.jsx)(`pre`,{className:`mono mt-4 overflow-auto border border-border bg-background p-3 text-[10.5px] leading-relaxed text-muted-foreground`,children:`--color-accent: oklch(0.52 0.135 ${s});
--radius-base: ${e}px;
--space-pad: ${n}px;
--density-scale: ${f.toFixed(2)};`})]}),(0,i.jsx)(`div`,{className:`grid place-items-center border border-border bg-background`,style:{padding:n*1.5},children:(0,i.jsxs)(`div`,{className:`w-full max-w-sm border border-border bg-card`,style:{borderRadius:e,padding:n,transform:`scale(${f})`,transition:`transform 240ms cubic-bezier(0.22,1,0.36,1)`},children:[(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsx)(`span`,{className:`h-8 w-8`,style:{background:d,borderRadius:e*.5}}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`mono text-[9.5px] uppercase tracking-[0.24em]`,style:{color:d},children:`Component`}),(0,i.jsx)(`p`,{className:`font-display text-base text-ink`,children:`Live token demo`})]})]}),(0,i.jsx)(`p`,{className:`mt-4 text-sm text-muted-foreground`,children:`Every visual decision flows through a token. Change one, everything downstream inherits it. No coordination meeting required.`}),(0,i.jsx)(`button`,{className:`mono mt-5 inline-flex items-center gap-2 px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background transition-transform hover:scale-[1.02]`,style:{background:d,borderRadius:e*.6},children:`Primary action`})]})})]})}function o({label:e,value:t,min:n,max:r,step:a,v:o,set:s,discrete:c}){return(0,i.jsxs)(`div`,{children:[(0,i.jsxs)(`div`,{className:`flex items-baseline justify-between gap-3`,children:[(0,i.jsx)(`span`,{className:`mono text-[10px] uppercase tracking-[0.22em] text-ink`,children:e}),(0,i.jsx)(`span`,{className:`mono text-[10.5px] text-gold`,children:c?c[o]:t})]}),(0,i.jsx)(`input`,{"aria-label":e,type:`range`,min:n,max:r,step:a,value:o,onChange:e=>s(Number(e.target.value)),className:`mt-2 h-1 w-full cursor-pointer appearance-none bg-border accent-[color:var(--gold)]`})]})}a.__docgenInfo={description:`TokenPlayground, live design token controls.
Move sliders → the demo card responds in real time.
Demonstrates the "token as intent" thesis without leaving the page.`,methods:[],displayName:`TokenPlayground`};var s={title:`Composites/TokenPlayground`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`# TokenPlayground

A live, in-page demonstration of the "tokens as intent" thesis.
Sliders drive four design tokens (accent hue, base radius, spacing
density, padding) and a demo card responds in real time.

## When to use
Once, on the Design System page, to prove the token contract to
visiting engineers and designers. Not a general-purpose component.

## When not to use
As a real settings panel. It is an editorial artifact — no persistence,
no theming side-effects on the surrounding page.

## Accessibility
Native \`<input type="range">\` sliders with visible labels and current
values. Keyboard-operable end to end. Motion-free.

## Related
- Design tokens defined in \`src/styles.css\``}}}},c={render:()=>(0,i.jsx)(`div`,{className:`container-page py-12`,children:(0,i.jsx)(a,{})}),parameters:{docs:{source:{code:`<TokenPlayground />`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="container-page py-12">
      <TokenPlayground />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<TokenPlayground />\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`];export{c as Default,l as __namedExportsOrder,s as default};