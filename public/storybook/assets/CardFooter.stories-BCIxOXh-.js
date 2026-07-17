import{t as e}from"./jsx-runtime-B4XW9ad0.js";import{t}from"./button-CLiQ9REN.js";import{a as n,i as r,n as i,o as a,t as o}from"./card-Ok7JWXVl.js";var s=e(),c={title:`Primitives/Card/CardFooter`,component:r,parameters:{layout:`centered`,docs:{description:{component:`# CardFooter

The bottom slot of a \`Card\`. Reserved for actions and metadata — never
for body copy.

## Expected placement
Last child of \`Card\`. Typically holds a single primary action, or an
action-plus-meta pair aligned to opposite edges.

## Allowed children
\`Button\`, links, small \`Badge\`s, timestamps. Keep the count to three or
fewer to avoid competing calls to action.

## Semantic HTML
Renders a \`<div>\` with flex layout. Add \`justify-end\` for a single
trailing action; \`justify-between\` for action-plus-meta pairs.

## Accessibility
Buttons in a footer must have meaningful labels — avoid "Learn more"
with no context. Prefer "Read the spec" or "Open the case study".

## Related
- \`Card\`, \`CardHeader\`, \`Button\``}}}},l={render:()=>(0,s.jsxs)(o,{className:`w-80`,children:[(0,s.jsx)(n,{children:(0,s.jsx)(a,{children:`Read the spec`})}),(0,s.jsx)(i,{children:(0,s.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Design tokens · v4.2 · WCAG 2.1 AA.`})}),(0,s.jsx)(r,{className:`justify-end`,children:(0,s.jsx)(t,{size:`sm`,children:`Open spec`})})]}),parameters:{docs:{source:{code:`<CardFooter className="justify-end">
  <Button size="sm">Open spec</Button>
</CardFooter>`}}}},u={render:()=>(0,s.jsxs)(o,{className:`w-80`,children:[(0,s.jsx)(n,{children:(0,s.jsx)(a,{children:`Field note`})}),(0,s.jsx)(i,{children:(0,s.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Why tokens are a language.`})}),(0,s.jsxs)(r,{className:`justify-between`,children:[(0,s.jsx)(`span`,{className:`mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground`,children:`6 min · Design Systems`}),(0,s.jsx)(t,{size:`sm`,variant:`outline`,children:`Read`})]})]}),parameters:{docs:{source:{code:`<CardFooter className="justify-between">
  <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
    6 min · Design Systems
  </span>
  <Button size="sm" variant="outline">Read</Button>
</CardFooter>`}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>Read the spec</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Design tokens · v4.2 · WCAG 2.1 AA.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Open spec</Button>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: \`<CardFooter className="justify-end">
  <Button size="sm">Open spec</Button>
</CardFooter>\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>Field note</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Why tokens are a language.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          6 min · Design Systems
        </span>
        <Button size="sm" variant="outline">
          Read
        </Button>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: \`<CardFooter className="justify-between">
  <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
    6 min · Design Systems
  </span>
  <Button size="sm" variant="outline">Read</Button>
</CardFooter>\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}};var d=[`TrailingAction`,`ActionAndMeta`];export{u as ActionAndMeta,l as TrailingAction,d as __namedExportsOrder,c as default};