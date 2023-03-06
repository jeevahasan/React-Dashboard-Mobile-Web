import React,{ createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    // signInWithEmailAndPassword,
    // signOut,
    // sendPasswordResetEmail
} from "firebase/auth";
import {auth} from "../firebase";


const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, res => {
            res ? setUser(res) : setUser(null);
            setError("");
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const registerUser = (email, username, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            updateProfile(auth.currentUser, {
                displayName : username,
            });
        }).then((res) => console.log(res))
        .catch(err => setError(err.message)).finally(() => setLoading(false));
    }

    const contextValue = {
        registerUser
    }

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
}
