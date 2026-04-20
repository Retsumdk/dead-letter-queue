import { describe, test, expect } from "bun:test";
describe("dead-letter-queue", () => {
  test("module loads", async () => { const m = await import("./index"); expect(m).toBeDefined(); });
});
