import type { Meta, StoryObj } from "@storybook/react";
import { SeasonalDetail } from "@/components/seasonal-detail";
import { SEASONAL_DETAILS, type SeasonalVariant } from "@/lib/seasonal-details";

const orderedSeasonalIds = [
  "new-year",
  "valentine",
  "st-patrick",
  "earth-day",
  "memorial-day",
  "independence-day",
  "labor-day",
  "september-11",
  "halloween",
  "autumn",
  "christmas",
] satisfies ReadonlyArray<Exclude<SeasonalVariant, "default">>;

const variants: ReadonlyArray<{
  id: SeasonalVariant;
  label: string;
  description: string;
}> = [
  ...orderedSeasonalIds.map((id) => {
    const detail = SEASONAL_DETAILS.find((candidate) => candidate.id === id);
    if (!detail) throw new Error(`Missing seasonal detail for ${id}`);
    return detail;
  }),
  {
    id: "default",
    label: "Default",
    description: "The original AJ monogram outside a configured date range.",
  },
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
          "A decorative, calendar-driven AJ monogram. Active dates replace the black AJ circle with standalone, full-color 3D seasonal artwork; the default keeps the original AJ mark. The server render reserves transparent space until the America/New_York date resolves, so the wrong monogram never flashes. Decorations stay outside the accessibility tree, never capture pointer input, and stop moving when reduced motion is enabled. Add a future event in the typed SEASONAL_DETAILS configuration, provide an optimized transparent asset, map it in SeasonalDetail, and add boundary tests.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [...orderedSeasonalIds, "default"],
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
      <div className="group grid size-24 place-items-center">
        <SeasonalDetail
          variant={variant}
          className="seasonal-detail--preview size-20"
        />
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
          "Static review of every calendar state. Hover the marks to inspect their 3D microinteractions: October bounces, November turns from leaves and acorns into a cornucopia, Christmas rings, New Year celebrates, Valentine's Day beats, St. Patrick's Day flips, Earth Day floats, Independence Day pops, and Labor Day tilts. Memorial Day and September 11 remain still and respectful. Reduced-motion mode removes every animation and transition.",
      },
    },
  },
};
