import NunDb from 'nun-db';
import { syncGameState, join } from './redux-flow/reducers/tic-tac-toe/action-creators';
import { TIC_TAC_TOE_PREFIX, JOIN_ROOM } from './redux-flow/reducers/tic-tac-toe/actions';

const nun = new NunDb('wss://ws.nundb.org', 'tic-tac-toe', 'tic-tac-toe12i3ukjsd');

const ticTacToeAction = new RegExp(`^${TIC_TAC_TOE_PREFIX}`);
const dbMiddleware = (store) => (next) => (action) => {
  next(action);
  const myPlayerId = store.getState().ticTacToe.id;
  const roomName = store.getState().identification.room;
  if (action.type === JOIN_ROOM) {
    nun.getValue(roomName).then((state) => {
      store.dispatch(syncGameState(state.ticTacToe));
      store.dispatch(join(store.getState().identification.userName));
    }).catch(() => {
      // in case the room wasn't created yet
      store.dispatch(join(store.getState().identification.userName));
    });

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
