import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import usersReducer from './usersSlice';
import postsReducer from "./postsSlice";

// Define the type of state of your application
export type RootState = ReturnType<typeof rootReducer>;

// Combine the reducers of all the slices
export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

// Create your store with the initial state and necessary actions
const store = configureStore({
  reducer: rootReducer,
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
