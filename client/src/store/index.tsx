// client/src/store/index.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/index';

// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
	reducer: rootReducer,
	// Optionally add middleware, enhancers, etc. here
});

export default store;

// Define RootState and AppThunk types for type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
