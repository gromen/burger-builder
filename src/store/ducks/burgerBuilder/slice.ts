import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type IngredientPrices from '@/utils/ingredientPrices';

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
  canPurchase: true,
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
      ...state,
      ingredients: action.payload,
      error: state.error
    }),
    setTotalPrice: (state, action: PayloadAction<number>) => ({
      ...state,
      totalPrice: action.payload,
      error: state.error
    }),
    updatePurchase: (state, action: PayloadAction<boolean>) => ({
      ...state,
      canPurchase: action.payload,
      error: state.error
    }),
    canPurchase: (state, action: PayloadAction<boolean>) => ({
      ...state,
      canPurchase: action.payload,
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
