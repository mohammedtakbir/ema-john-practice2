import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <p className='text-4xl text-center mt-10'>Loading..............</p>
    }
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/login' />
};

export default PrivateRoute;