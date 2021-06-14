var numRookCaptures = function (
    board = [
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "p", ".", ".", ".", "."],
      [".", ".", ".", "p", ".", ".", ".", "."],
      ["p", "p", ".", "R", ".", "p", "B", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "B", ".", ".", ".", "."],
      [".", ".", ".", "p", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
    ]
  ) {
    let posX = 0,
      posY = 0,
      counter = 0;
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board[row].length; column++) {
        if (board[row][column] == "R") {
          posX = row;
          posY = column;
          break;
        }
      }
    }
  
    // Find top and bottom of Rook
    console.log(posX, posY);
    let obj1 = {},
      obj2 = {};
    for (let row = 0; row < board.length; row++) {
      if (row < posX) {
        if (board[row][posY] == "p" && obj1["p"] == null) {
          obj1["p"] = 1;
        } else if (board[row][posY] == "B") {
          obj1 = {};
        }
      } else if (row > posX) {
        if (board[row][posY] == "p" && obj2["p"] == null) {
          obj2["p"] = 1;
        } else if (board[row][posY] == "B") {
          break;
        }
      }
    }
  
    // left and right
    let obj3 = {},
      obj4 = {};
    for (let c = 0; c < board[posX].length; c++) {
      if (c < posY) {
        if (board[posX][c] == "p" && obj3["p"] == null) {
          obj3["p"] = 1;
        } else if (board[posX][c] == "B") {
          obj3 = {};
        }
      } else if (c > posY) {
        if (board[posX][c] == "p" && obj4["p"] == null) {
          obj4["p"] = 1;
        } else if (board[posX][c] == "B") {
          break;
        }
      }
    }
    if (obj1["p"]) {
      counter++;
    }
    if (obj2["p"]) {
      counter++;
    }
    if (obj3["p"]) {
      counter++;
    }
    if (obj4["p"]) {
      counter++;
    }
    return counter;
  };
  
  numRookCaptures();
  