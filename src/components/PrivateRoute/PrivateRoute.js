import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const [LogedInUser, setLogedInUser] = useContext(UserContext);
    return LogedInUser.email ? children : <Navigate to="/login"  state={{ from: location }} replace  />;
};

export default PrivateRoute;