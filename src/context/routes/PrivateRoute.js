import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const currentUser = localStorage.getItem('userUID');

	if (!currentUser) {
		window.location.assign("/signin");
	}
	return children;
};

export default PrivateRoute;
