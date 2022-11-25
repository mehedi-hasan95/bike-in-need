import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {


    const { logIn, googleLogin } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = data => {
        logIn(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        console.log(data);
    }

    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        googleLogin(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div className='container mx-auto my-5 md:my-10 lg:my-15'>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block">User Email</label>
                        <input {...register("email", { required: "Email is required" })} type="email" placeholder="User Email" className="w-full px-4 py-3 rounded-md text-black" />
                    </div>
                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    <div className="space-y-1 text-sm">
                        <label className="block">Password</label>
                        <input {...register("password", { required: "Password is required" })} type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-black" />
                    </div>
                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16"></div>
                    <p className="px-3 text-sm">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16"></div>
                </div>
                <div onClick={loginWithGoogle} className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6">Don't have an account?
                    <Link rel="noopener noreferrer" to='/register' className="underline"> Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;