import{t as e}from"./jsx-runtime-BJJDrDjX.js";import{t}from"./reveal-tAOvnzck.js";var n=e(),r={title:`Foundations/Reveal`,component:t,parameters:{layout:`centered`,docs:{description:{component:`# Reveal

Scroll-triggered enter animation. The child fades and lifts into view
the first time it crosses the viewport threshold, then STAYS at rest.
It never animates back out.

## When to use
Wrap any section, card, or heading that should feel purposefully placed
as the reader scrolls to it. Prefer over ad-hoc GSAP for simple entrances.

## When not to use
For text that must be readable immediately at page-load (above the fold
on landing routes). For those, render statically.

## Accessibility
No-ops entirely under \`prefers-reduced-motion: reduce\`. Uses
\`IntersectionObserver\` — no JS-driven scroll listeners.

## Related
- \`FloatLayer\`, \`ScrollDrift3D\`, \`SplitReveal\``}}},argTypes:{delay:{control:{type:`number`,min:0,max:1e3,step:50}},as:{control:!1}}},i={args:{delay:0,children:null},render:e=>(0,n.jsx)(t,{...e,children:(0,n.jsxs)(`article`,{className:`w-80 border border-border bg-card p-6`,children:[(0,n.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.28em] text-gold`,children:`Reveal`}),(0,n.jsx)(`h3`,{className:`mt-3 font-display text-2xl font-medium tracking-tight text-ink`,children:`Enters once, stays put`}),(0,n.jsx)(`p`,{className:`mt-2 text-sm text-foreground/80`,children:`Scroll this card into view — it fades and lifts, then settles.`})]})}),parameters:{docs:{source:{code:`<Reveal>
  <article>…</article>
</Reveal>`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 0,
    children: null
  },
  render: args => <Reveal {...args}>
      <article className="w-80 border border-border bg-card p-6">
        <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
          Reveal
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
          Enters once, stays put
        </h3>
        <p className="mt-2 text-sm text-foreground/80">
          Scroll this card into view — it fades and lifts, then settles.
        </p>
      </article>
    </Reveal>,
  parameters: {
    docs: {
      source: {
        code: \`<Reveal>
  <article>…</article>
</Reveal>\`
      }
    }
  }
}`,...i.parameters?.docs?.source}}};var a=[`Default`];export{i as Default,a as __namedExportsOrder,r as default};