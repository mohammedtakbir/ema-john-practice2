import React from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    // const [user, setUser] = useState(null);
    const user = {email: 'takbir@123gmail.com'}

    //* Sign Up an user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //* Login an user
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }




    const authInfo = {user, createUser, userLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;