import {
  initialState,
  computeNewState,
} from './domain/game';

export const handleResetState = (state, action) => {
  const { boardSize } = action.payload;
  return initialState(boardSize);
};

export const handleFillSquare = (state, action) => {
  const newState = computeNewState(state, action.payload.squareIndex);
  return newState;
};
