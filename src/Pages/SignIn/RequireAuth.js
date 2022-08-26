import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Landing from '../../Components/Landing';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Landing></Landing>
    }

    if(!user){
        return <Navigate to="/signup" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;