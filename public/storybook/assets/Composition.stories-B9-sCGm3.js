import{s as e}from"./iframe-C8PbLLHQ.js";import{t}from"./react-CRC35vgx.js";import{t as n}from"./jsx-runtime-BJJDrDjX.js";import{t as r}from"./utils-DXalBF5w.js";var i=e(t(),1),a=n(),o=(0,i.createContext)({density:`comfortable`}),s={surface:`border-border bg-card`,raised:`border-border bg-card shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]`,accent:`border-gold/50 bg-card`},c=(0,i.forwardRef)(function({tone:e=`surface`,density:t=`comfortable`,as:n=`div`,className:i,children:c,...l},u){return(0,a.jsx)(o.Provider,{value:{density:t},children:(0,a.jsx)(n,{ref:u,className:r(`group/card relative flex flex-col border transition-colors`,s[e],i),...l,children:c})})}),l=e=>e===`compact`?`px-5`:`px-7`,u=e=>e===`compact`?`py-4`:`py-5`;function d({className:e,children:t,...n}){let{density:s}=(0,i.useContext)(o);return(0,a.jsx)(`header`,{className:r(`flex items-baseline justify-between gap-4 border-b border-border`,l(s),u(s),e),...n,children:t})}function f({className:e,children:t,...n}){return(0,a.jsx)(`p`,{className:r(`mono text-[10px] uppercase tracking-[0.24em] text-gold`,e),...n,children:t})}function p({className:e,children:t,as:n=`h3`,...i}){return(0,a.jsx)(n,{className:r(`font-display text-xl font-medium tracking-tight text-ink`,e),...i,children:t})}function m({className:e,children:t,...n}){return(0,a.jsx)(`p`,{className:r(`mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground`,e),...n,children:t})}function h({className:e,children:t,...n}){return(0,a.jsx)(`div`,{className:r(`relative overflow-hidden border-b border-border`,e),...n,children:t})}function g({className:e,children:t,...n}){let{density:s}=(0,i.useContext)(o);return(0,a.jsx)(`div`,{className:r(`flex flex-col gap-4 text-foreground/85`,l(s),s===`compact`?`py-4`:`py-6`,e),...n,children:t})}function _({className:e,children:t,align:n=`start`,...s}){let{density:c}=(0,i.useContext)(o);return(0,a.jsx)(`footer`,{className:r(`mt-auto flex items-center gap-3 border-t border-border`,l(c),u(c),n===`end`&&`justify-end`,n===`between`&&`justify-between`,e),...s,children:t})}var v=Object.assign(c,{Header:d,Eyebrow:f,Title:p,Meta:m,Media:h,Body:g,Footer:_});c.__docgenInfo={description:``,methods:[],displayName:`CardRoot`,props:{tone:{required:!1,tsType:{name:`union`,raw:`"surface" | "raised" | "accent"`,elements:[{name:`literal`,value:`"surface"`},{name:`literal`,value:`"raised"`},{name:`literal`,value:`"accent"`}]},description:"Visual weight. `accent` gets a gold hairline; `raised` lifts on the page.",defaultValue:{value:`"surface"`,computed:!1}},density:{required:!1,tsType:{name:`union`,raw:`"comfortable" | "compact"`,elements:[{name:`literal`,value:`"comfortable"`},{name:`literal`,value:`"compact"`}]},description:`Spacing rhythm inherited by sub-components.`,defaultValue:{value:`"comfortable"`,computed:!1}},as:{required:!1,tsType:{name:`union`,raw:`"div" | "article" | "section"`,elements:[{name:`literal`,value:`"div"`},{name:`literal`,value:`"article"`},{name:`literal`,value:`"section"`}]},description:`Render as a semantic <article> when the card represents a self-contained resource.`,defaultValue:{value:`"div"`,computed:!1}}},composes:[`HTMLAttributes`]},d.__docgenInfo={description:``,methods:[],displayName:`CardHeader`},f.__docgenInfo={description:``,methods:[],displayName:`CardEyebrow`},p.__docgenInfo={description:``,methods:[],displayName:`CardTitle`,props:{as:{required:!1,tsType:{name:`union`,raw:`"h2" | "h3" | "h4"`,elements:[{name:`literal`,value:`"h2"`},{name:`literal`,value:`"h3"`},{name:`literal`,value:`"h4"`}]},description:``,defaultValue:{value:`"h3"`,computed:!1}}}},m.__docgenInfo={description:``,methods:[],displayName:`CardMeta`},h.__docgenInfo={description:``,methods:[],displayName:`CardMedia`},g.__docgenInfo={description:``,methods:[],displayName:`CardBody`},_.__docgenInfo={description:``,methods:[],displayName:`CardFooter`,props:{align:{required:!1,tsType:{name:`union`,raw:`"start" | "between" | "end"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"between"`},{name:`literal`,value:`"end"`}]},description:``,defaultValue:{value:`"start"`,computed:!1}}}};var y={title:`Philosophy/Composition over Configuration`,parameters:{layout:`padded`,docs:{description:{component:`This portfolio is built on a design system that prefers composition to configuration. Small, named slots compose into rich UI without leaking props into a monolithic parent.`}}}},b={name:`❌ Configuration to avoid`,render:()=>(0,a.jsxs)(`div`,{className:`max-w-md space-y-4`,children:[(0,a.jsx)(`pre`,{className:`mono overflow-auto border border-border bg-background p-4 text-[11px] leading-relaxed text-muted-foreground`,children:`<Card
  title="Primary action"
  subtitle="Component · Button"
  meta="v4.2 · AA"
  icon={<Sparkles />}
  actionLabel="Ship it"
  actionVariant="primary"
  showDivider
  hasFooter
  footerAlign="end"
  densityCompact
/>`}),(0,a.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Every new use case adds another prop. The parent grows unbounded, and callers cannot express layouts the author did not anticipate.`})]}),parameters:{docs:{source:{code:`<Card
  title="Primary action"
  subtitle="Component · Button"
  meta="v4.2 · AA"
  icon={<Sparkles />}
  actionLabel="Ship it"
  actionVariant="primary"
  showDivider
  hasFooter
  footerAlign="end"
  densityCompact
/>`}}}},x={name:`✅ Composition preferred`,render:()=>(0,a.jsx)(`div`,{className:`max-w-md`,children:(0,a.jsxs)(v,{tone:`raised`,children:[(0,a.jsxs)(v.Header,{children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(v.Eyebrow,{children:`Component · Button`}),(0,a.jsx)(v.Title,{children:`Primary action`})]}),(0,a.jsx)(v.Meta,{children:`v4.2 · AA`})]}),(0,a.jsx)(v.Body,{children:(0,a.jsx)(`p`,{className:`text-sm`,children:`Slots are real components. Reorder, omit, or wrap them; the parent contract does not change.`})}),(0,a.jsx)(v.Footer,{align:`end`,children:(0,a.jsx)(`button`,{className:`bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-background`,children:`Ship it`})})]})}),parameters:{docs:{source:{code:`<Card tone="raised">
  <Card.Header>
    <div>
      <Card.Eyebrow>Component · Button</Card.Eyebrow>
      <Card.Title>Primary action</Card.Title>
    </div>
    <Card.Meta>v4.2 · AA</Card.Meta>
  </Card.Header>
  <Card.Body>
    <p className="text-sm">
      Slots are real components. Reorder, omit, or wrap them; the parent
      contract does not change.
    </p>
  </Card.Body>
  <Card.Footer align="end">
    <Button>Ship it</Button>
  </Card.Footer>
</Card>`}}}},S={name:`Same API, different layout`,render:()=>(0,a.jsxs)(`div`,{className:`grid max-w-3xl gap-4 md:grid-cols-2`,children:[(0,a.jsx)(v,{children:(0,a.jsxs)(v.Body,{children:[(0,a.jsx)(v.Eyebrow,{children:`Slot-first`}),(0,a.jsx)(v.Title,{as:`h4`,children:`No header at all`}),(0,a.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Omit any slot. The card still renders correctly.`})]})}),(0,a.jsxs)(v,{tone:`accent`,density:`compact`,children:[(0,a.jsx)(v.Header,{children:(0,a.jsx)(v.Title,{as:`h4`,children:`Compact + accent tone`})}),(0,a.jsx)(v.Body,{children:(0,a.jsx)(`p`,{className:`text-sm`,children:`Density and tone are the only two configuration props on Card. Everything else is composition.`})})]})]}),parameters:{docs:{source:{code:`<Card>
  <Card.Body>
    <Card.Eyebrow>Slot-first</Card.Eyebrow>
    <Card.Title as="h4">No header at all</Card.Title>
    <p className="text-sm text-muted-foreground">
      Omit any slot. The card still renders correctly.
    </p>
  </Card.Body>
</Card>

<Card tone="accent" density="compact">
  <Card.Header>
    <Card.Title as="h4">Compact + accent tone</Card.Title>
  </Card.Header>
  <Card.Body>
    <p className="text-sm">
      Density and tone are the only two configuration props on Card.
      Everything else is composition.
    </p>
  </Card.Body>
</Card>`}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "❌ Configuration to avoid",
  render: () => <div className="max-w-md space-y-4">
      <pre className="mono overflow-auto border border-border bg-background p-4 text-[11px] leading-relaxed text-muted-foreground">
      {\`<Card
  title="Primary action"
  subtitle="Component · Button"
  meta="v4.2 · AA"
  icon={<Sparkles />}
  actionLabel="Ship it"
  actionVariant="primary"
  showDivider
  hasFooter
  footerAlign="end"
  densityCompact
/>\`}
      </pre>
      <p className="text-sm text-muted-foreground">
        Every new use case adds another prop. The parent grows unbounded, and
        callers cannot express layouts the author did not anticipate.
      </p>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Card
  title="Primary action"
  subtitle="Component · Button"
  meta="v4.2 · AA"
  icon={<Sparkles />}
  actionLabel="Ship it"
  actionVariant="primary"
  showDivider
  hasFooter
  footerAlign="end"
  densityCompact
/>\`
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Configuration to avoid — every new visual variation demands a new prop.
The parent knows too much; the API stops teaching intent.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "✅ Composition preferred",
  render: () => <div className="max-w-md">
      <Card tone="raised">
        <Card.Header>
          <div>
            <Card.Eyebrow>Component · Button</Card.Eyebrow>
            <Card.Title>Primary action</Card.Title>
          </div>
          <Card.Meta>v4.2 · AA</Card.Meta>
        </Card.Header>
        <Card.Body>
          <p className="text-sm">
            Slots are real components. Reorder, omit, or wrap them; the
            parent contract does not change.
          </p>
        </Card.Body>
        <Card.Footer align="end">
          <button className="bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-background">
            Ship it
          </button>
        </Card.Footer>
      </Card>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Card tone="raised">
  <Card.Header>
    <div>
      <Card.Eyebrow>Component · Button</Card.Eyebrow>
      <Card.Title>Primary action</Card.Title>
    </div>
    <Card.Meta>v4.2 · AA</Card.Meta>
  </Card.Header>
  <Card.Body>
    <p className="text-sm">
      Slots are real components. Reorder, omit, or wrap them; the parent
      contract does not change.
    </p>
  </Card.Body>
  <Card.Footer align="end">
    <Button>Ship it</Button>
  </Card.Footer>
</Card>\`
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`Composition preferred — small slots that combine.
The parent stays tiny; consumers own the layout.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Same API, different layout",
  render: () => <div className="grid max-w-3xl gap-4 md:grid-cols-2">
      <Card>
        <Card.Body>
          <Card.Eyebrow>Slot-first</Card.Eyebrow>
          <Card.Title as="h4">No header at all</Card.Title>
          <p className="text-sm text-muted-foreground">
            Omit any slot. The card still renders correctly.
          </p>
        </Card.Body>
      </Card>
      <Card tone="accent" density="compact">
        <Card.Header>
          <Card.Title as="h4">Compact + accent tone</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm">
            Density and tone are the only two configuration props on Card.
            Everything else is composition.
          </p>
        </Card.Body>
      </Card>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<Card>
  <Card.Body>
    <Card.Eyebrow>Slot-first</Card.Eyebrow>
    <Card.Title as="h4">No header at all</Card.Title>
    <p className="text-sm text-muted-foreground">
      Omit any slot. The card still renders correctly.
    </p>
  </Card.Body>
</Card>

<Card tone="accent" density="compact">
  <Card.Header>
    <Card.Title as="h4">Compact + accent tone</Card.Title>
  </Card.Header>
  <Card.Body>
    <p className="text-sm">
      Density and tone are the only two configuration props on Card.
      Everything else is composition.
    </p>
  </Card.Body>
</Card>\`
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`The same primitive, rearranged. No new props on Card.`,...S.parameters?.docs?.description}}};var C=[`ConfigurationToAvoid`,`CompositionPreferred`,`RearrangedSameAPI`];export{x as CompositionPreferred,b as ConfigurationToAvoid,S as RearrangedSameAPI,C as __namedExportsOrder,y as default};