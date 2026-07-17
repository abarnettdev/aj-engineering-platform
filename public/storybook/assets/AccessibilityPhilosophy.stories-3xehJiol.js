import{t as e}from"./jsx-runtime-BQAsMLu1.js";var t=e(),n={title:`Philosophy/Accessibility as Product Quality`,parameters:{layout:`padded`,docs:{description:{component:`Accessibility investment compounds — it improves test coverage, sharpens component APIs, and speeds onboarding. Every primitive on this site is keyboard-navigable, motion-safe, and screen-reader parity is verified.`}}}},r=[[`Keyboard-first`,`Every path reachable without a mouse.`],[`Semantic HTML`,`Landmarks, headings, roles by default.`],[`Focus management`,`Visible, predictable, trapped when it should be.`],[`Screen-reader parity`,`Announcements match the visual truth.`],[`Reduced motion`,`Motion is a feature, not a mandate.`],[`Color contrast`,`AA minimum, AAA where it counts.`]],i={render:()=>(0,t.jsx)(`ul`,{className:`grid max-w-3xl gap-3 md:grid-cols-2`,children:r.map(([e,n])=>(0,t.jsxs)(`li`,{className:`edge-gold border border-border bg-card p-4`,children:[(0,t.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-gold`,children:e}),(0,t.jsx)(`p`,{className:`mt-1.5 text-[13.5px] leading-relaxed text-foreground/85`,children:n})]},e))}),parameters:{docs:{source:{code:`<ul className="grid gap-3 md:grid-cols-2">
  <li className="edge-gold border border-border bg-card p-4">
    <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
      Keyboard-first
    </p>
    <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/85">
      Every path reachable without a mouse.
    </p>
  </li>
  {/* … */}
</ul>`}}}},a={render:()=>(0,t.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,t.jsx)(`button`,{className:`bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background`,children:`Focused button`}),(0,t.jsx)(`a`,{href:`#`,className:`story-link text-[14px] text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background`,children:`Focused link`})]}),parameters:{docs:{description:{story:`Tab through the demo. Every focusable element has a visible ring in the gold token, offset from the background for contrast.`},source:{code:`<button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background">
  Focused button
</button>`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="grid max-w-3xl gap-3 md:grid-cols-2">
      {items.map(([t, d]) => <li key={t} className="edge-gold border border-border bg-card p-4">
          <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
            {t}
          </p>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/85">
            {d}
          </p>
        </li>)}
    </ul>,
  parameters: {
    docs: {
      source: {
        code: \`<ul className="grid gap-3 md:grid-cols-2">
  <li className="edge-gold border border-border bg-card p-4">
    <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
      Keyboard-first
    </p>
    <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/85">
      Every path reachable without a mouse.
    </p>
  </li>
  {/* … */}
</ul>\`
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <button className="bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        Focused button
      </button>
      <a href="#" className="story-link text-[14px] text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        Focused link
      </a>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Tab through the demo. Every focusable element has a visible ring in the gold token, offset from the background for contrast."
      },
      source: {
        code: \`<button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background">
  Focused button
</button>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}};var o=[`Checklist`,`FocusStates`];export{i as Checklist,a as FocusStates,o as __namedExportsOrder,n as default};