import { combineReducers } from 'redux';
import UserReducer from './reducers-user';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
  
});

export default allReducers;