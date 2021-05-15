import {
  RESET_GAME,
  FILL_SQUARE,
  JOIN_GAME,
  JOIN_ROOM,
  SYNC_GAME_STATE,
} from './actions';

export const joinRoom = (roomName) => ({
  type: JOIN_ROOM,
  payload: {
    roomName,
  },
});

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

export const joinGame = (player) => ({
  type: JOIN_GAME,
  payload: {
    player,
  },
});

export const syncGameState = (state) => ({
  type: SYNC_GAME_STATE,
  payload: {
    state,
  },
});
