import{t as e}from"./jsx-runtime-BJJDrDjX.js";import{t}from"./gsap-LydJEcad.js";var n=e();function r({value:e,className:r}){let i=e.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/),a=t(({gsap:e,ScrollTrigger:t,scope:n})=>{if(!i)return;let r=Number(i[2]),a=i[2].includes(`.`),o=n.querySelector(`[data-num]`);if(!o)return;let s={v:0};t.create({trigger:n,start:`top 85%`,once:!0,onEnter:()=>{e.to(s,{v:r,duration:1.6,ease:`power3.out`,onUpdate:()=>{o.textContent=a?s.v.toFixed(1):Math.round(s.v).toString()}})}})},[]);if(!i)return(0,n.jsx)(`span`,{className:r,children:e});let[,o,,s]=i;return(0,n.jsxs)(`span`,{ref:a,className:r,children:[o,(0,n.jsx)(`span`,{"data-num":!0,children:`0`}),s]})}r.__docgenInfo={description:`CountUp, animates numeric portion of a value (e.g. "170+", "25 years")
when scrolled into view. Non-numeric parts stay static.`,methods:[],displayName:`CountUp`,props:{value:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}};var i={title:`Foundations/CountUp`,component:r,parameters:{layout:`centered`,docs:{description:{component:`# CountUp

Animates the numeric portion of a value the first time it scrolls into
view. Non-numeric prefix/suffix (e.g. \`+\`, \` years\`, \`x\`) stay static.
Runs once, then holds the final value.

## When to use
Stat blocks in editorial hero rows — "170+ UI assets", "25 years",
"10x teams". Keep it to the biggest number in a section, not every number.

## When not to use
For real-time metrics or values that change after mount — this is a
one-shot entrance, not a live counter.

## Accessibility
The animation is decorative; screen readers announce the final DOM
text. Motion-reduced users see the final value without the tween.

## Related
- \`Reveal\`, \`SplitReveal\``}}},argTypes:{value:{control:`text`},className:{control:!1}}},a={args:{value:`170+`},render:e=>(0,n.jsxs)(`div`,{className:`flex items-baseline gap-2`,children:[(0,n.jsx)(r,{...e,className:`font-display text-6xl font-medium tracking-tight text-ink`}),(0,n.jsx)(`span`,{className:`mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground`,children:`UI assets`})]}),parameters:{docs:{source:{code:`<CountUp value="170+" />`}}}},o={args:{value:`25 years`},render:e=>(0,n.jsx)(r,{...e,className:`font-display text-5xl font-medium tracking-tight text-ink`}),parameters:{docs:{source:{code:`<CountUp value="25 years" />`}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "170+"
  },
  render: args => <div className="flex items-baseline gap-2">
      <CountUp {...args} className="font-display text-6xl font-medium tracking-tight text-ink" />
      <span className="mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        UI assets
      </span>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<CountUp value="170+" />\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: "25 years"
  },
  render: args => <CountUp {...args} className="font-display text-5xl font-medium tracking-tight text-ink" />,
  parameters: {
    docs: {
      source: {
        code: \`<CountUp value="25 years" />\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};var s=[`Default`,`WithSuffix`];export{a as Default,o as WithSuffix,s as __namedExportsOrder,i as default};