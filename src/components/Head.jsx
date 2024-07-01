import React, { useState } from 'react';
import logo from '../assets/image/logo.png';
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ProductData from '../data/ProductData';

function Head() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const getEmail = localStorage.getItem("emailData");
    const cartItemNumber = localStorage.getItem("cartNumber");
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
        {
            link: "/cartlist",
            icon:
                <div className='relative'>
                    <FaShoppingCart />
                    {cartItemNumber && <span className='w-5 h-5 text-white absolute bottom-2 left-5 bg-rose-400 text-xs p-0.5 rounded-full'>
                        {cartItemNumber}
                    </span>}
                </div>, label: 'Cart'
        },
        { link: "/userProfile", icon: <img className='w-6 h-6' src='https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png' alt='Profile' />, label: UserName }
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            const filteredSuggestions = ProductData.filter((item) =>
                item.category.toLowerCase().includes(value.toLowerCase())
            );


            const uniqueCategories = Array.from(new Set(filteredSuggestions.map(item => item.category)));

            setSuggestions(uniqueCategories);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (category) => {
        setQuery(category);
        setSuggestions([]);
    };

    return (
        <div className='head_color flex justify-between items-center pt-2 pb-2 px-5 text-black sm:text-xxl'>
            <div>
                <Link to="/">
                    <img className='w-20 h-16' src={logo} alt="Logo" />
                </Link>
            </div>
            <div className='flex justify-between items-center w-full md:w-60 p-2 max-md:justify-around max-md:hidden'>
                <div className="flex items-center justify-center w-full">
                    <div className="relative w-full md:w-auto">
                        <input
                            type="text"
                            className="border-b w-full md:w-60 border-rose-400 py-1 focus:border-b-2 focus:border-rose-400 transition-colors focus:outline-none peer bg-inherit"
                            placeholder='Search Item..'
                            value={query}
                            onChange={handleInputChange}
                        />
                        <div className=' absolute top-9 bg-slate-200 z-10'>
                            {suggestions.length > 0 && (
                                <ul>
                                    {suggestions.map((category, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSuggestionClick(category)}
                                            className='px-8 py-2 cursor-pointer hover:text-white hover:bg-rose-400'
                                        >
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <Link
                    className='text-2xl bg-rose-400 p-2 text-white rounded-full cursor-pointer'
                    to={`/${query}`}
                >
                    <FaSearch />
                </Link>
            </div>
            <div className='flex justify-between items-center gap-5 head_profile'>
                <ul className='flex justify-between items-center gap-4 text-center'>
                    {profileItems.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <li className={`text-2xl cursor-pointer hover:text-rose-400 ${index === 0 ? 'flex items-center' : ''}`}>
                                {item.icon}
                                <p className={`text-sm capitalize ${index === 0 ? "" : "hidden"} md:block`}>{item.label}</p>
                            </li>
                        </Link>
                    ))}
                    {
                        getEmail ? "" : <li className="border-black duration-200 cursor-pointer hidden md:block">
                            <Link to="/contact" className='hover:text-rose-400'> <button className='bg-rose-400 px-4 py-1 text-white rounded'>Log In</button></Link>
                        </li>
                    }
                </ul>
            </div>
        </div >
    );
}

export default Head;
