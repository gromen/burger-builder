import * as actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const authLoginReducer = (state, action) => {
  if (action.type === actionTypes.ON_SUBMIT_ERROR) {
    return {
      error: state.error
    };
  }

  return state;
};
