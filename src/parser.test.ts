import { parser } from "./parser";

describe("Parser correct performance", () => {
  it("17 + 89", () => {
    expect(parser("17 + 89")).toEqual([17, "+", 89]);
  });
  it("28 * 24", () => {
    expect(parser("28 * 24")).toEqual([28, "*", 24]);
  });
});
