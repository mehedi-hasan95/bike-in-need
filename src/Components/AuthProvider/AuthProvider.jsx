import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.init';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with Email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update User 
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
    }

    const authInfo = {
        createUser, updateUser
    }
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={authInfo}>
                {children}
                <ToastContainer position="top-right" autoClose={1000} />
            </AuthContext.Provider>
        </QueryClientProvider>
    );
};

export default AuthProvider;