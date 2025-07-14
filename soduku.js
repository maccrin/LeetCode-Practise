function isValidSudoku(board) {
    // Implement your logic here
    // Use '.' for empty cells
  const rows_set  = Array.from({length:9},()=>new Set());
  const cols_set  = Array.from({length:9},()=>new Set());
  const boxes_set = Array.from({length:9},()=>new Set());

  for (let i = 0; i<board.length; i++) {
    for (let j = 0; j< board.length; j++) {
      const cell = board[i][j];
      if (cell==='.')continue;
      const box = Math.floor(i/3)*3 + Math.floor(j/3);
    console.log(box)
      if (rows_set[i].has(cell) || cols_set[j].has(cell) || boxes_set[box].has(cell))return false;
      rows_set[i].add(cell);
      cols_set[j].add(cell);
      boxes_set[box].add(cell);
    }
  }
  
  return true;
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."] ,["6",".",".","1","9","5",".",".","."] ,[".","9","8",".",".",".",".","6","."] ,["8",".",".",".","6",".",".",".","3"] ,["4",".",".","8",".","3",".",".","1"] ,["7",".",".",".","2",".",".",".","6"] ,[".","6",".",".",".",".","2","8","."] ,[".",".",".","4","1","9",".",".","5"] ,[".",".",".",".","8",".",".","7","9"]]));
