import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ProtectedRoutesLayout: React.FC = () => {
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

	console.log(isAuthenticated);
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutesLayout;
