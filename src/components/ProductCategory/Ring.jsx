import React from 'react';
import ProductData from '../../data/ProductData';
import ProductCard from '../ProductCard';
import Footer from '../Footer'
import Navbar from '../Navbar';
import Header from '../Header';

function Ring() {

    const filteredProducts = ProductData.filter(item => item.category === 'Ring');

    return (
        <>
            <Navbar />
            <Header />
            <h2 className="text-3xl py-10 font-bold text-center capitalize tracking-tight text-rose-400 sm:text-4xl">
                the best rings collection
            </h2>
            <div className="mt-6 px-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {filteredProducts.map((item, index) => (
                    <ProductCard item={item} key={index} />

                ))}
            </div>
            <Footer />
        </>
    );
}

export default Ring;
