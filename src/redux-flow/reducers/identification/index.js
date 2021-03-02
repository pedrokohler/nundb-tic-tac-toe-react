import { SET_IDENTIFICATION } from './actions';
import { handleSetIdentification } from './handlers';

const identification = (state = {}, action) => {
  switch (action.type) {
    case SET_IDENTIFICATION:
      return handleSetIdentification(state, action);
    default:
      return state;
  }
};

export default identification;
