import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <p className='text-4xl text-center mt-10'>Loading..............</p>
    }
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;