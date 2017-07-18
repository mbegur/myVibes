import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  session: AuthReducer
});

export default rootReducer;
 
