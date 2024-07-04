import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Header from '../Header';

function User() {
    const getEmail = localStorage.getItem("emailData");
    let UserName = getEmail ? getEmail.slice(0, 5) : "Guest";
    return (
        <>
            <Navbar />
            <Header />
            <div className='flex justify-between items-center p-10'>
                <h1 className='text-3xl'>
                    Welcome, <span className='text-rose-400 text-4xl uppercase font-bold'>{UserName}</span>
                </h1>           
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
