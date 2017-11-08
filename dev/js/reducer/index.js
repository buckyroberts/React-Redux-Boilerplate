import { combineReducers } from 'redux';
import UserReducer from './reducers-user';

const allReducers = combineReducers({
  users: UserReducer
});

export default allReducers;