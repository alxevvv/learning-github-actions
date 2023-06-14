import { describe, expect, it } from "vitest";

import { add, mult } from "../src";

describe("index.ts", () => {
  describe("function sum", () => {
    it("should sum given numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should place the first argument's value instead second if latter is omitted", () => {
      expect(add(2)).toBe(4);
    });
  });

  describe("function mult", () => {
    it("should sum given numbers", () => {
      expect(mult(2, 3)).toBe(6);
    });

    it("should place the first argument's value instead second if latter is omitted", () => {
      expect(mult(3)).toBe(9);
    });
  });
});
