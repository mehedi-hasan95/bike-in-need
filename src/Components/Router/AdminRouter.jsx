import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import Lodding from '../Pages/Common/Lodding/Lodding';

const AdminRouter = ({children}) => {
    const {user, loading, logOut} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user.email);
    const location = useLocation();
    const userLogOut = () => {
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    if(loading || isAdminLoading) {
        return <Lodding></Lodding>
    }

    if(user && isAdmin) {
        return children;
    }
    userLogOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRouter;