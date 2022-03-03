import { configureStore } from '@reduxjs/toolkit';
import * as reducers from './ducks';

const store = configureStore({
  reducer: reducers
});

export default store;
