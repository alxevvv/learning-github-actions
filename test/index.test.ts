import { describe, expect, it } from "vitest";

import { add, mult } from "../src";

describe("index.ts", () => {
  describe("function sum", () => {
    it("should sum given numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
  });

  describe("function mult", () => {
    it("should sum given numbers", () => {
      expect(mult(2, 3)).toBe(6);
    });
  });
});
