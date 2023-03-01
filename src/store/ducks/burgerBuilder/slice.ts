import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type IngredientPrices from '../../../utils/ingredientPrices';

type Ingredients = Record<string, number>;

interface InitialState {
  ingredients: Ingredients;
  totalPrice: number;
  canPurchase: boolean;
  isPurchasing: boolean;
  error: boolean;
}

const initialState: InitialState = {
  ingredients: {},
  totalPrice: 0,
  canPurchase: false,
  isPurchasing: false,
  error: false
};

const burgerBuilderSlice = createSlice({
  name: 'burgerBuilder',
  initialState,
  reducers: {
    setIngredients: (
      state,
      action: PayloadAction<typeof IngredientPrices>
    ) => ({
      ingredients: action.payload,
      totalPrice: state.totalPrice,
      canPurchase: state.canPurchase,
      isPurchasing: state.isPurchasing,
      error: state.error
    }),
    setTotalPrice: (state, action: PayloadAction<number>) => ({
      ingredients: state.ingredients,
      totalPrice: action.payload,
      canPurchase: state.canPurchase,
      isPurchasing: state.isPurchasing,
      error: state.error
    }),
    updatePurchase: (state, action: PayloadAction<boolean>) => ({
      canPurchase: Object.values(action.payload).some((value) => value),
      ingredients: state.ingredients,
      totalPrice: state.totalPrice,
      isPurchasing: state.isPurchasing,
      error: state.error
    }),
    canPurchase: (state) => ({
      canPurchase: true,
      ingredients: state.ingredients,
      totalPrice: state.totalPrice,
      isPurchasing: state.isPurchasing,
      error: state.error
    }),
    isPurchasing: (state) => ({
      isPurchasing: !state.isPurchasing,
      canPurchase: true,
      ingredients: state.ingredients,
      totalPrice: state.totalPrice,
      error: state.error
    }),
    error: (state) => ({
      error: true,
      isPurchasing: !state.isPurchasing,
      canPurchase: true,
      ingredients: state.ingredients,
      totalPrice: state.totalPrice
    })
  }
});

export const {
  setIngredients,
  setTotalPrice,
  updatePurchase,
  canPurchase,
  isPurchasing,
  error
} = burgerBuilderSlice.actions;

export default burgerBuilderSlice.reducer;
