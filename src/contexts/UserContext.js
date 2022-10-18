import React from 'react';
import {getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    // const [user, setUser] = useState(null);
    const user = {email: 'takbir@123gmail.com'}





    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;