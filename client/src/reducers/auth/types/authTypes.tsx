export enum AuthActionTypes {
	LOGIN_REQUEST = 'LOGIN_REQUEST',
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_FAILURE = 'LOGIN_FAILURE',
	REGISTER_REQUEST = 'REGISTER_REQUEST',
	REGISTER_SUCCESS = 'REGISTER_SUCCESS',
	REGISTER_FAILURE = 'REGISTER_FAILURE',
	LOGOUT = 'LOGOUT',
}

interface LoginRequestAction {
	type: AuthActionTypes.LOGIN_REQUEST;
}

interface LoginSuccessAction {
	type: AuthActionTypes.LOGIN_SUCCESS;
	payload: {
		username: string;
	};
}

interface LoginFailureAction {
	type: AuthActionTypes.LOGIN_FAILURE;
	payload: {
		error: string;
	};
}

interface RegisterRequestAction {
	type: AuthActionTypes.REGISTER_REQUEST;
}

interface RegisterSuccessAction {
	type: AuthActionTypes.REGISTER_SUCCESS;
}

interface RegisterFailureAction {
	type: AuthActionTypes.REGISTER_FAILURE;
	payload: {
		error: string;
	};
}

interface LogoutAction {
	type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction | RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction | LogoutAction;
