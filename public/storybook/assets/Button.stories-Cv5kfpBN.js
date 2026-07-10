import{t as e}from"./jsx-runtime-BJJDrDjX.js";import{t}from"./button-Dn8VLFoU.js";var n=e(),r={title:`Primitives/Button`,component:t,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'Consumer JSX: `<Button variant="default">Ship it</Button>`.'}}},argTypes:{variant:{control:`select`,options:[`default`,`destructive`,`outline`,`secondary`,`ghost`,`link`]},size:{control:`select`,options:[`default`,`sm`,`lg`,`icon`]}}},i={args:{children:`Ship it`,variant:`default`},parameters:{docs:{source:{code:`<Button>Ship it</Button>`}}}},a={args:{children:`Secondary`,variant:`secondary`},parameters:{docs:{source:{code:`<Button variant="secondary">Secondary</Button>`}}}},o={args:{children:`Outline`,variant:`outline`},parameters:{docs:{source:{code:`<Button variant="outline">Outline</Button>`}}}},s={args:{children:`Ghost`,variant:`ghost`},parameters:{docs:{source:{code:`<Button variant="ghost">Ghost</Button>`}}}},c={args:{children:`Read the spec`,variant:`link`},parameters:{docs:{source:{code:`<Button variant="link">Read the spec</Button>`}}}},l={args:{children:`Ship it`},render:()=>(0,n.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,n.jsx)(t,{size:`sm`,children:`Small`}),(0,n.jsx)(t,{children:`Default`}),(0,n.jsx)(t,{size:`lg`,children:`Large`})]}),parameters:{docs:{source:{code:`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ship it",
    variant: "default"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button>Ship it</Button>\`
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="secondary">Secondary</Button>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="outline">Outline</Button>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="ghost">Ghost</Button>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Read the spec",
    variant: "link"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="link">Read the spec</Button>\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ship it"
  },
  render: () => <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`Primary`,`Secondary`,`Outline`,`Ghost`,`Link`,`Sizes`];export{s as Ghost,c as Link,o as Outline,i as Primary,a as Secondary,l as Sizes,u as __namedExportsOrder,r as default};