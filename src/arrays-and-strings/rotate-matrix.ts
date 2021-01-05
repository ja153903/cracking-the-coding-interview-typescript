function rotate(matrix: number[][]): number[][] {
  // To rotate the matrix, let's flip the rows
  // then swap the upper triangular matrix
  for (let i = 0, j = matrix.length - 1; i < j; i++, j--) {
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
}

export { rotate };
