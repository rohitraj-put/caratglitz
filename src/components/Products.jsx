import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProductCard from './ProductCard';
import ProductData from '../data/ProductData';
import { IoIosArrowDown } from "react-icons/io";

function Products({ addToWishlist, wishlist }) {
    const [filter, setFilter] = useState('All');
    const [filterPrice, setFilterPrice] = useState('All');

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleFilterPriceChange = (event) => {
        setFilterPrice(event.target.value);
    };

    const filteredProducts = ProductData.filter(item => {
        const categoryMatch = filter === 'All' || item.category === filter;
        const priceMatch = filterPrice === 'All' || item.price === parseInt(filterPrice);
        return categoryMatch && priceMatch;
    });



    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl py-10 font-bold text-center tracking-tight text-rose-400 sm:text-4xl">
                        Customers Also Purchased
                    </h2>
                    <div className='flex justify-center gap-6'>
                        <div className="flex items-center mb-8">
                            <span className='mr-1'>Category :</span>
                            <select
                                className=" border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                value={filter}
                                onChange={handleFilterChange}
                            >
                                <option value="All">All</option>
                                <option value="Earrings">Earrings</option>
                                <option value="Ring">Ring</option>
                                <option value="Necklace">Necklace</option>
                                <option value="Pendant">Pendant</option>
                            </select>
                        </div>
                        <div className="flex items-center mb-8">
                            <span className='mr-1'>Price : </span>
                            <select
                                className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                value={filterPrice}
                                onChange={handleFilterPriceChange}
                            >
                                <option className='hover:bg-rose-400' value="All">All</option>
                                <option className='hover:bg-rose-400' value="18000">18000</option>
                                <option className='hover:bg-rose-400' value="20000">20000</option>
                                <option className='hover:bg-rose-400' value="12000">12000</option>
                                <option className='hover:bg-rose-400' value="16000">16000</option>
                            </select>
                            {/* <i className='absolute right-2 top-2'><IoIosArrowDown /></i> */}
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            filteredProducts.length === 0 ? <p className='text-center tex-xl'>Sorry! No {filter} Avaiable the price of {filterPrice} </p> : filteredProducts.map((item, index) => (
                                <ProductCard key={index} item={item} addToWishlist={addToWishlist} wishlist={wishlist} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
