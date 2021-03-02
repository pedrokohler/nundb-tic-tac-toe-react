import {
  SET_IDENTIFICATION,
  SET_ROOM,
} from './actions';

export const setIdentification = (userName) => ({
  type: SET_IDENTIFICATION,
  payload: {
    userName,
  },
});

export const setRoom = (room) => ({
  type: SET_ROOM,
  payload: {
    room,
  },
});
