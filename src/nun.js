import NunDb from 'nun-db';
import { syncGameState } from './redux-flow/reducers/tic-tac-toe/action-creators';
import { TIC_TAC_TOE_PREFIX } from './redux-flow/reducers/tic-tac-toe/actions';

const nun = new NunDb('wss://ws.nundb.org', 'tic-tac-toe', 'tic-tac-toe12i3ukjsd');

let ignore = false;
const dbMiddleware = (store) => {
  nun.watch('lastEvent', (action) => {
    const ticTacToeAction = new RegExp(`^${TIC_TAC_TOE_PREFIX}`);
    ignore = true;
    if (ticTacToeAction.test(action.value.type)) { store.dispatch(action.value); }
  });

  nun.getValue(store.getState().identification.room).then((state) => {
    ignore = true;
    store.dispatch(syncGameState(state.ticTacToe));
  });

  return (next) => (action) => {
    const internalAction = {
      ...action,
      $$nunDb: ignore,
    };
    if (!ignore) {
      nun.setValue('lastEvent', action);
      nun.setValue(store.getState().identification.room, store.getState());
    }

    next(internalAction);
    ignore = false;
  };
};

export {
  nun,
  dbMiddleware,
};
