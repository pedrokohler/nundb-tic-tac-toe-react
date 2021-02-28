import {
  FILL_SQUARE,
  RESET_GAME,
  JOIN,
} from './actions';
import {
  handleResetState,
  handleFillSquare,
  handleJoin,
} from './handlers';
import { initialState } from './domain/game';

const ticTacToe = (state = initialState(), action) => {
  switch (action.type) {
    case RESET_GAME:
      return handleResetState(state, action);
    case FILL_SQUARE:
      return handleFillSquare(state, action);
    case JOIN:
      return handleJoin(state, action);
    case 'newState':
      return action.state;
    default:
      return state;
  }
};

export default ticTacToe;
