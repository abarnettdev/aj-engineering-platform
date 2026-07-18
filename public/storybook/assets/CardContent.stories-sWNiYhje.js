import{t as e}from"./jsx-runtime-BBNe6-Ph.js";import{t}from"./button-CYpBuK43.js";import{a as n,i as r,n as i,o as a,t as o}from"./card-Dx2Lvy5Z.js";var s=e(),c={title:`Primitives/Card/CardContent`,component:i,parameters:{layout:`centered`,docs:{description:{component:"# CardContent\n\nThe main body slot of a `Card`. Owns padding by default and inherits\ntypography from the surrounding surface.\n\n## Expected placement\nBetween `CardHeader` and `CardFooter`. Either sibling is optional.\n\n## Allowed children\nAny body content — prose, lists, images, embedded components.\n\n## Semantic HTML\nRenders a `<div>`. Use semantic elements inside (`<p>`, `<ul>`, etc.)\nso screen readers announce structure correctly.\n\n## Related\n- `Card`, `CardHeader`, `CardFooter`"}}}},l={render:()=>(0,s.jsxs)(o,{className:`w-80`,children:[(0,s.jsx)(n,{children:(0,s.jsx)(a,{children:`Metrics`})}),(0,s.jsx)(i,{children:(0,s.jsxs)(`ul`,{className:`space-y-2 text-sm`,children:[(0,s.jsx)(`li`,{children:`25+ years shipping`}),(0,s.jsx)(`li`,{children:`170+ UI assets maintained`}),(0,s.jsx)(`li`,{children:`10+ teams multiplied`})]})}),(0,s.jsx)(r,{className:`justify-end`,children:(0,s.jsx)(t,{size:`sm`,variant:`outline`,children:`Read more`})})]}),parameters:{docs:{source:{code:`<CardContent>
  <ul className="space-y-2 text-sm">
    <li>25+ years shipping</li>
    <li>170+ UI assets maintained</li>
    <li>10+ teams multiplied</li>
  </ul>
</CardContent>`}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li>25+ years shipping</li>
          <li>170+ UI assets maintained</li>
          <li>10+ teams multiplied</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm" variant="outline">
          Read more
        </Button>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: \`<CardContent>
  <ul className="space-y-2 text-sm">
    <li>25+ years shipping</li>
    <li>170+ UI assets maintained</li>
    <li>10+ teams multiplied</li>
  </ul>
</CardContent>\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`InsideCard`];export{l as InsideCard,u as __namedExportsOrder,c as default};