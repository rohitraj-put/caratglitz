import React, { useState } from 'react'
import Carousel from './Carousel'
import MidSec from './MidSec'
import Products from './Products'
import ProductSlider from './ProductSlider'
import ProductFeature from './ProductFeature'
import AnimatedNumber from './AnimatedNumber'
import Feedback from './Feedback'
import ProductVeraity from './ProductVeraity'
import Category from './Category'

import Header from './Header'
import Footer from './Footer'
import Wishlist from './Wishlist'
import { ToastContainer, toast } from 'react-toastify'
import CookieConsent from './Cookie/CookieConsent'
import Navbar from './Navbar'

function Home() {
    const [wishlist, setWishlist] = useState([]);
    const addToWishlist = (item) => {
        if (!wishlist.some(wishlistItem => wishlistItem.id === item.id)) {
            setWishlist([...wishlist, item]);

        } else {
            toast.warning("Item is already in the wishlist!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            })
        }
    };
    const removeFromWishlist = (itemId) => {
        setWishlist(wishlist.filter(item => item.id !== itemId));
    };

    return (
        <>
            <ToastContainer />
            <div className='fixed bottom-0 left-0 z-10 m-2 '>
                <CookieConsent />
            </div>
            <Navbar wishlist={wishlist} send={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
            <Header />
            <Carousel />
            <ProductVeraity />
            <MidSec />
            <Products addToWishlist={addToWishlist} wishlist={wishlist} />
            <ProductSlider />
            <ProductFeature />
            <AnimatedNumber />
            <Category />
            <Feedback />
            <Footer />
        </>
    )
}

export default Home
