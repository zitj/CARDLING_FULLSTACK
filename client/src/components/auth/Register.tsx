// client/src/components/RegisterForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { register } from '../../reducers/auth/actions/authActions';

const RegisterForm: React.FC = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const { registering, registrationSuccess, error } = useSelector((state: RootState) => state.auth);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(register(username, email, password));
	};
	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<button type="submit" disabled={registering}>
					Register
				</button>
			</form>
			{registrationSuccess && <p>Registration successful!</p>}
			{/* {error && <p>Error: {error}</p>} */}
		</div>
	);
};

export default RegisterForm;
