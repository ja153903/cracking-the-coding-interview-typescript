function zeroMatrix(matrix: number[][]): number[][] {
  // Find all the rows and columns of all the 1s
  const rows: Set<number> = new Set();
  const cols: Set<number> = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (const row of rows) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }

  for (const col of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
}

export { zeroMatrix };
