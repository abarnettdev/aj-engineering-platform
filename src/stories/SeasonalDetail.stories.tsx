import type { Meta, StoryObj } from "@storybook/react";
import { SeasonalDetail } from "@/components/seasonal-detail";
import { SEASONAL_DETAILS, type SeasonalVariant } from "@/lib/seasonal-details";

const variants: ReadonlyArray<{
  id: SeasonalVariant;
  label: string;
  description: string;
}> = [
  {
    id: "default",
    label: "Default",
    description: "The original AJ monogram outside a configured date range.",
  },
  ...SEASONAL_DETAILS,
];

const meta = {
  title: "Patterns/Seasonal Details/Seasonal Monogram",
  component: SeasonalDetail,
  parameters: {
    layout: "centered",
    controls: { include: ["variant", "className"] },
    docs: {
      description: {
        component:
          "A decorative, calendar-driven AJ monogram. Active dates replace the black AJ circle with a standalone, full-color seasonal SVG; the default keeps the original AJ mark. Runtime dates resolve in America/New_York. Decorations stay outside the accessibility tree, never capture pointer input, and stop moving when reduced motion is enabled. Add a future event in the typed SEASONAL_DETAILS configuration, then add its SVG treatment and boundary tests.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", ...SEASONAL_DETAILS.map((detail) => detail.id)],
      description: "Overrides the calendar so every treatment can be reviewed.",
      table: { category: "State" },
    },
    className: {
      control: "text",
      description: "Adds layout or size classes without changing the variant.",
      table: { category: "Appearance" },
    },
  },
  args: { variant: "halloween" },
} satisfies Meta<typeof SeasonalDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

function Preview({ variant }: { variant: SeasonalVariant }) {
  return (
    <div className="p-8">
      <div className="group grid size-14 place-items-center">
        <SeasonalDetail variant={variant} className="size-12" />
      </div>
    </div>
  );
}

export const Playground: Story = {
  render: (args) => <Preview variant={args.variant ?? "default"} />,
};

export const EverySeason: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-4">
      {variants.map((detail) => (
        <figure key={detail.id} className="grid justify-items-center gap-2">
          <Preview variant={detail.id} />
          <figcaption className="max-w-36 text-center text-xs text-muted-foreground">
            <strong className="block text-ink">{detail.label}</strong>
            {detail.description}
          </figcaption>
        </figure>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Static review of the calendar states. October uses an orange jack-o'-lantern, November a brown turkey, December a blue snowflake, New Year a firework, and July a waving flag. Hover the marks to inspect optional microinteractions. Remembrance treatments remain still.",
      },
    },
  },
};
