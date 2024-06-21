// client/src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './Navigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/Home';
import ProtectedRoutesLayout from './routes/ProtectedRoutesLayout';
import NotFound from './components/NotFound';
import { initializeAuthentication } from './reducers/auth/actions/authActions';

const App: React.FC = () => {
	const dispatch = useDispatch();

	dispatch(initializeAuthentication());
	// useEffect(() => {
	// }, [dispatch]);
	return (
		<Router>
			<div>
				<Navigation />
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />

					<Route element={<ProtectedRoutesLayout />}>
						<Route path="/home" element={<Home />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
