// client/src/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { logout } from './reducers/auth/actions/authActions';

const Navigation: React.FC = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<nav>
			<ul>
				{isAuthenticated ? (
					<li>
						<button onClick={handleLogout}>Logout</button>
					</li>
				) : (
					<>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
