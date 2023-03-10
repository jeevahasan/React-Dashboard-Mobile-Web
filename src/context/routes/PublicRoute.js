const PublicRoute = ({ children }) => {
	const currentUser = localStorage.getItem('userUID');

	if (currentUser) {
		window.location.assign("/userlist");
	}
	return children;
};

export default PublicRoute;
