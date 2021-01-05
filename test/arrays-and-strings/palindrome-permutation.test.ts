import { isPermutation } from "../../src/arrays-and-strings/palindrome-permutation";

describe("Palindrome Permutation", () => {
  test.each`
    index | input        | result
    ${1}  | ${"tacocat"} | ${true}
  `("Case #$index", ({ input, result }) => {
    expect(isPermutation(input)).toBe(result);
  });
});
