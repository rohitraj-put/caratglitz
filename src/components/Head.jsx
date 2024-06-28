import React, { useState } from 'react';
import logo from '../assets/image/logo.png';
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Head() {
    const getEmail = localStorage.getItem("emailData");
    let UserName = getEmail ? getEmail.slice(0, 5) : "Guest";

    const [selectedCountry, setSelectedCountry] = useState('India');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const countryFlags = {
        India: 'https://static.vecteezy.com/system/resources/previews/016/328/568/original/india-flat-rounded-flag-with-transparent-background-free-png.png',
        Dubai: 'https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/uae-512.png',
        'New York': 'https://www.pngall.com/wp-content/uploads/12/USA-Flag-PNG-File.png',
        London: 'https://www.pngall.com/wp-content/uploads/12/USA-Flag-PNG-File.png',
        Harare: 'https://static.vecteezy.com/system/resources/previews/015/272/144/non_2x/zimbabwe-3d-rounded-flag-with-transparent-background-free-png.png'
    };

    const profileItems = [
        {
            icon: <img className='w-6 h-6' src={countryFlags[selectedCountry]} alt='Country Flag' />,
            label: (
                <select
                    className='border mt-0.5 border-gray-300 rounded-full text-gray-600 p-1 bg-white hover:border-gray-400 focus:outline-none appearance-none"'
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="India">India</option>
                    <option value="Dubai">Dubai</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Harare">Harare</option>
                </select>
            )
        },
        { link: "/stores", icon: <FaLocationDot />, label: 'Stores' },
        { icon: <FaRegHeart />, label: 'Wishlist' },
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
                    {profileItems.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <li className={`text-2xl cursor-pointer hover:text-rose-400 ${index === 0 ? 'flex items-center' : ''}`}>
                                {item.icon}
                                <p className='text-sm capitalize'>{item.label}</p>
                            </li>
                        </Link>
                    ))}
                    {
                        getEmail ? "" : <li className="border-black duration-200 cursor-pointer">
                            <Link to="/contact" className='hover:text-rose-400'> <button className='bg-rose-400 px-4 py-1 text-white rounded'>Log In</button></Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default Head;
