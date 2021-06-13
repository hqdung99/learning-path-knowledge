const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix1 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

function rotate(matrix) {
  var axis = 0;

  if (matrix.length % 2 === 0) {
    axis = matrix.length / 2;
  } else {
    axis = (matrix.length - 1) / 2;
  }

  // vertical
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < axis; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[i].length - 1 - j];
      matrix[i][matrix[i].length - 1 - j] = temp;
    }
  }

  // slant
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix.length - i - 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - 1 - j][matrix.length - 1 - i];
      matrix[matrix.length - 1 - j][matrix.length - 1 - i] = temp;
    }
  }
}

rotate(matrix);
console.log(matrix);
