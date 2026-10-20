import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const meta = {
  title: "Primitives/Active Supporting Primitives",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Supporting primitives currently used by the site. Each example inherits the same coral focus, border, surface, radius, and typography tokens as production.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const DialogExample: Story = {
  name: "Dialog",
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Project details</DialogTitle>
        <DialogDescription>
          Focused information in an accessible modal surface.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  ),
};

export const FormAndStatePrimitives: Story = {
  render: () => (
    <div className="grid w-[22rem] gap-5 rounded-2xl border border-border bg-card p-6">
      <Textarea aria-label="Message" placeholder="Tell AJ about the role…" />
      <Separator />
      <Skeleton className="h-10 w-full" />
      <div className="flex gap-3">
        <Toggle aria-label="Toggle compact view">Compact</Toggle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Why?</Button>
            </TooltipTrigger>
            <TooltipContent>More context for the action.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  ),
};
