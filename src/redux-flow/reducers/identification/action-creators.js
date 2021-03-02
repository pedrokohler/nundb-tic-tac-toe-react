import {
  SET_IDENTIFICATION,
} from './actions';

export const resetGame = (userName) => ({
  type: SET_IDENTIFICATION,
  payload: {
    userName,
  },
});
