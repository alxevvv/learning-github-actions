import { describe, expect, it } from "vitest";

import { add } from "../src";

describe("function add", () => {
  it("should sum given numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});
