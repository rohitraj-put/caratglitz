import React, { useState } from 'react';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';
import QuickWishlist from './QuickWishlist';
import ProductData from '../data/ProductData';
import whatsApp from '../assets/image/whatsapp.png';
import { PiChatsLight } from "react-icons/pi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Navbar({ send, wishCount }) {
    const [open, setOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const getEmail = localStorage.getItem("emailData");
    const cartItemNumber = localStorage.getItem("cartItems");
    let UserName = getEmail ? getEmail.slice(0, 5) : "Guest";

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleQuickView = () => {
        setOpen(true);
    };

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
    };

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

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const NavData = [
        { label: 'Gold', link: '/Gold' },
        { label: 'Diamond', link: '/Diamond' },
        { label: 'Gemstone', link: '/Gemstone' },
        { label: 'Ring', link: '/Ring' },
        { label: 'Necklace', link: '/Necklace' },
        { label: 'Earrings', link: '/Earrings' },
        { label: 'Noserings', link: '/Noserings' },
        { label: 'Bracelets', link: '/Bracelets' },
        { label: 'Nosepins', link: '/Nosepins' },
        { label: 'Pendants', link: '/Pendants' },
        { label: 'Mangalsutras', link: '/Mangalsutras' },
        { label: 'Pages', link: '/Pages' }
    ];

    const countryFlags = {
        India: 'https://static.vecteezy.com/system/resources/previews/016/328/568/original/india-flat-rounded-flag-with-transparent-background-free-png.png',
        Dubai: 'https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/uae-512.png',
        'New York': 'https://www.pngall.com/wp-content/uploads/12/USA-Flag-PNG-File.png',
        London: 'https://www.pngall.com/wp-content/uploads/12/USA-Flag-PNG-File.png',
        Harare: 'https://static.vecteezy.com/system/resources/previews/015/272/144/non_2x/zimbabwe-3d-rounded-flag-with-transparent-background-free-png.png',
        Italy: 'https://static.vecteezy.com/system/resources/previews/011/571/348/non_2x/circle-flag-of-italy-free-png.png'
    };

    const navigate = useNavigate();

    const handleClearLocalStorage = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            toast.success("Logged Out Successfully");
            localStorage.clear();
            navigate('/');
        }
    };

    return (
        <>
            <header className="flex sticky top-0 z-20 bg-white border-b py-2 sm:px-8 px-2 font-sans min-h-80px tracking-wide">
                <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
                    <Link to={"/"}>
                        <img className='w-20 h-16' src={logo} alt="Logo" />
                    </Link>

                    <div className={`lg:ml-10 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                        <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-300px max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <li className="mb-6 hidden max-lg:block">
                                <div className='flex justify-between'>
                                    <Link to="/">
                                        <img className='w-20 h-16' src={logo} alt="Logo" />
                                    </Link>
                                    <button onClick={handleToggleMenu} id="toggleClose" className="lg:hidden z-100 rounded-full">
                                        <span className='text-3xl '>
                                            <IoMdClose />
                                        </span>
                                    </button>
                                </div>
                            </li>

                            <div className="flex border-2 focus-within:border-rose-400 rounded-full px-6 py-3 overflow-hidden w-full">
                                <input
                                    type="text"
                                    placeholder="Search Item..."
                                    className="w-full text-sm bg-transparent outline-none pr-2"
                                    value={query}
                                    onChange={handleInputChange}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-600">
                                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                                </svg>
                                <div className='absolute top-[65px] z-20 mx-auto bg-white border rounded-lg overflow-hidden shadow-lg max-lg:top-[160px]'>
                                    {suggestions.length > 0 && (
                                        <ul>
                                            {suggestions.map((category, index) => (
                                                <Link to={`/${category}`} key={index}>
                                                    <li
                                                        onClick={() => handleSuggestionClick(category)}
                                                        className='px-12 py-1 cursor-pointer hover:text-white hover:bg-rose-400'
                                                    >
                                                        {category}
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className='hidden max-lg:block'>
                                <div className='flex items-center'>

                                    <select
                                        className='border w-full mt-0.5 border-gray-300 rounded-full text-gray-600 px-4 py-1 bg-white hover:border-gray-400 focus:outline-none appearance-none'
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                        name="options"
                                    >
                                        {Object.keys(countryFlags).map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    <img className='w-6 h-6 ml-1' src={countryFlags[selectedCountry]} alt='Country Flag' />
                                </div>
                            </div>
                            {NavData.map((item, index) => (
                                <li key={index} className="max-lg:border-b max-lg:py-3 px-3 lg:hidden">
                                    <Link to={`${item.link}`} className="hover:text-rose-400 text-15px block font-semibold">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-x-6 gap-y-4 ml-auto">
                        <div className="flex items-center space-x-4">
                            <div className='flex items-center max-lg:hidden'>

                                <select
                                    className='border mt-0.5 border-gray-300 rounded-full text-gray-600 px-4 py-1 bg-white hover:border-gray-400 focus:outline-none appearance-none'
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    name="options"
                                >
                                    {Object.keys(countryFlags).map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                <img className='w-6 h-6 ml-1' src={countryFlags[selectedCountry]} alt='Country Flag' />
                            </div>
                            <span className="relative" onClick={() => handleQuickView()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-333 inline" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{wishCount}</span>
                            </span>
                            <span className="relative">
                                <Link to="/cartlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-333 inline" viewBox="0 0 512 512">
                                        <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000"></path>
                                    </svg>
                                </Link>
                                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{cartItemNumber}</span>
                            </span>
                            <div className='relative'>

                                <img className='w-6 h-6 cursor-pointer z-50' src='https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png' alt="User Profile" onClick={handleProfileClick} />

                                {isProfileDropdownOpen && (
                                    <ul className='absolute right-0 mt-2 w-48 overflow-hidden bg-white border rounded-lg shadow-lg'>
                                        <li className='px-4 py-2  text-rose-400 bg-gray-100'>
                                            <p className=' capitalize font-bold'>Welcome, {UserName}</p>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                                            <Link to="/userProfile">Profile</Link>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                                            <Link to="/settings">Your Order</Link>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                                            <Link to="/settings">Buy Again</Link>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                                            <Link to="/settings">Settings</Link>
                                        </li>
                                        <li className='px-4 py-2 hover:bg-rose-400 hover:text-white'>
                                            {
                                                getEmail ? <button onClick={handleClearLocalStorage}>Logout</button> : <Link to="/signin">Sign in/Registration</Link>
                                            }
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <button onClick={handleToggleMenu} id="toggleOpen" className="lg:hidden">
                                <span className='text-3xl'>
                                    <HiOutlineMenuAlt1 />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="fixed z-10 w-14 h-14 rounded-full bottom-16 right-4 bg-rose-400 p-2.5 hover:bg-rose-500">
                <a href="https://web.whatsapp.com/send?l=en&phone=+91 8506922777&text=I want to order a website" target="_blank" rel="noopener noreferrer">
                    <PiChatsLight className='text-4xl text-white' />
                </a>
            </div>
            <div className="fixed z-10 w-16 h-16 bottom-1 right-3">
                <a href="https://web.whatsapp.com/send?l=en&phone=+91 8506922777&text=I want to order a website" target="_blank" rel="noopener noreferrer">
                    <img className='w-full h-full' src={whatsApp} alt='WhatsApp' />
                </a>
            </div>

            {open && <QuickWishlist open={open} setOpen={setOpen} send={send} />}
            <Toaster />
        </>
    );
}

export default Navbar;
