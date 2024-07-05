import React, { useState } from 'react';
import Carousel from './Carousel';
import MidSec from './MidSec';
import Products from './Products';
import ProductSlider from './ProductSlider';
import ProductFeature from './ProductFeature';
import AnimatedNumber from './AnimatedNumber';
import Feedback from './Feedback';
import ProductVeraity from './ProductVeraity';
import Category from './Category';
import Header from './Header';
import Footer from './Footer';
import Wishlist from './Wishlist';
import toast, { Toaster } from 'react-hot-toast';
import CookieConsent from './Cookie/CookieConsent';
import Navbar from './Navbar';

function Home() {
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlistItem = (item) => {
        if (wishlist.some(wishlistItem => wishlistItem.id === item.id)) {
            setWishlist(wishlist.filter(wishlistItem => wishlistItem.id !== item.id));
          toast.error('Remove Wishlist Item')
        } else {
            setWishlist([...wishlist, item]);
            toast.success('Add Wishlist Item')
        }
    };

    return (
        <>
            
            <div className='fixed bottom-0 left-0 z-10 m-2 '>
                <CookieConsent />
            </div>
            <Navbar wishlist={wishlist} wishCount={wishlist.length} send={<Wishlist wishlist={wishlist} removeFromWishlist={toggleWishlistItem} />} />
            <Header />
            <Carousel />
            <ProductVeraity />
            <MidSec />
            <Products addToWishlist={toggleWishlistItem} wishlist={wishlist} />
            <ProductSlider />
            <ProductFeature />
            <AnimatedNumber />
            <Category />
            <Feedback />
            <Footer />
           <Toaster />
        </>
    );
}

export default Home;
