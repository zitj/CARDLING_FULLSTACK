// client/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<h1>Home Page</h1>} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
