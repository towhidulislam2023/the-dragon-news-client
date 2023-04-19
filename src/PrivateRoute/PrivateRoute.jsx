import React, { useContext } from 'react';
import { userAuthContex } from '../provider/Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading }=useContext(userAuthContex)
    const location =useLocation()
    if (loading) {
        return <div>LOading.............</div>
    }
    if (user) {
        return children
        
    }
    return (
        <Navigate to={"/login"} state={location} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;