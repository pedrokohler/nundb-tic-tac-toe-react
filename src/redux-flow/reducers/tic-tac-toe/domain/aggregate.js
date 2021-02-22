export const initialState = (rowSize = 3) => {
  const maxPlays = rowSize ** 2;
  return {
    winner: null,
    maxPlays,
    board: new Array(maxPlays).fill(''),
    symbols: Object.freeze(['X', 'O']),
    currentSymbol: 'X',
    plays: 0,
  };
};

export const computeNewBoard = ({ board, currentSymbol, squareIndex }) => board
  .map((symbol, i) => (
    squareIndex === i
      ? currentSymbol
      : symbol
  ));

export const computeNewSymbol = ({ plays, symbols }) => symbols[plays % symbols.length];

export const canFill = ({ board, squareIndex, winner }) => board[squareIndex] === '' && !winner;

const checkSquaresForWinner = (squares) => {
  const targetSymbol = squares[0];
  if (squares.every((symbol) => symbol === targetSymbol)) {
    return targetSymbol;
  }
  return false;
};

const getRowSize = (board) => Math.sqrt(board.length);

const getColumn = (squareIndex, board) => squareIndex % getRowSize(board);

const getRow = (squareIndex, board) => Math.floor(squareIndex / getRowSize(board));

const checkColumnForWinner = (board, column) => {
  const squares = board.filter((_, i) => getColumn(i, board) === column);
  return checkSquaresForWinner(squares);
};

const checkRowForWinner = (board, row) => {
  const squares = board.filter((_, i) => getRow(i, board) === row);
  return checkSquaresForWinner(squares);
};

const getDescendingDiagonalSquares = (board) => {
  const isDescendingDiagonalSquare = (row, column) => row === column;
  return board.filter((_, i) => {
    const row = getRow(i, board);
    const column = getColumn(i, board);
    return isDescendingDiagonalSquare(row, column);
  });
};

const getAscendingDiagonalSquares = (board) => {
  const rowSize = getRowSize(board);
  const isAscendingDiagonalSquare = (row, column) => row + column === rowSize - 1;

  return board.filter((_, i) => {
    const row = getRow(i, board);
    const column = getColumn(i, board);
    return isAscendingDiagonalSquare(row, column);
  });
};

const checkDiagonalsForWinner = (board) => checkSquaresForWinner(
  getDescendingDiagonalSquares(board),
) || checkSquaresForWinner(getAscendingDiagonalSquares(board));

export const computeWinner = ({ board, squareIndex }) => {
  const column = getColumn(squareIndex, board);
  const row = getRow(squareIndex, board);
  const winner = checkColumnForWinner(board, column)
              || checkRowForWinner(board, row)
              || checkDiagonalsForWinner(board);

  return winner || null;
};
