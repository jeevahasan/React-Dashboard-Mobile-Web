const PrivateRoute = ({ children }) => {
	const currentUser = localStorage.getItem('userUID');

	if (!currentUser) {
		window.location.assign("/signin");
	}
	return children;
};

export default PrivateRoute;
