import {
  initialState,
  tryToFillSquare,
  joinGame,
  joinRoom,
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

export const handleJoinGame = (state, action) => {
  const { player } = action.payload;
  const newState = joinGame({ state, player });
  return newState;
};

export const handleJoinRoom = (state, action) => {
  const { roomName } = action.payload;
  const newState = joinRoom({ state, roomName });
  return newState;
};

export const handleSyncGameState = (_, action) => action.payload.state;
