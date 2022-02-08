import { ON_LOGIN_SUCCESS, ON_LOGOUT_REQUEST } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  token: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload
      };
    case ON_LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        token: ''
      };
    default:
      return state;
  }
};

export default authReducer;
