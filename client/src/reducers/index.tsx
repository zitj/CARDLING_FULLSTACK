// client/src/store/reducers/index.ts
import { combineReducers, Reducer } from 'redux';
import authReducer, { AuthState } from './auth/auth'; // Import authReducer and AuthState from auth.ts
import { AuthAction } from './auth/types/authTypes';

// Define RootState to include AuthState (and potentially other state slices)
export interface RootState {
	auth: Reducer<AuthState, AuthAction>;
	// Add other state slices if you have more reducers
}

// Combine all reducers into a single rootReducer
export const rootReducer = combineReducers<RootState>({
	auth: authReducer,
});

export default rootReducer;
