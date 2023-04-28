import React, { useContext } from 'react';
import { userAuthContex } from '../provider/Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const { user, loading }=useContext(userAuthContex)
    const location =useLocation()
    if (loading) {
        return <div className='text-center my-5'><Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" /></div>
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