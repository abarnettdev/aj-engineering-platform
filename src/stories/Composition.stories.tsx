import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/primitives/card";

const meta: Meta<typeof Card> = {
  title: "Philosophy/Composition over Configuration",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "This portfolio is built on a design system that prefers composition to configuration. Small, named slots compose into rich UI without leaking props into a monolithic parent.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

/**
 * Configuration to avoid — every new visual variation demands a new prop.
 * The parent knows too much; the API stops teaching intent.
 */
export const ConfigurationToAvoid: Story = {
  name: "❌ Configuration to avoid",
  render: () => (
    <div className="max-w-md space-y-4">
      <pre className="mono overflow-auto border border-border bg-background p-4 text-[11px] leading-relaxed text-muted-foreground">
{`<Card
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
/>`}
      </pre>
      <p className="text-sm text-muted-foreground">
        Every new use case adds another prop. The parent grows unbounded, and
        callers cannot express layouts the author did not anticipate.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Card
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
/>`,
      },
    },
  },
};

/**
 * Composition preferred — small slots that combine.
 * The parent stays tiny; consumers own the layout.
 */
export const CompositionPreferred: Story = {
  name: "✅ Composition preferred",
  render: () => (
    <div className="max-w-md">
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
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Card tone="raised">
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
</Card>`,
      },
    },
  },
};

/**
 * The same primitive, rearranged. No new props on Card.
 */
export const RearrangedSameAPI: Story = {
  name: "Same API, different layout",
  render: () => (
    <div className="grid max-w-3xl gap-4 md:grid-cols-2">
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
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Card>
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
</Card>`,
      },
    },
  },
};
