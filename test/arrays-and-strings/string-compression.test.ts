import { compress } from "../../src/arrays-and-strings/string-compression";

describe("String Compression", () => {
  test.each`
    i    | input            | result
    ${1} | ${"aabcccccaaa"} | ${"a2b1c5a3"}
    ${2} | ${"abc"}         | ${"a1b1c1"}
  `("Case #$i", ({ input, result }) => {
    expect(compress(input)).toBe(result);
  });
});
