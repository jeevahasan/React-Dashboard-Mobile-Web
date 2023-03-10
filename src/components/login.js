import Auth from "../context/auth/auth";
import { useUserContext } from "../context/userContext"
import Home from "../pages/private/home";
import React from "react";

const Login = () => {
    const { loading, error, user } = useUserContext;
    return (
        <div className="login-container flex">
            { error && <p className="error"> {error} </p>}
            {loading ? <h2>Loading...</h2> : <div>{user ? <Home /> : <Auth />}</div>}
        </div>
    )
}

export default Login;