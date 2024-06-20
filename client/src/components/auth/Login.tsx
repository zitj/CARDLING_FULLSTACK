// client/src/Login.tsx
import React, { useState, useEffect } from 'react';

const Login: React.FC = () => {
	// const dispatch = useDispatch();
	// const { data, status, error } = useSelector((state: RootState) => state.test);

	// useEffect(() => {
	// 	dispatch(fetchData()); // Dispatch fetchData action on component mount
	// }, [dispatch]);

	// if (status === 'loading') {
	// 	return <p>Loading...</p>;
	// }

	// if (status === 'failed') {
	// 	return <p>Error: {error}</p>;
	// }
	return (
		<div>
			<h2>Login</h2>
			{/* <form onSubmit={handleLogin}>
				<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="submit">Login</button>
			</form> */}
		</div>
	);
};

export default Login;
