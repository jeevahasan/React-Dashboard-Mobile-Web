import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const currentUser = localStorage.getItem('userUID');
	console.log(currentUser)

	if (!currentUser) {
		window.location.assign("/signin");
	}
	return children;
};

export default PrivateRoute;
