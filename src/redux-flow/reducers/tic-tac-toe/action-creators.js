import {
  RESET_GAME,
  FILL_SQUARE,
  JOIN,
} from './actions';

export const resetGame = (boardSize) => ({
  type: RESET_GAME,
  payload: {
    boardSize,
  },
});

export const fillSquare = ({ row, column, player }) => ({
  type: FILL_SQUARE,
  payload: {
    row, column, player,
  },
});

export const join = (player) => ({
  type: JOIN,
  payload: {
    player,
  },
});
