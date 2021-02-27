import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { dbMiddleware } from '../../nun';

export default ({ initialState } = {}) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(dbMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */

  return store;
};
