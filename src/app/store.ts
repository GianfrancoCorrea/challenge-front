import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// Define the type of state of your application
interface RootState {
  // Here you can define the initial state of your application
}

// Create your store with the initial state and necessary actions
const store = configureStore({
  reducer: {
    // Here you can define your reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Define the type of your actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Create a hook to get the store dispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// Create a hook to get the state of the application
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
