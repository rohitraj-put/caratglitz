import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import logo from '../assets/image/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
function Head() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    })
    return (
        <>
            <div className='head_color flex justify-between item-center pt-2 pb-2 pl-5 pr-5 text-black sm:text-xxl' >
                <div>
                    <img className='w-20 h-16' src={logo} />
                </div>
                <div className='flex justify-between items-center w-80'>
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <input

                                type="text"
                                className="border-b w-80 border-black py-1 focus:border-b-2 focus:border-rose-400 transition-colors focus:outline-none peer bg-inherit"
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all peer-focus:text-black">Search

                            </label>
                        </div>
                    </div>
                    <i className='text-2xl hover:text-rose-400'><CiSearch /></i>
                </div>
                <div className='flex justify-between items-center gap-5 head_profile'>
                    <ul className='flex justify-between items-center gap-4 text-center'>
                        <li className="p-4 border-black  duration-200 cursor-pointer">
                            <a href="" className='hover:text-rose-400'>Log In</a>
                        </li>
                        <li className='text-2xl cursor-pointer hover:text-rose-400'>
                            <img className='w-6 h-6' src='https://static.vecteezy.com/system/resources/previews/011/571/519/original/circle-flag-of-india-free-png.png' />
                            <p className='text-sm'>Country</p>
                        </li>
                        <li className='text-2xl cursor-pointer hover:text-rose-400'><CiLocationOn />
                            <p className='text-sm'>Stores</p>
                        </li>
                        <li className='text-2xl cursor-pointer hover:text-rose-400'><CiHeart />
                            <p className='text-sm'>Wishlist</p>
                        </li>
                        <li className='text-2xl cursor-pointer hover:text-rose-400'><IoCartOutline />
                            <p className='text-sm'>Cart</p>
                        </li>
                        <li className='text-2xl cursor-pointer hover:text-rose-400'>
                            <i className='text-2xl'><CgProfile /></i>
                            <p className='text-sm '>Profile</p>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Head