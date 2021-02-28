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

export const fillSquare = (squareIndex, player) => ({
  type: FILL_SQUARE,
  payload: {
    squareIndex,
    player,
  },
});

export const join = (name, symbol) => ({
  type: JOIN,
  payload: {
    name,
    symbol,
  },
});
