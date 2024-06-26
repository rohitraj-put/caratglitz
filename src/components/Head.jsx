import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/image/logo.png';
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Head() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    const getEmail = localStorage.getItem("emailData");
    let UserName = getEmail ? getEmail.slice(0, 5) : "Guest";

    const profileItems = [
        { link: "#", icon: <img className='w-6 h-6' src='https://static.vecteezy.com/system/resources/previews/011/571/519/original/circle-flag-of-india-free-png.png' alt='Country Flag' />, label: 'Country' },
        { link: "#", icon: <FaLocationDot />, label: 'Stores' },
        { link: "#", icon: <FaRegHeart />, label: 'Wishlist' },
        { link: "/cartlist", icon: <IoCart />, label: 'Cart' },
        { link: "/userProfile", icon: <img className='w-6 h-6' src='https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png' alt='Profile' />, label: UserName }
    ];

    return (
        <div className='head_color flex justify-between items-center pt-2 pb-2 pl-5 pr-5 text-black sm:text-xxl'>
            <div>
                <Link to="/">
                    <img className='w-20 h-16' src={logo} alt="Logo" />
                </Link>
            </div>
            <div className='flex justify-between items-center w-60 p-2 max-md:justify-around'>
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <input
                            type="text"
                            className="border-b w-60 border-black py-1 focus:border-b-2 focus:border-rose-400 transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all peer-focus:text-black"
                        >
                            Search
                        </label>
                    </div>
                </div>
                <i className='text-2xl hover:text-rose-400'><FaSearch /></i>
            </div>
            <div className='flex justify-between items-center gap-5 head_profile max-md:hidden'>
                <ul className='flex justify-between items-center gap-4 text-center'>
                    <li className="p-4 border-black duration-200 cursor-pointer">
                        <Link to="/contact" className='hover:text-rose-400'>{getEmail ? "" : "Log In"}</Link>
                    </li>

                    {profileItems.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <li className='text-2xl cursor-pointer hover:text-rose-400'>
                                {item.icon}
                                <p className='text-sm capitalize'>{item.label}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Head;
