export const symbols = Object.freeze(['X', 'O']);

export const initialState = () => {
  const BOARD_SIZE = 3;
  const maxPlays = BOARD_SIZE ** 2;
  const rows = new Array(BOARD_SIZE).fill([]);
  const board = rows.map(() => new Array(BOARD_SIZE).fill(''));
  const [firstSymbol] = symbols;
  return {
    id: (new Date().getTime()),
    X: null,
    O: null,
    winner: null,
    roomName: null,
    maxPlays,
    board,
    nextSymbol: firstSymbol,
    plays: 0,
  };
};

export const joinRoom = ({ state, roomName }) => ({
  ...state,
  roomName,
});

export const join = ({ state, player }) => {
  const hasX = !!state.X;
  if (state.X && state.O) return state;
  if (hasX && state.X === player) return state;
  const playerSymbol = hasX ? 'O' : 'X';
  return {
    ...state,
    [playerSymbol]: player,
  };
};

export const tryToFillSquare = ({
  state, row, column, player,
}) => {
  if (!canFillSquare({
    state, row, column, player,
  })) {
    return state;
  }
  const newBoard = computeNewBoard({ state, row, column });
  const winnerSymbol = computeWinnerSymbol(newBoard);
  const winner = getPlayerFromSymbol({ state, symbol: winnerSymbol });

  return ({
    ...state,
    board: newBoard,
    nextSymbol: computeNextSymbol(state),
    plays: computePlays(state),
    winner,
  });
};

const computeWinnerSymbol = (board) => {
  const rows = [...board];
  const columns = getBoardColumns(board);
  const diagonals = getBoardDiagonals(board);
  const squareGroups = [
    ...rows,
    ...columns,
    ...diagonals,
  ];
  const winnerSymbol = computeSquaresGroupsWinnerSymbol(squareGroups);
  return winnerSymbol;
};

const computeSquaresGroupsWinnerSymbol = (squaresGroups) => squaresGroups
  .find((squaresGroup) => {
    const [targetSymbol] = squaresGroup;
    return squaresGroup.every((value) => value !== '' && value === targetSymbol);
  })?.[0];

const getBoardColumns = (board) => board
  .reduce((columns, row) => [0, 1, 2]
    .map((i) => [...columns[i], row[i]]), [[], [], []]);

const getBoardDiagonals = (board) => {
  const descendingDiagonal = getBoardDescendingDiagonal(board);
  const ascendingDiagonal = getBoardAscendingDiagonal(board);
  return [descendingDiagonal, ascendingDiagonal];
};

const getBoardDescendingDiagonal = (board) => board
  .map((row, rowIndex) => row.find((_, valueIndex) => valueIndex === rowIndex));

const getBoardAscendingDiagonal = (board) => board
  .map((row, rowIndex) => row.find((_, valueIndex) => valueIndex + rowIndex === board.length - 1));

const canFillSquare = ({
  state, row, column, player,
}) => {
  const nextPlayer = getNextPlayer(state);
  const rightPlayer = player === nextPlayer;
  const notFilled = !state.board[row][column];
  const notOver = !state.winner;
  return rightPlayer && notFilled && notOver;
};

const getNextPlayer = (state) => getPlayerFromSymbol({ state, symbol: state.nextSymbol });

const getPlayerFromSymbol = ({ state, symbol }) => state[symbol];

const computeNewBoard = ({ state, row, column }) => state.board.map((oldRow, oldRowIndex) => {
  if (oldRowIndex !== row) {
    return oldRow;
  }

  return oldRow.map((oldValue, oldValueIndex) => {
    if (oldValueIndex === column) {
      return state.nextSymbol;
    }
    return oldValue;
  });
});

const computeNextSymbol = (state) => {
  const playsAfterSquaredIsFilled = computePlays(state);
  const symbolQuantity = symbols.length;
  const nextSymbolIndex = playsAfterSquaredIsFilled % symbolQuantity;
  return symbols[nextSymbolIndex];
};

const computePlays = (state) => state.plays + 1;
