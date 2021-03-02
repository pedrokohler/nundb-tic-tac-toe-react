import NunDb from 'nun-db';
import { syncGameState } from './redux-flow/reducers/tic-tac-toe/action-creators';

const nun = new NunDb('wss://ws.nundb.org', 'tic-tac-toe', 'tic-tac-toe12i3ukjsd');

let ignore = false;
const dbMiddleware = (store) => {
  nun.watch('lastEvent', (action) => {
    ignore = true;
    store.dispatch(action.value);
  });

  nun.getValue('lastState4').then((state) => {
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
      nun.setValue('lastState4', store.getState());
    }

    next(internalAction);
    ignore = false;
  };
};

export {
  nun,
  dbMiddleware,
};
