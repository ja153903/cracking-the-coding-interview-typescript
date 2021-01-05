import { rotate } from "../../src/arrays-and-strings/rotate-matrix";

describe("Rotate Matrix", () => {
  test.each`
    i    | matrix                               | result
    ${1} | ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} | ${[[7, 4, 1], [8, 5, 2], [9, 6, 3]]}
  `("Case #$i", ({ matrix, result }) => {
    expect(rotate(matrix)).toEqual(result);
  });
});
