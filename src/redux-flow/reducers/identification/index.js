import { SET_IDENTIFICATION, SET_ROOM } from './actions';
import { handleSetIdentification, handleSetRoom } from './handlers';

const identification = (state = {}, action) => {
  switch (action.type) {
    case SET_IDENTIFICATION:
      return handleSetIdentification(state, action);
    case SET_ROOM:
      return handleSetRoom(state, action);
    default:
      return state;
  }
};

export default identification;
