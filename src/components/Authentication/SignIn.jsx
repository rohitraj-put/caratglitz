import React, { useRef } from 'react';
import Footer from '../Footer';
import User from '../userProfile/User';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../Navbar';
import Header from '../Header';
import daimond from "../../assets/image/daimond.mp4"


function SignIn() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const storedEmail = localStorage.getItem("emailData");
    const storedPassword = localStorage.getItem("passwordData");
    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email === "rohit@gmail.com" && password === "12345") {
            localStorage.setItem("emailData", email);
            localStorage.setItem("passwordData", password);
            setTimeout(() => {
                navigate("/")
            }, 1500)
            toast.success('Login Successful')
        } else {
            toast.error('Your email or password is incorrect!')
        }
    };

    if (storedEmail && storedPassword) {
        return <User />;
    }

    return (
        <>
            <Toaster />
            <Navbar />
            <Header />
            <section className="min-h-80 mt-6 flex box-border justify-center items-center">
                <div className="bg-white rounded flex max-w-3xl py-5 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-gray-600">Login</h2>
                        <form method="post" className="flex flex-col gap-4" onSubmit={submitHandler} >
                            <input
                                className="p-2 mt-8 rounded border"
                                type="email"
                                name="email"
                                id='email'
                                placeholder="Email"
                                ref={emailRef}
                                autoComplete="email"
                                required
                            />
                            <input
                                className="p-2 rounded border w-full"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                ref={passwordRef}
                                required
                            />
                            <button
                                className="bg-rose-400 text-white py-2 rounded hover:bg-rose-500"
                                type="submit"
                            >
                                Login
                            </button>

                        </form>
                        <div className="mt-6 items-center text-gray-100">
                            <p className="text-center text-rose-400 text-sm">OR</p>
                        </div>
                        <button className="bg-white border py-2 w-full rounded mt-5 flex justify-center items-center text-sm hover:bg-gray-100">
                            <svg
                                className="mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="25px"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                            </svg>
                            Login with Google
                        </button>
                        <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
                            Forget password?
                        </div>
                        <div className="mt-4 text-sm flex justify-between items-center container-mr">
                            <p className="mr-3 md:mr-0">If you don't have an account...</p>
                            <Link to={"/register"} className="register text-white bg-rose-400 hover:border-rose-500 rounded py-2 px-5 hover:bg-rose-500">
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <video width="400" className="h-full w-full object-cover object-center" loop muted autoPlay>
                            <source src={daimond} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default SignIn;
