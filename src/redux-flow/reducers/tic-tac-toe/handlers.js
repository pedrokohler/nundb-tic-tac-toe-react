import {
  initialState,
  tryToFillSquare,
  join,
} from '../../../domain/game';

export const handleResetState = () => initialState();

export const handleFillSquare = (state, action) => {
  const { row, column, player } = action.payload;
  const newState = tryToFillSquare({
    state,
    row,
    column,
    player,
  });
  return newState;
};

export const handleJoin = (state, action) => {
  const { player } = action.payload;
  const newState = join({ state, player });
  return newState;
};
