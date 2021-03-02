import {
  FILL_SQUARE,
  RESET_GAME,
  JOIN,
  SYNC_GAME_STATE,
} from './actions';
import {
  handleResetState,
  handleFillSquare,
  handleJoin,
  handleSyncGameState,
} from './handlers';
import { initialState } from '../../../domain/game';

const ticTacToe = (state = initialState(), action) => {
  switch (action.type) {
    case RESET_GAME:
      return handleResetState(state, action);
    case FILL_SQUARE:
      return handleFillSquare(state, action);
    case JOIN:
      return handleJoin(state, action);
    case SYNC_GAME_STATE:
      return handleSyncGameState(state, action);
    default:
      return state;
  }
};

export default ticTacToe;
