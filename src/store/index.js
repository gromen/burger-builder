import { createStore } from 'redux';
import { constants } from '../constants/constans';

const LoginReducer = (state, action) => {
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      };
    case constants.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
};

const store = createStore(LoginReducer);

export default store;
