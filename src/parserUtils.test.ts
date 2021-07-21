import { isNumber } from "./parserUtils";

describe("isNumber correct performance", () => {
  it("8", () => {
    expect(isNumber("8")).toBe(true);
  }),
    it("345", () => {
      expect(isNumber("345")).toBe(true);
    }),
    it("&", () => {
      expect(isNumber("&")).toBe(false);
    }),
    it("g", () => {
      expect(isNumber("g")).toBe(false);
    });
});
