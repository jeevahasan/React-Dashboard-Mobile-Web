import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
	const currentUser = localStorage.getItem('userUID');

	if (currentUser) {
		window.location.assign("/userlist");
	}
	return children;
};

export default PublicRoute;
