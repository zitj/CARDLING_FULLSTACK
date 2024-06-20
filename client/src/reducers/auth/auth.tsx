import { AuthAction } from './types/authTypes';

export interface AuthState {
	isAuthenticated: boolean;
	user: any;
	loading: boolean;
	error: any | null;
	registering: boolean;
	registrationSuccess: boolean;
}

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	error: null,
	registering: false,
	registrationSuccess: false,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return { ...state, loading: true };
		case 'LOGIN_SUCCESS':
			return { ...state, loading: false, isAuthenticated: true, user: action.payload };
		case 'LOGIN_FAILURE':
			return { ...state, loading: false, error: action.payload };
		case 'REGISTER_REQUEST':
			return { ...state, registering: true };
		case 'REGISTER_SUCCESS':
			return { ...state, registering: false, registrationSuccess: true };
		case 'REGISTER_FAILURE':
			return { ...state, registering: false, error: action.payload };
		// other auth and registration-related actions
		default:
			return state;
	}
};

export default authReducer;
