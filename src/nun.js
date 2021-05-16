import NunDb from 'nun-db';
import { syncGameState, joinGame } from './redux-flow/reducers/tic-tac-toe/action-creators';
import { TIC_TAC_TOE_PREFIX, JOIN_ROOM } from './redux-flow/reducers/tic-tac-toe/actions';

const nun = new NunDb(
  process.env.REACT_APP_NUN_DB_URL,
  process.env.REACT_APP_NUN_DB_USER,
  process.env.REACT_APP_NUN_DB_PWD,
);

const ticTacToeAction = new RegExp(`^${TIC_TAC_TOE_PREFIX}`);
const dbMiddleware = (store) => (next) => async (action) => {
  next(action);
  const myPlayerId = store.getState().ticTacToe.id;
  const roomName = store.getState().identification.room;
  if (action.type === JOIN_ROOM) {
    try {
      const state = await nun.getValue(roomName);
      store.dispatch(syncGameState(state.ticTacToe));
      store.dispatch(joinGame(store.getState().identification.userName));
    } catch (e) { // in case the room wasn't created yet
      store.dispatch(joinGame(store.getState().identification.userName));
    }

    nun.watch(`lastEvent-${roomName}`, (nunAction) => {
      if (nunAction.playerId === myPlayerId) {
        return false;
      }
      if (ticTacToeAction.test(nunAction.value.type)) {
        store.dispatch(nunAction.value);
      }
      return true;
    });
    return;
  }
  if (ticTacToeAction.test(action.type) && !action.playerId) {
    const tmpAction = { ...action, playerId: myPlayerId };
    nun.setValue(`lastEvent-${roomName}`, tmpAction);
    nun.setValue(store.getState().identification.room, store.getState());
  }
};

export {
  nun,
  dbMiddleware,
};
