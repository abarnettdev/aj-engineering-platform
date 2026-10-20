import assert from "node:assert/strict";
import { test } from "node:test";

const base = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:8080";
const request = (path, options) =>
  fetch(new URL(path, base), {
    signal: AbortSignal.timeout(30_000),
    ...options,
  });

for (const path of [
  "/",
  "/work",
  "/timeline",
  "/systems",
  "/engineering",
  "/contact",
  "/writing",
  "/ask-aj",
  "/work/ask-aj",
]) {
  test(`SSR ${path}`, async () => {
    const response = await request(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /<html lang="en"/);
    assert.match(html, /<main/);
    assert.doesNotMatch(html, /RealiDreams/i);
    if (path === "/") {
      assert.match(html, /Product Designer &amp; Software Engineer/);
      assert.match(html, /From first concept to production code/);
      assert.doesNotMatch(html, /Ask A\.J\. is the portfolio proof/);
    }
  });
}
test("XML sitemap and static assets", async () => {
  const sitemap = await request("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  assert.match(sitemap.headers.get("content-type"), /application\/xml/);
  assert.match(await sitemap.text(), /https:\/\/ajbarnett.tech/);
  for (const path of [
    "/robots.txt",
    "/resume.pdf",
    "/assets/aj-barnett-headshot.jpg",
    "/storybook/index.html",
  ]) {
    assert.equal((await request(path)).status, 200, path);
  }
});
test("unknown route returns 404", async () => {
  assert.equal((await request("/not-a-real-portfolio-route")).status, 404);
});
test("server APIs reject invalid requests without calling providers", async () => {
  for (const path of ["/api/ask-aj", "/api/contact"]) {
    const response = await request(path, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
    });
    assert.equal(response.status, 400, path);
  }
});
