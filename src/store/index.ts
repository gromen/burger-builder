import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import * as reducers from './ducks';

const store = configureStore({ reducer: reducers });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
