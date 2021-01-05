import { isOneEditAway } from "../../src/arrays-and-strings/one-away";

describe("One Away", () => {
  test.each`
    index | s          | t         | result
    ${1}  | ${"pale"}  | ${"ple"}  | ${true}
    ${2}  | ${"pales"} | ${"pale"} | ${true}
    ${3}  | ${"pale"}  | ${"bale"} | ${true}
    ${4}  | ${"pale"}  | ${"bake"} | ${false}
  `("Case #$index", ({ s, t, result }) => {
    expect(isOneEditAway(s, t)).toBe(result);
  });
});
