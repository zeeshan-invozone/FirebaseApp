import couterReducer from './counterReducer';
import loggedReducer from './loggedReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: couterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
