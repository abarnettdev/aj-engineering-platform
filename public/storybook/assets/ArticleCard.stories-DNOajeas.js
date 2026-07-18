import{t as e}from"./jsx-runtime-BBNe6-Ph.js";import{t}from"./article-card-Bmgx5W1E.js";var n=e(),r={title:`Composites/ArticleCard/ArticleCard`,parameters:{layout:`centered`,docs:{description:{component:"# ArticleCard\n\nCompound editorial card composed of five named sub-components. Wraps\na `Tilt3D` shell and renders as a link when `to` (TanStack Router) or\n`href` (external) is provided.\n\n## Sub-components\n- `ArticleCard.Meta` — tag + read-time chip\n- `ArticleCard.Title` — headline\n- `ArticleCard.Dek` — subtitle paragraph\n- `ArticleCard.Footer` — trailing call-to-action row\n\nEach sub-component has its own documentation page under\n`Composites/ArticleCard/`.\n\n## When to use\n- Field-note previews on `/writing`.\n- Related-article rails at the bottom of an article page.\n\n## When not to use\n- Case study surfaces — use the Work Case Study pattern instead.\n- Non-article resources (metrics, projects) — use `Card`.\n\n## Accessibility\nThe whole card is a single tab stop with a focus ring. The inner\n`<article>` gives assistive tech a landmark; the sub-slots keep the\nannounced content grouped.\n\n## Related\n- `ArticleCard.Meta`, `ArticleCard.Title`, `ArticleCard.Dek`, `ArticleCard.Footer`\n- `Card`, `Badge`"}}}},i={render:()=>(0,n.jsx)(`div`,{className:`w-[22rem]`,children:(0,n.jsxs)(t,{href:`/writing/tokens-are-a-language`,children:[(0,n.jsx)(t.Meta,{tag:`Design Systems`,read:`6 min`}),(0,n.jsx)(t.Title,{children:`Why tokens are a language`}),(0,n.jsx)(t.Dek,{children:`How tokens become the shared contract between design, engineering, and product.`}),(0,n.jsx)(t.Footer,{children:`Read the note`})]})}),parameters:{docs:{source:{code:`<ArticleCard href="/writing/tokens-are-a-language">
  <ArticleCard.Meta tag="Design Systems" read="6 min" />
  <ArticleCard.Title>Why tokens are a language</ArticleCard.Title>
  <ArticleCard.Dek>
    How tokens become the shared contract between design, engineering,
    and product.
  </ArticleCard.Dek>
  <ArticleCard.Footer>Read the note</ArticleCard.Footer>
</ArticleCard>`}}}},a={render:()=>(0,n.jsx)(`div`,{className:`w-[36rem]`,children:(0,n.jsxs)(t,{href:`/writing/composition-over-configuration`,featured:!0,children:[(0,n.jsx)(t.Meta,{tag:`Architecture`,read:`9 min`}),(0,n.jsx)(t.Title,{children:`Composition over configuration`}),(0,n.jsx)(t.Dek,{children:`Small named slots outlive a monolithic parent with thirty flags.`}),(0,n.jsx)(t.Footer,{children:`Read the note`})]})}),parameters:{docs:{source:{code:`<ArticleCard href="/…" featured>
  <ArticleCard.Meta tag="Architecture" read="9 min" />
  <ArticleCard.Title>Composition over configuration</ArticleCard.Title>
  <ArticleCard.Dek>…</ArticleCard.Dek>
  <ArticleCard.Footer>Read the note</ArticleCard.Footer>
</ArticleCard>`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[22rem]">
      <ArticleCard href="/writing/tokens-are-a-language">
        <ArticleCard.Meta tag="Design Systems" read="6 min" />
        <ArticleCard.Title>Why tokens are a language</ArticleCard.Title>
        <ArticleCard.Dek>
          How tokens become the shared contract between design, engineering,
          and product.
        </ArticleCard.Dek>
        <ArticleCard.Footer>Read the note</ArticleCard.Footer>
      </ArticleCard>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<ArticleCard href="/writing/tokens-are-a-language">
  <ArticleCard.Meta tag="Design Systems" read="6 min" />
  <ArticleCard.Title>Why tokens are a language</ArticleCard.Title>
  <ArticleCard.Dek>
    How tokens become the shared contract between design, engineering,
    and product.
  </ArticleCard.Dek>
  <ArticleCard.Footer>Read the note</ArticleCard.Footer>
</ArticleCard>\`
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[36rem]">
      <ArticleCard href="/writing/composition-over-configuration" featured>
        <ArticleCard.Meta tag="Architecture" read="9 min" />
        <ArticleCard.Title>Composition over configuration</ArticleCard.Title>
        <ArticleCard.Dek>
          Small named slots outlive a monolithic parent with thirty flags.
        </ArticleCard.Dek>
        <ArticleCard.Footer>Read the note</ArticleCard.Footer>
      </ArticleCard>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<ArticleCard href="/…" featured>
  <ArticleCard.Meta tag="Architecture" read="9 min" />
  <ArticleCard.Title>Composition over configuration</ArticleCard.Title>
  <ArticleCard.Dek>…</ArticleCard.Dek>
  <ArticleCard.Footer>Read the note</ArticleCard.Footer>
</ArticleCard>\`
      }
    }
  }
}`,...a.parameters?.docs?.source}}};var o=[`Default`,`Featured`];export{i as Default,a as Featured,o as __namedExportsOrder,r as default};