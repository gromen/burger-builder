import { burgerBuilderActionTypes } from '../actions/burgerBuilder.actionTypes';

export const initialState = {
  ingredients: {},
  totalPrice: 0,
  canPurchase: false,
  isPurchasing: false,
  error: false,
};

export const burgerBuilderReducer = (state, action) => {
  switch (action.type) {
    case burgerBuilderActionTypes.SET_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case burgerBuilderActionTypes.SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case burgerBuilderActionTypes.UPDATE_PURCHASE:
      return { ...state, canPurchase: Object.values(action.payload).some(value => value) };
    case burgerBuilderActionTypes.CAN_PURCHASE:
      return { ...state, canPurchase: true };
    case burgerBuilderActionTypes.IS_PURCHASING:
      return { ...state, isPurchasing: true };
    case burgerBuilderActionTypes.ERROR:
      return { error: true }; default:
      return state;
  }
};
