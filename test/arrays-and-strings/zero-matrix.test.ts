import { zeroMatrix } from "../../src/arrays-and-strings/zero-matrix";

describe("Zero Matrix", () => {
  test.each`
    i    | matrix                               | result
    ${1} | ${[[0, 1, 1], [0, 1, 0], [0, 0, 0]]} | ${[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}
  `("Case #$i", ({ matrix, result }) => {
    expect(zeroMatrix(matrix)).toEqual(result);
  });
});
