import {
  FILL_SQUARE,
  RESET_GAME,
  JOIN_GAME,
  JOIN_ROOM,
  SYNC_GAME_STATE,
} from './actions';
import {
  handleResetState,
  handleFillSquare,
  handleJoinGame,
  handleJoinRoom,
  handleSyncGameState,
} from './handlers';
import { initialState } from '../../../domain/game';

const ticTacToe = (state = initialState(), action) => {
  switch (action.type) {
    case RESET_GAME:
      return handleResetState(state, action);
    case FILL_SQUARE:
      return handleFillSquare(state, action);
    case JOIN_GAME:
      return handleJoinGame(state, action);
    case JOIN_ROOM:
      return handleJoinRoom(state, action);
    case SYNC_GAME_STATE:
      return handleSyncGameState(state, action);
    default:
      return state;
  }
};

export default ticTacToe;
