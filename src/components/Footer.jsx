import React, { useEffect } from 'react';
import logo from "../assets/image/logo.png";
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    return (
        <footer className="pt-2 mt-20" data-aos="fade-up">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-2">
                <div className="lg:flex lg:items-start lg:gap-8">
                    <div>
                        <img src={logo} alt='Logo' />
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                        <div className="col-span-2">
                            <div>
                                <h2 className="text-lg font-bold text-rose-400 capitalize">Subscribe to notifications about discounts And offers from Caratglitz</h2>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                            <form className="w-full">
                                <label htmlFor="UserEmail" className="sr-only"> Email </label>
                                <div className="border-gray-100 p-2 sm:flex sm:justify-end sm:gap-4">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="Enter Your Mail"
                                        className="w-80 p-3 text-rose-400 border-none focus:border-transparent sm:text-sm"
                                    />
                                    <button
                                        className="mt-1 w-full bg-rose-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-rose-400 sm:mt-0 sm:w-auto sm:shrink-0"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">Information</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="/about-us" className="text-gray-700 transition hover:opacity-75">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="text-gray-700 transition hover:opacity-75">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-and-conditions" className="text-gray-700 transition hover:opacity-75">Terms And Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/careers" className="text-gray-700 transition hover:opacity-75">Careers</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">Customers Service</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="/contact-us" className="text-gray-700 transition hover:opacity-75">Reach Us</Link>
                                </li>
                                <li>
                                    <Link to="/returns" className="text-gray-700 transition hover:opacity-75">Returns</Link>
                                </li>
                                <li>
                                    <Link to="/shipping-policy" className="text-gray-700 transition hover:opacity-75">Shipping Policy</Link>
                                </li>
                                <li>
                                    <Link to="/faqs" className="text-gray-700 transition hover:opacity-75">FAQs</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">My Account</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="/userProfile" className="text-gray-700 transition hover:opacity-75">My Account</Link>
                                </li>
                                <li>
                                    <Link to="/order-history" className="text-gray-700 transition hover:opacity-75">Orders History</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist" className="text-gray-700 transition hover:opacity-75">Wishlist</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">Head Office</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="#" className="text-gray-700 transition hover:opacity-75">
                                        Level 10, 18-20
                                        Hindustan Times House
                                        KG Marg, Connaught Place
                                        New Delhi, India -110001
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">Dubai-UAE</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="#" className="text-gray-700 transition hover:opacity-75">
                                        Suite No. 01
                                        Abrak Business Center
                                        Business Bay Dubai, U.A.E.
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">Harare Zimbabwe</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="#" className="text-gray-700 transition hover:opacity-75">
                                        14 San Sebastian Tower
                                        Samora Machel Avenue
                                        Harare, Zimbabwe
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">London - United Kingdom</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="#" className="text-gray-700 transition hover:opacity-75">
                                        71-75 Shelton Street
                                        Covent Garden
                                        London, WC2H 9JQ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">New York - United States</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="#" className="text-gray-700 transition hover:opacity-75">
                                        54 State Street
                                        Ste 804 Albany
                                        NY -12207 U.S.A.
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900">Contact Details</p>
                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="tel:+919899210105" className="text-gray-700 transition hover:opacity-75">+91 98992 10105</Link>
                                </li>
                                <li>
                                    <Link to="mailto:info@caratglitz.com" className="text-gray-700 transition hover:opacity-75">info@caratglitz.com</Link>
                                </li>
                            </ul>
                        </div>

                        <ul className="col-span-2 flex justify-start gap-3 lg:col-span-5 lg:justify-end">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-rose-400 transition text-4xl hover:opacity-75"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-rose-400 transition text-4xl hover:opacity-75"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-rose-400 transition text-4xl hover:opacity-75"
                                >
                                    <FaYoutube />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-rose-400 transition text-4xl hover:opacity-75"
                                >
                                    <FaPinterest />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-rose-400 transition text-4xl hover:opacity-75"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-rose-400 transition text-4xl hover:opacity-75"
                                >
                                    <BsTwitterX />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t text-center border-gray-200 pt-4">
                    <p className="text-xs text-gray-500">&copy;2021 - 2024 Caratglitz. All Rights Reserved | Site Map | Terms & Conditions | Privacy Policy</p>
                    <p className="text-xs text-gray-500">
                        Certificate: BIS License | IGL&I | ISO 9001:2015
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
