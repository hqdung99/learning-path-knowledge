const arr = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValidSudoku(board) {
  var check = true;

  // tren xuong duoi
  for (let i = 0; i < board.length; i++) {
    const checkArr = [];
    const tempArr = board[i];

    for (let j = 0; j < board[i].length; j++) {
      if (tempArr[j] != "." && checkArr.includes(tempArr[j])) {
        return false;
      } else {
        checkArr.push(tempArr[j]);
      }
    }
  }

  // trai sang phai
  for (let i = 0; i < board.length; i++) {
    const checkArr = [];

    for (let j = 0; j < board.length; j++) {
      if (board[j][i] != "." && checkArr.includes(board[j][i])) {
        return false;
      } else {
        checkArr.push(board[j][i]);
      }
    }
  }

  // tung o
  for (let i = 0; i < board.length / 3; i++) {
    for (let j = 0; j < board.length / 3; j++) {
      const checkArr = [];

      for (let t = 0; t < board.length / 3; t++) {
        for (let k = 0; k < board.length / 3; k++) {
          if (
            board[i * (board.length / 3) + t][j * (board.length / 3) + k] !=
              "." &&
            checkArr.includes(
              board[i * (board.length / 3) + t][j * (board.length / 3) + k]
            )
          ) {
            return false;
          } else {
            checkArr.push(
              board[i * (board.length / 3) + t][j * (board.length / 3) + k]
            );
          }
        }
      }
    }
  }

  return true;
}

console.log(isValidSudoku(arr));
