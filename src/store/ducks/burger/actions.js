import types from './types';

const setIngredients = ingredients => ({
  type: types.SET_INGREDIENTS,
  ingredients
});

const setTotalPrice = totalPrice => ({
  type: types.SET_TOTAL_PRICE,
  totalPrice
});

const updatePurchase = payload => ({
  type: types.UPDATE_PURCHASE,
  payload
});

const isPurchasing = () => ({
  type: types.IS_PURCHASING
});

export default {
  setIngredients,
  setTotalPrice,
  updatePurchase,
  isPurchasing
};
