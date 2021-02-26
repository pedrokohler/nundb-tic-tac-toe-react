import {
  FILL_SQUARE,
  RESET_GAME,
} from './actions';
import {
  handleResetState,
  handleFillSquare,
} from './handlers';
import { initialState } from './domain/game';

const ticTacToe = (state = initialState(), action) => {
  switch (action.type) {
    case RESET_GAME:
      return handleResetState(state, action);
    case FILL_SQUARE:
      return handleFillSquare(state, action);
    default:
      return state;
  }
};

export default ticTacToe;
