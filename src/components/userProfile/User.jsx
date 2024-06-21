import React from 'react'
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function User() {
    const urlNavigate = useNavigate()
    const handleClearLocalStorage = () => {
        urlNavigate('/')
        localStorage.clear()
        window.location.reload()
    }
    const getEmail = localStorage.getItem("emailData")
    let UserName = getEmail.slice(0, 5);
    return (
        <>
            <Head />
            <Header />
            <h1 className='p-10 txt-3xl'>Welcome, <span className='text-rose-400 text-4xl uppercase font-bold'>{UserName}</span></h1>

            <div className='w-40 h-40 rounded-full bg-rose-400 mx-auto'>
                <img className='w-full h-full' src='https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png' alt='user_image' />

            </div>
            <button className=' p-2 bg-rose-400' onClick={handleClearLocalStorage}>Log Out</button>
            <Footer />


        </>

    )
}

export default User