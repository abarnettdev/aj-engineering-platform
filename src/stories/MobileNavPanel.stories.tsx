import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MobileNavPanelContent } from "@/components/site-nav";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const meta = {
  title: "Navigation/Mobile Panel",
  component: MobileNavPanelContent,
  parameters: { layout: "fullscreen" },
  argTypes: {
    currentPath: { control: "text" },
    onNavigate: { action: "navigated" },
  },
  args: {
    currentPath: "/ask-aj",
    onNavigate: fn(),
  },
} satisfies Meta<typeof MobileNavPanelContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OpenWithCloseIconOnly: Story = {
  render: (args) => (
    <div className="h-[640px] bg-background">
      <Sheet open>
        <SheetContent
          id="mobile-nav-panel"
          side="right"
          className="flex w-[min(22rem,100vw)] flex-col gap-0 border-l border-border bg-background p-0"
        >
          <MobileNavPanelContent
            {...args}
            renderLink={({ to, className, onClick, children }) => (
              <a href={to} className={className} onClick={onClick}>
                {children}
              </a>
            )}
          />
        </SheetContent>
      </Sheet>
    </div>
  ),
};
