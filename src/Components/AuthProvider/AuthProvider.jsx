import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { createContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const authInfo = {

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