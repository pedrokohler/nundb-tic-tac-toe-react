import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { dbMiddleware } from '../../nun';

export default ({ initialState } = {}) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(dbMiddleware),
    ),
  );
  /* eslint-enable */

  return store;
};
