import { isUnique } from "../../src/arrays-and-strings/is-unique";

describe("Is Unique", () => {
  test.each`
    index | input    | result
    ${1}  | ${"abc"} | ${true}
    ${2}  | ${"aaa"} | ${false}
  `("Case #$index", ({ input, result }): void => {
    expect(isUnique(input)).toBe(result);
  });
});
