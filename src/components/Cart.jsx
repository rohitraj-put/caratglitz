import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';
import { RxCross2 } from "react-icons/rx";
import { MdCurrencyRupee } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const handleCheckout = () => {
        toast.success('Proceeding to checkout', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            toast.error('Sorry, payment gateway is disabled', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }, 2800);
    };

    localStorage.setItem("cartItems", cart.length);

    return (
        <>
            <Navbar />
            <h2 className='text-center text-3xl text-rose-400 font-bold py-10'>My Shopping Cart</h2>

            <div className='flex justify-center flex-wrap gap-16'>
                <div>
                    {cart.length === 0 ? (
                        <p className='text-center'>Cart is empty</p>
                    ) : (
                        cart.map(item => {
                            const subTotal = item.price * item.quantity;

                            return (
                                <div key={item.id} className='mb-6 '>
                                    <div className="rounded-lg md:w-full m-auto">
                                        <div className="justify-between relative mb-4 rounded-lg bg-white p-2 border sm:flex sm:justify-start">
                                            <button className='absolute top-4 right-4 bg-gray-100 rounded-full p-2' onClick={() => dispatch(removeFromCart(item.id))}><RxCross2 /></button>

                                            <img
                                                src={item.imgsrc}
                                                alt={item.alt}
                                                className="w-full rounded-lg sm:w-40"
                                            />

                                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                <div className="mt-5 sm:mt-0">
                                                    <h2 className="text-lg font-bold text-gray-900 pr-2">
                                                        {item.proName}
                                                    </h2>
                                                    <div className='flex items-center'>
                                                        <i><MdCurrencyRupee /></i><del className="mt-1 text-sm text-gray-700">{item.old_price}</del>
                                                        <h4 className='text-1xl pl-3'>20% off</h4>
                                                    </div>
                                                    <div className='flex font-bold'>
                                                        <i><MdCurrencyRupee /></i> <p className="text-sm">{subTotal}</p>
                                                    </div>

                                                    <div className="flex items-center border-gray-100 py-6">
                                                        <span className='pr-2'>Quantity:</span>
                                                        <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-rose-400 hover:text-rose-40 hover:text-white"
                                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                                        >
                                                            -
                                                        </button>

                                                        <span className='py-1 px-3'>{item.quantity}</span>

                                                        <button className="cursor-pointer rounded-r bg-gray-100 py-1 mr-2 px-3 duration-100 hover:bg-rose-400 hover:text-rose-40 hover:text-white"
                                                            onClick={() => {
                                                                if (item.quantity < 3) {
                                                                    dispatch(increaseQuantity(item.id))
                                                                } else {
                                                                    toast.warn("Uff ! Item Sold Out", {
                                                                        position: "bottom-left",
                                                                        autoClose: 800,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        draggable: true,
                                                                        progress: undefined,
                                                                    })
                                                                }
                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-4 pt-24 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                    <Link to={`/product/${item.id} ${item.proName}`}>
                                                        <button className='bg-rose-400 text-white rounded px-4 py-2 hover:bg-rose-500 duration-100'>View Item</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {cart.length === 0 ? "" : <div className="mt-6 h-full rounded-lg border sticky top-20 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <ToastContainer />
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700 font-bold">Order summary (Total items: {totalQuantity})</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Shipping charges are free, and taxes are included in the price.</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">{subtotal.toFixed(2)}</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Transit Insurance</p>
                        <p className="text-gray-700">Inclusive</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700 font-bold">FREE</p>
                    </div>

                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <div className='flex items-center mb-1 text-lg font-bold'>
                                <i><MdCurrencyRupee /></i>
                                <p>{subtotal.toFixed(2)}</p>
                            </div>
                            <p className="text-sm text-gray-700">including GST</p>
                        </div>
                    </div>
                    <button
                        className="mt-6 w-full rounded-md bg-rose-400 py-1.5 font-medium text-rose-50 hover:bg-rose-500"
                        onClick={handleCheckout}
                    >
                        Proceed to Checkout
                    </button>
                    <p className='py-4'>All major payment methods are accepted, including UPI, credit cards, debit cards, PayPal, and Net Banking.</p>
                </div>}
            </div>
        </>
    );
};

export default Cart;
