import{t as e}from"./jsx-runtime-BJJDrDjX.js";import{t}from"./button-Dn8VLFoU.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./card-Dkt8-ops.js";var c=e(),l={title:`Primitives/Card/CardHeader`,component:n,parameters:{layout:`centered`,docs:{description:{component:"# CardHeader\n\nThe top slot of a `Card`. Groups the title, description, and any\neyebrow / meta content into a single hairline-separated block.\n\n## Expected placement\nImmediately inside `<Card>`, before `CardContent`.\n\n## Allowed children\n`CardTitle`, `CardDescription`, custom eyebrow spans, and small meta\nelements. Avoid buttons or long-form copy here — use `CardFooter` or\n`CardContent` respectively.\n\n## Semantic HTML\nRenders a `<div>`. Headings inside remain semantic (`CardTitle` is a\n`<div>` styled as a heading — replace with an explicit heading element\nwhen the card represents a landmark section).\n\n## Accessibility\nKeep the title concise so screen readers announce the card's purpose in\na single phrase. Descriptions should be single sentences.\n\n## Related\n- `Card` (parent)\n- `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`"}}}},u={render:()=>(0,c.jsxs)(s,{className:`w-80`,children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(a,{children:`Design tokens`}),(0,c.jsx)(o,{children:`Semantic, themeable, versioned.`})]}),(0,c.jsx)(i,{children:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Body content.`})}),(0,c.jsx)(r,{className:`justify-end`,children:(0,c.jsx)(t,{size:`sm`,children:`Read spec`})})]}),parameters:{docs:{source:{code:`<Card>
  <CardHeader>
    <CardTitle>Design tokens</CardTitle>
    <CardDescription>Semantic, themeable, versioned.</CardDescription>
  </CardHeader>
  {/* … */}
</Card>`}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>Design tokens</CardTitle>
        <CardDescription>Semantic, themeable, versioned.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Body content.</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Read spec</Button>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: \`<Card>
  <CardHeader>
    <CardTitle>Design tokens</CardTitle>
    <CardDescription>Semantic, themeable, versioned.</CardDescription>
  </CardHeader>
  {/* … */}
</Card>\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}};var d=[`InsideCard`];export{u as InsideCard,d as __namedExportsOrder,l as default};