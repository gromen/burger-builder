import {
  type TypedUseSelectorHook,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useDispatch,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useSelector
} from 'react-redux';
import type { RootState, AppDispatch } from '@/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
