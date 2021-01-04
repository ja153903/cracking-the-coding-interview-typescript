import { isPermutation } from "../../src/arrays-and-strings/check-permutation";

describe("Check Permutation", () => {
  test.each`
    index | s            | t            | result
    ${1}  | ${"racecar"} | ${"carrace"} | ${true}
    ${2}  | ${"car"}     | ${"tar"}     | ${false}
  `("Case #$index", ({ s, t, result }) => {
    expect(isPermutation(s, t)).toBe(result);
  });
});
