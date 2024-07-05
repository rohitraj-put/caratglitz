import React from 'react';
import ProductData from '../../data/ProductData';
import ProductCard from '../ProductCard';
import Footer from '../Footer'
import Navbar from '../Navbar';
import Header from '../Header';

function Pendant() {
    const filteredProducts = ProductData.filter(item => item.category === 'Pendant');

    return (
        <>
            <Navbar />
            <Header />
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-6 lg:px-8">
                <h2 className="text-3xl py-10 font-bold text-center capitalize tracking-tight text-rose-400 sm:text-4xl">
                    The Best Pendant Collection
                </h2>
                <div className="mt-6 px-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {filteredProducts.map((item, index) => (
                        <ProductCard item={item} key={index} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pendant;
