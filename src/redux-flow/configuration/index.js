import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { dbMiddleware } from '../../nun';
import devtools from './devtools';

export default ({ initialState } = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(dbMiddleware),
      devtools(),
    ),
  );

  return store;
};
