// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';
import Head from './Head';
import Header from './Header';
import { RxCross2 } from "react-icons/rx";
import { MdCurrencyRupee } from "react-icons/md";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <Head />
            <Header />
            <h2 className='text-center text-3xl text-rose-400 font-bold py-10'>Cart Item</h2>
            {cart.length === 0 ? (
                <p className='text-center'>Cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className='mb-6 '>
                        <div className="rounded-lg md:w-2/3 m-auto">
                            <div className="justify-between relative mb-4 rounded-lg bg-white p-10 shadow-md sm:flex sm:justify-start">
                                <button className='absolute top-2 right-2 bg-gray-100 rounded-full p-2' onClick={() => dispatch(removeFromCart(item.id))}><RxCross2 /></button>
                                <img
                                    src={item.imgsrc}
                                    alt={item.alt}
                                    className="w-full rounded-lg sm:w-40"
                                />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">
                                            {item.proName}
                                        </h2>
                                        <div className='flex items-center'>
                                            <i><MdCurrencyRupee /></i><del className="mt-1 text-sm text-gray-700">{item.old_price}</del>
                                            <h4 className='text-1xl pl-3'>20% off</h4>
                                        </div>
                                        <div className='flex font-bold'>
                                            <i><MdCurrencyRupee /></i> <p className="text-sm">{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-rose-400 hover:text-rose-40"
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                            >
                                                -
                                            </button>

                                            <input
                                                type="number"
                                                className="py-1 px-3 text-center w-12"
                                                value={item.quantity}
                                                min={1}

                                            />

                                            <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-rose-400 hover:text-rose-40"
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                        </div>

                                        <button className='bg-rose-400 text-white rounded px-8 py-2 hover:bg-rose-500 duration-100'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default Cart;
