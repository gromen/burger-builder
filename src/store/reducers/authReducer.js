import { authActionTypes } from '../actions/auth.actionTypes';

const initialState = {
  isLoggedIn: false,
  idToken: '',
  expiresIn: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.ON_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        idToken: action.idToken,
        expiresIn: action.expiresIn
      };
    case authActionTypes.ON_LOGOUT_REQUEST:
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

export default authReducer;
