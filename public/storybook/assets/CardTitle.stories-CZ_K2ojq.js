import{t as e}from"./jsx-runtime-BBNe6-Ph.js";import{a as t,n,o as r,r as i,t as a}from"./card-Dx2Lvy5Z.js";var o=e(),s={title:`Primitives/Card/CardTitle`,component:r,parameters:{layout:`centered`,docs:{description:{component:`# CardTitle

The primary label of a card. Short, noun-first, no trailing period.

## Expected placement
Inside \`CardHeader\`, before \`CardDescription\`.

## Allowed children
Plain text and small inline emphasis. No links, no icons — those belong
in \`CardHeader\` alongside the title.

## Semantic HTML
Renders a \`<div>\` styled as a heading. When the card is a landmark
section (e.g. an article preview), wrap the title text in the
appropriate \`<h2>\`–\`<h4>\` inside \`CardTitle\` to preserve heading order.

## Accessibility
Keep titles under ~60 characters. Screen readers announce the whole
card region; a shorter title reduces friction.

## Related
- \`Card\`, \`CardHeader\`, \`CardDescription\``}}}},c={render:()=>(0,o.jsxs)(a,{className:`w-80`,children:[(0,o.jsxs)(t,{children:[(0,o.jsx)(r,{children:`Design tokens`}),(0,o.jsx)(i,{children:`Semantic, themeable, versioned.`})]}),(0,o.jsx)(n,{children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`…`})})]}),parameters:{docs:{source:{code:`<CardHeader>
  <CardTitle>Design tokens</CardTitle>
</CardHeader>`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>Design tokens</CardTitle>
        <CardDescription>Semantic, themeable, versioned.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">…</p>
      </CardContent>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: \`<CardHeader>
  <CardTitle>Design tokens</CardTitle>
</CardHeader>\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};var l=[`InsideCard`];export{c as InsideCard,l as __namedExportsOrder,s as default};