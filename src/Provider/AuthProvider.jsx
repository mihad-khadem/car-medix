import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut }from 'firebase/auth'
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    // Google Provider
    const googleProvider = new GoogleAuthProvider()
    // User State
    const [user, setUser] = useState(null)
    // Loading state
    const [loading, setLoading] = useState(true)
    // Create User
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user logout
    const logOut = () => {
        setLoading(false);
        return signOut(auth)
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }




    useEffect(() => {
        const unSub = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSub()
        }
    }, [])












    const authInfo = {
        user,
        loading,
        signUp,
        loginUser,
        signOut,
        handleGoogleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;