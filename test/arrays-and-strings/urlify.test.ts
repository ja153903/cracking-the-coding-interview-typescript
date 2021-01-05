import { urlify } from "../../src/arrays-and-strings/urlify";

describe("URLify", () => {
  test.each`
    index | url                    | result
    ${1}  | ${"Mr John Smith    "} | ${"Mr%20John%20Smith"}
  `("Case #$index", ({ url, result }) => {
    expect(urlify(url)).toBe(result);
  });
});
