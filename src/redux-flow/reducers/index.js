import { combineReducers } from 'redux';
import ticTacToe from './tic-tac-toe';
import identification from './identification';

export default combineReducers({
  ticTacToe,
  identification,
});
