import { describe, expect, it } from "vitest";

import { pow, sum, tim } from "../src";

describe("index.ts", () => {
  describe("function sum", () => {
    it("should sum given numbers", () => {
      expect(sum(2, 3)).toBe(5);
    });

    it("should place the first argument's value instead second if latter is omitted", () => {
      expect(sum(2)).toBe(4);
    });
  });

  describe("function tim", () => {
    it("should sum given numbers", () => {
      expect(tim(2, 3)).toBe(6);
    });

    it("should place the first argument's value instead second if latter is omitted", () => {
      expect(tim(3)).toBe(9);
    });
  });

  describe("function pow", () => {
    it("should power given number", () => {
      expect(pow(5)).toBe(25);
      expect(pow(5, 4)).toBe(625);
    });
  });
});
