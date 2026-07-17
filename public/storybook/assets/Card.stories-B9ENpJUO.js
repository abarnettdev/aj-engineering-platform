import{t as e}from"./jsx-runtime-B4XW9ad0.js";import{t}from"./button-CLiQ9REN.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./card-Ok7JWXVl.js";var c=e(),l={title:`Primitives/Card/Card`,component:s,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"# Card\n\nSurface primitive composed of six named slots. The parent stays a tiny\nshell; consumers own the layout by placing `CardHeader`, `CardTitle`,\n`CardDescription`, `CardContent`, and `CardFooter` inside.\n\n## When to use\n- Grouping related content into a discrete visual unit.\n- Presenting a self-contained resource (project, article preview, metric).\n\n## When not to use\n- Body copy that flows in a document — use `<article>` + prose classes.\n- Full-page hero surfaces — use `PageHero` instead.\n\n## Accessibility\n- Renders a `<div>` by default. When the card is a self-contained\n  resource, wrap it in `<article>` or use the semantic slot components.\n- Ensure the highest heading inside the card follows the outer heading\n  order (do not skip levels).\n\n## Related components\n- `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`\n- `Button`, `Badge`, `Section`"}}}},u={render:()=>(0,c.jsxs)(s,{className:`w-80`,children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(a,{children:`Design tokens`}),(0,c.jsx)(o,{children:`Semantic, themeable, versioned.`})]}),(0,c.jsx)(i,{children:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Tokens describe intent. Components consume them. Themes swap them.`})}),(0,c.jsx)(r,{className:`justify-end`,children:(0,c.jsx)(t,{children:`Read spec`})})]}),parameters:{docs:{source:{code:`<Card className="w-80">
  <CardHeader>
    <CardTitle>Design tokens</CardTitle>
    <CardDescription>Semantic, themeable, versioned.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Tokens describe intent. Components consume them. Themes swap them.
    </p>
  </CardContent>
  <CardFooter className="justify-end">
    <Button>Read spec</Button>
  </CardFooter>
</Card>`}}}},d={render:()=>(0,c.jsx)(s,{className:`w-80`,children:(0,c.jsx)(i,{className:`p-6`,children:(0,c.jsx)(`p`,{className:`text-sm`,children:`Card with a single content slot — no header, no footer.`})})}),parameters:{docs:{source:{code:`<Card className="w-80">
  <CardContent className="p-6">
    <p className="text-sm">Card with a single content slot.</p>
  </CardContent>
</Card>`}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <CardTitle>Design tokens</CardTitle>
        <CardDescription>Semantic, themeable, versioned.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Tokens describe intent. Components consume them. Themes swap them.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button>Read spec</Button>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: fullCode
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardContent className="p-6">
        <p className="text-sm">
          Card with a single content slot — no header, no footer.
        </p>
      </CardContent>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: \`<Card className="w-80">
  <CardContent className="p-6">
    <p className="text-sm">Card with a single content slot.</p>
  </CardContent>
</Card>\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};var f=[`AllSlots`,`ContentOnly`];export{u as AllSlots,d as ContentOnly,f as __namedExportsOrder,l as default};