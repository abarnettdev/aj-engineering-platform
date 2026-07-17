import{s as e}from"./iframe-DIt7ATgX.js";import{t}from"./react-8sbseIyU.js";import{t as n}from"./jsx-runtime-BQAsMLu1.js";import{t as r}from"./utils-DXalBF5w.js";var i=e(t()),a=n();function o({children:e,className:t,delay:n=0,direction:o=`left`}){let s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=s.current;if(!e)return;let t={left:`inset(0 100% 0 0)`,right:`inset(0 0 0 100%)`,top:`inset(100% 0 0 0)`,bottom:`inset(0 0 100% 0)`};if(e.style.clipPath=t[o],typeof IntersectionObserver>`u`){e.setAttribute(`data-in`,`true`);return}let n=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(e.setAttribute(`data-in`,`true`),n.unobserve(e))})},{threshold:.18,rootMargin:`0px 0px -8% 0px`});return n.observe(e),()=>n.disconnect()},[o]),(0,a.jsx)(`div`,{ref:s,"data-in":`false`,className:r(`mask-reveal`,t),style:n?{transitionDelay:`${n}ms`}:void 0,children:e})}o.__docgenInfo={description:`MaskReveal — clip-path wipe triggered when the element enters the viewport.
Direction controls where the mask retracts from. Reduced-motion users
see the final state immediately (handled in CSS).`,methods:[],displayName:`MaskReveal`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},delay:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`"left" | "right" | "top" | "bottom"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:``,defaultValue:{value:`"left"`,computed:!1}}}};var s={title:`Foundations/MaskReveal`,component:o,parameters:{layout:`centered`,docs:{description:{component:`# MaskReveal

Clip-path wipe reveal triggered when the element enters the viewport.
Once revealed, the content stays visible — it never re-masks.

## When to use
Hero images, diagram figures, and editorial artifacts on the Work
page. Pair with a direction that follows the reader's eye
(left-to-right for LTR narratives).

## When not to use
Body text — clip-path animations can cause layout jitter on long
paragraphs. Prefer \`Reveal\` for text.

## Accessibility
Motion-reduced users see the final unmasked state immediately (CSS
handles the fallback). Content stays selectable throughout.

## Related
- \`Reveal\`, \`FloatLayer\`, \`ScrollDrift3D\``}}},argTypes:{direction:{control:`inline-radio`,options:[`left`,`right`,`top`,`bottom`]},delay:{control:{type:`number`,min:0,max:1e3,step:50}},className:{control:!1}}},c=()=>(0,a.jsxs)(`figure`,{className:`w-[26rem] border border-border bg-card`,children:[(0,a.jsx)(`div`,{"aria-hidden":!0,className:`aspect-[4/3] w-full`,style:{background:`radial-gradient(120% 90% at 20% 20%, color-mix(in oklab, var(--gold) 24%, transparent), transparent 60%), linear-gradient(135deg, color-mix(in oklab, var(--ink) 92%, transparent), color-mix(in oklab, var(--ink) 70%, transparent))`}}),(0,a.jsxs)(`figcaption`,{className:`border-t border-border p-4`,children:[(0,a.jsx)(`p`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-gold`,children:`Figure 01`}),(0,a.jsx)(`p`,{className:`mt-2 text-sm text-foreground/80`,children:`Wipes in from the chosen direction, then stays.`})]})]}),l={args:{direction:`left`,delay:0,children:(0,a.jsx)(c,{})},parameters:{docs:{source:{code:`<MaskReveal direction="left">
  <figure>…</figure>
</MaskReveal>`}}}},u={args:{direction:`top`,delay:0,children:(0,a.jsx)(c,{})},parameters:{docs:{source:{code:`<MaskReveal direction="top">
  <figure>…</figure>
</MaskReveal>`}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "left",
    delay: 0,
    children: <Demo />
  },
  parameters: {
    docs: {
      source: {
        code: \`<MaskReveal direction="left">
  <figure>…</figure>
</MaskReveal>\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "top",
    delay: 0,
    children: <Demo />
  },
  parameters: {
    docs: {
      source: {
        code: \`<MaskReveal direction="top">
  <figure>…</figure>
</MaskReveal>\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}};var d=[`LeftToRight`,`TopDown`];export{l as LeftToRight,u as TopDown,d as __namedExportsOrder,s as default};