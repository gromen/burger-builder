import { combineReducers } from 'redux';
import userAuth from '../ducks/user/reducers';

const rootReducer = combineReducers({
  authReducer: userAuth
});

export default rootReducer;
