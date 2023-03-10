import React,{ createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    signInWithEmailAndPassword
} from "firebase/auth";
import {
    setDoc,
    doc
} from "firebase/firestore";
import {auth, db} from "../firebase";
import Alert from 'react-bootstrap/Alert';


export const UserContext = createContext({});

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
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            setDoc(doc(db, "Users",res.user.uid),{
                username: username,
                email: res.user.email
            }).then(()=>{
                window.location.assign("/signin");
            })
            updateProfile(auth.currentUser, {
                displayName : username,
            });
        }).then((res) => console.log(res))
        .catch(err => setError(err.message)).finally(() => setLoading(false));
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        console.log("test")
        localStorage.setItem('userUID', "");
        window.location.assign("/signin");
        signOut(auth);
    };

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        logoutUser,
        forgotPassword,
        signInUser
    }

    return <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
}

