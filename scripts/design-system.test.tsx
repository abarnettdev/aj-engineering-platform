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
import {
  AxeResults,
  AxeSummary,
  ScoreRing,
} from "../src/components/audit-results";
import { SeasonalDetail } from "../src/components/seasonal-detail";

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

  test("audit scores remain available as text", () => {
    const html = renderToStaticMarkup(
      <ScoreRing score={98} label="Performance" />,
    );
    expect(html).toContain(">98<");
    expect(html).toContain("Performance");
    expect(html).toContain('aria-hidden="true"');
  });

  test("axe evidence states the automated scope and limitation", () => {
    const html = renderToStaticMarkup(<AxeResults />);
    expect(html).toContain("0 detected issues");
    expect(html).toContain("WCAG 2.1 AA");
    expect(html).toContain("cannot prove WCAG");
  });

  test("the axe summary shares the verified audit run date", () => {
    const html = renderToStaticMarkup(<AxeSummary />);
    expect(html).toContain("axe: 0 detected issues");
    expect(html).toContain("Last run October 20, 2026");
  });

  test("seasonal details stay decorative and ignore pointer input", () => {
    const html = renderToStaticMarkup(<SeasonalDetail variant="halloween" />);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain("pointer-events-none");
    expect(html).toContain('data-season="halloween"');
    expect(html).toContain("/images/seasonal/halloween.webp");
    expect(html).toContain("seasonal-art--halloween");
  });

  test("the default seasonal monogram keeps AJ", () => {
    const html = renderToStaticMarkup(<SeasonalDetail variant="default" />);
    expect(html).toContain('data-season="default"');
    expect(html).toContain(">AJ<");
  });

  test("the server render reserves space without flashing the AJ monogram", () => {
    const html = renderToStaticMarkup(<SeasonalDetail />);
    expect(html).toContain('data-season="pending"');
    expect(html).not.toContain("seasonal-monogram");
    expect(html).not.toContain(">AJ<");
  });
});
