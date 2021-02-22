import {
  RESET_GAME,
  FILL_SQUARE,
} from './actions';

export const resetGame = (boardSize) => ({
  type: RESET_GAME,
  payload: {
    boardSize,
  },
});

export const fillSquare = (squareIndex) => ({
  type: FILL_SQUARE,
  payload: {
    squareIndex,
  },
});
