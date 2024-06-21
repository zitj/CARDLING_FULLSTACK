import { Dispatch } from 'redux';
import { AuthActionTypes, AuthAction } from '../types/authTypes';
import axios from 'axios';
import { parseJwt } from '../../../utilities/authUtils';

// Login actions
export const loginRequest = (): AuthAction => ({ type: AuthActionTypes.LOGIN_REQUEST });
export const loginSuccess = (username: string): AuthAction => ({
	type: AuthActionTypes.LOGIN_SUCCESS,
	payload: { username },
});
export const loginFailure = (error: string): AuthAction => ({
	type: AuthActionTypes.LOGIN_FAILURE,
	payload: { error },
});

export const login = (username: string, password: string) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch(loginRequest());
		try {
			// Simulate API call
			const user = await mockApiLogin(username, password);
			dispatch(loginSuccess(user.username));
		} catch (error: any) {
			dispatch(loginFailure(error.message));
		}
	};
};

// Register actions
export const registerRequest = (): AuthAction => ({ type: AuthActionTypes.REGISTER_REQUEST });
export const registerSuccess = (): AuthAction => ({ type: AuthActionTypes.REGISTER_SUCCESS });
export const registerFailure = (error: string): AuthAction => ({
	type: AuthActionTypes.REGISTER_FAILURE,
	payload: { error },
});
export const logoutSuccess = (): AuthAction => ({ type: AuthActionTypes.LOGOUT });

export const register = (username: string, email: string, password: string): any => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch(registerRequest());
		try {
			await apiRegister(username, email, password);
			dispatch(registerSuccess());
		} catch (error: any) {
			dispatch(registerFailure(error.message));
		}
	};
};

// Mock API functions
const mockApiLogin = (username: string, password: string): Promise<{ username: string }> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'test' && password === 'password') {
				resolve({ username });
			} else {
				reject(new Error('Invalid credentials'));
			}
		}, 1000);
	});
};

const apiLogin = async (username: string, password: string): Promise<{ username: string }> => {
	const response = await fetch('http://localhost:3000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	});

	if (!response.ok) {
		const errorResponse = await response.json();
		throw new Error(errorResponse.message || 'Login failed');
	}

	return response.json();
};

const apiRegister = async (username: string, email: string, password: string): Promise<void> => {
	try {
		const response = await axios.post('http://localhost:3000/auth/register', { username, email, password });
		const { token } = response.data;
		localStorage.setItem('token', token);
	} catch (error: any) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(error.response.data.message || 'Registration failed');
		} else {
			throw new Error('Registration failed');
		}
	}
};

export const logout = (): any => {
	localStorage.removeItem('token');
	return (dispatch: Dispatch<AuthAction>) => {
		dispatch(logoutSuccess());
	};
};

export const isAuthenticated = (): boolean => {
	const token = localStorage.getItem('token');
	return token ? true : false;
};

export const getAuthHeaders = (): any => {
	const token = localStorage.getItem('token');
	return token ? { Authorization: `Bearer ${token}` } : {};
};

export const initializeAuthentication = (): any => (dispatch: Dispatch<AuthAction>) => {
	const token = localStorage.getItem('token');
	if (token) {
		try {
			const decodedToken = parseJwt(token);
			const username = decodedToken ? decodedToken.username : null;
			dispatch(loginSuccess(username));
		} catch (error) {
			dispatch(loginFailure('Failed to decode token'));
		}
	}
};
