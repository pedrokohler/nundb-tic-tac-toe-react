import {
  initialState,
  computeNewState,
  join,
} from './domain/game';

export const handleResetState = (state, action) => {
  const { boardSize } = action.payload;
  return initialState(boardSize);
};

export const handleFillSquare = (state, action) => {
  const newState = computeNewState(state, action.payload.squareIndex, action.payload.player);
  return newState;
};

export const handleJoin = (state, action) => {
  const newState = join(state, action.payload.symbol, action.payload.name);
  return newState;
};
