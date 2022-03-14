import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ingredients: {},
  totalPrice: 0,
  canPurchase: false,
  isPurchasing: false,
  error: false,
};

const burgerBuilderSlice = createSlice({
  name: 'burgerBuilder',
  initialState,
  reducers: {
    setIngredients: (state, action) => ({
      ingredients: action.payload,
      totalPrice: state.totalPrice,
      canPurchase: state.canPurchase,
      isPurchasing: state.isPurchasing,
      error: state.error,
    }),
    setTotalPrice: (state, action) => ({
      ingredients: state.ingredients,
      totalPrice: action.payload,
      canPurchase: state.canPurchase,
      isPurchasing: state.isPurchasing,
      error: state.error,
    }),
    updatePurchase: (state, action) => ({
      canPurchase: Object.values(action.payload).some(value => value),
      ingredients: state.ingredients,
      totalPrice: state.totalPrice,
      isPurchasing: state.isPurchasing,
      error: state.error,
    }),
    canPurchase: () => ({ canPurchase: true }),
    isPurchasing: state => ({ isPurchasing: !state.isPurchasing }),
    error: () => ({ error: true })
  }
});

export const {
  setIngredients, setTotalPrice, updatePurchase, canPurchase, isPurchasing, error
} = burgerBuilderSlice.actions;

export default burgerBuilderSlice.reducer;
