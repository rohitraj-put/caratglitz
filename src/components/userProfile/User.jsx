import React from 'react';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function User() {
    const navigate = useNavigate();

    const handleClearLocalStorage = () => {
        localStorage.clear();
        navigate('/');
    };

    const getEmail = localStorage.getItem("emailData");
    const UserName = getEmail ? getEmail.slice(0, 5) : "Guest";

    return (
        <>
            <Head />
            <Header />
            <div className='flex justify-between items-center p-10'>
                <h1 className='text-3xl'>
                    Welcome, <span className='text-rose-400 text-4xl uppercase font-bold'>{UserName}</span>
                </h1>
                {getEmail && (
                    <button
                        className='p-2 bg-rose-400 rounded text-white'
                        onClick={handleClearLocalStorage}
                    >
                        Log Out
                    </button>
                )}
            </div>

            <div className='w-28 h-28 rounded-full bg-rose-400 mx-auto'>
                <img
                    className='w-full h-full rounded-full'
                    src='https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png'
                    alt='user_image'
                />
            </div>

            <Footer />
        </>
    );
}

export default User;
