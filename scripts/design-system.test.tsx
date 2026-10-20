import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Button } from "../src/components/ui/button";
import { Checkbox } from "../src/components/ui/checkbox";
import { Input } from "../src/components/ui/input";
import { Label } from "../src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../src/components/ui/tabs";

describe("public design-system contracts", () => {
  test("button keeps native disabled semantics and a visible-focus class", () => {
    const html = renderToStaticMarkup(<Button disabled>Save changes</Button>);

    expect(html).toContain("<button");
    expect(html).toContain("disabled");
    expect(html).toContain("focus-visible:ring-2");
    expect(html).toContain("Save changes");
  });

  test("input guidance stays programmatically connected", () => {
    const html = renderToStaticMarkup(
      <div>
        <Label htmlFor="contract-email">Email address</Label>
        <Input id="contract-email" aria-describedby="contract-help" />
        <p id="contract-help">Use a work email.</p>
      </div>,
    );

    expect(html).toContain('for="contract-email"');
    expect(html).toContain('id="contract-email"');
    expect(html).toContain('aria-describedby="contract-help"');
  });

  test("checkbox exposes its checked state through the shared primitive", () => {
    const html = renderToStaticMarkup(
      <Checkbox aria-label="Product updates" defaultChecked />,
    );

    expect(html).toContain('role="checkbox"');
    expect(html).toContain('aria-checked="true"');
    expect(html).toContain('aria-label="Product updates"');
  });

  test("tabs connect the tab list, selected tab, and active panel", () => {
    const html = renderToStaticMarkup(
      <Tabs defaultValue="overview">
        <TabsList aria-label="Documentation sections">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Overview content</TabsContent>
        <TabsContent value="api">API content</TabsContent>
      </Tabs>,
    );

    expect(html).toContain('role="tablist"');
    expect(html).toContain('role="tab"');
    expect(html).toContain('aria-selected="true"');
    expect(html).toContain('role="tabpanel"');
    expect(html).toContain("Overview content");
  });
});
