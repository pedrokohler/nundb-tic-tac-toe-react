import {
  initialState,
  canFill,
  computeNewBoard,
  computeNewSymbol,
  computeWinner,
} from './domain/game';

export const handleResetState = (state, action) => {
  const { boardSize } = action.payload;
  return initialState(boardSize);
};

export const handleFillSquare = (state, action) => {
  const payload = { ...state, ...action.payload };

  if (!canFill(payload)) {
    return state;
  }

  const board = computeNewBoard(payload);
  const plays = state.plays + 1;
  const currentSymbol = computeNewSymbol({ ...payload, plays });
  const winner = computeWinner({ ...payload, board });

  return {
    ...state,
    plays,
    board,
    currentSymbol,
    winner,
  };
};
