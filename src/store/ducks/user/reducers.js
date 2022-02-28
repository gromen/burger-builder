import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  isLoggedIn: false,
  idToken: '',
  expiresIn: ''
};

const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        idToken: action.idToken,
        expiresIn: action.expiresIn
      };
    case types.ON_LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        idToken: '',
        expiresIn: ''
      };
    default:
      return state;
  }
};

const userAuthReducer = combineReducers({
  userAuth
});

export default userAuthReducer;
