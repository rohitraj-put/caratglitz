import React, { useEffect } from 'react';
import { PiChatsLight } from "react-icons/pi";
import Aos from 'aos';
import 'aos/dist/aos.css';
import whatsApp from '../assets/image/whatsapp.png';
import { IoMenuOutline } from "react-icons/io5";

function Header() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    return (
        <>
            <header className="header sticky top-0 shadow-md flex items-center justify-between px-8 z-10 text-black  max-md:px-4">
                <nav className="nav font-semibold text-lg ">
                    <div className='text-3xl p-2 md:hidden'>
                        <IoMenuOutline />
                    </div>
                    <ul className="flex items-center max-md:hidden">
                        {['Gold', 'Diamond', 'Gemstone', 'Ring', 'Earring', 'Noserings', 'Bracelets', 'Noserings', 'Nosepins'].map((item, index) => (
                            <li key={index} className="p-4 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-rose-400 duration-200 cursor-pointer">
                                <a href="">{item}</a>
                            </li>
                        ))}
                        <li className="dropdown_links p-4 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-rose-400 duration-200 cursor-pointer">
                            <div className='flex'>
                                <a href="">Pendents </a><i className="ri-arrow-down-s-line"></i>
                            </div>
                            <ul className="items-center dropdown">
                                <div className='dropdown_image'>
                                    {[
                                        'https://purepng.com/public/uploads/large/purepng.com-green-diamond-pendantjewelryjewellerydiamondpendant-17015288830186hpmd.png',
                                        'https://purepng.com/public/uploads/large/purepng.com-diamond-pendantjewelryjewellerydiamondpendant-17015288830667afs0.png',
                                        'https://www.pngmart.com/files/5/Pendant-Transparent-Background.png',
                                        'https://www.pngall.com/wp-content/uploads/7/Diamond-Pendant-Transparent.png',
                                        'https://www.pngall.com/wp-content/uploads/7/Diamond-Pendant-PNG-HD-Image.png',
                                        'https://freepngimg.com/thumb/jewelry/23-pendant-png-image.png',
                                        'https://th.bing.com/th/id/R.fb17f878d091d482846a3e0a358d3b50?rik=9FPl%2fW7K1KBSCw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnecklace-png-pendant-png-image-960.png&ehk=%2bha4y9p74bZfGBBKFvuVqOrVOj05pNWTwfM2EvF9moo%3d&risl=&pid=ImgRaw&r=0',
                                        'https://www.pngmart.com/files/5/Pendant-Necklace-PNG-Transparent-Picture.png',
                                        'https://purepng.com/public/uploads/large/purepng.com-green-diamond-pendantjewelryjewellerydiamondpendant-17015288830186hpmd.png'
                                    ].map((src, index) => (
                                        <li key={index} className="p-4 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-rose-400 duration-200 cursor-pointer">
                                            <a href="">
                                                <img src={src} alt="Pendent" />
                                                <h4>Pendent</h4>
                                            </a>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </li>
                        <li className="p-4 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-rose-400 duration-200 cursor-pointer">
                            <a href="">Mangalsutras</a>
                        </li>
                        <li className="p-4 border-b-2 border-rose-400 border-opacity-0 hover:border-opacity-100 hover:text-rose-400 duration-200 cursor-pointer">
                            <a href="">All Pages</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="fixed z-10 w-14 h-14 rounded-full bottom-16 right-4 bg-rose-400 p-2.5 hover:bg-rose-500" >
                <a href="https://web.whatsapp.com/send?l=en&phone=+91 8506922777&text=I want to order a website" target="_blank" rel="noopener noreferrer">
                    <PiChatsLight className='text-4xl text-white' />
                </a>
            </div>
            <div className="fixed z-10 w-16 h-16 bottom-1 right-3" >
                <a href="https://web.whatsapp.com/send?l=en&phone=+91 8506922777&text=I want to order a website" target="_blank" rel="noopener noreferrer">
                    <img className='w-full h-full' src={whatsApp} alt='WhatsApp' />
                </a>
            </div>

        </>
    );
}

export default Header;
