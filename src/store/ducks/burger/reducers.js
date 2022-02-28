import { combineReducers } from 'redux';
import types from './types';

export const initialState = {
  ingredients: {},
  totalPrice: 0,
  canPurchase: false,
  isPurchasing: false,
  error: false,
};

const burger = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INGREDIENTS:
      return { ...state, ingredients: action.ingredients };
    case types.SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.totalPrice };
    case types.UPDATE_PURCHASE:
      return { ...state, canPurchase: Object.values(action.payload).some(value => value) };
    case types.CAN_PURCHASE:
      return { ...state, canPurchase: true };
    case types.IS_PURCHASING:
      return { ...state, isPurchasing: true };
    case types.ERROR:
      return { error: true }; default:
      return state;
  }
};

const burgerReducer = combineReducers({ burger });

export default burgerReducer;
