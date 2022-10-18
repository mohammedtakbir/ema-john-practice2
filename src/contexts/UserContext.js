import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    //* Sign Up an user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //* Login an user
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //*get the currently sign-in user
    useEffect(() => {
        const unsubscribe=  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, []);

    //* Sing Out
    const userSignOut = () => {
        return signOut(auth);
    };




    const authInfo = {user, createUser, userLogIn, userSignOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;