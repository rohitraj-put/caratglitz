import React from 'react'
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';


function Wishlist({ wishlist, removeFromWishlist }) {
    const cartHandler = (e) => {
        e.preventDefault()
        dispatch(addToCart(data))
        toast.success(`${data.proName} has been cart in the list`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });
    }

    const handleCheckout = (e) => {
        e.preventDefault()
        toast.success('Proceeding to checkout', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            toast.error('Sorry, payment gateway is disabled', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }, 2800);
    };

    return (
        <>
            <ToastContainer />
            {wishlist.length === 0 ? "No Item Available" : wishlist.map(item => (
                <div key={item.id}>
                    <div className="flex  gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900  rounded-md mt-8 border ">
                        <div className="bg-gray-200 dark:bg-neutral-700 rounded-md w-40 h-20 ">
                            <Link to={`/product/${item.id} ${item.proName}`}>
                                <div className='w-full h-20 bg-gray-100 border'>
                                    <img className='w-full h-full object-fill' src={item.imgsrc} alt={item.alt} />
                                </div>
                            </Link>
                        </div>

                        <div className='w-full '>
                            <div className="flex justify-between w-full">
                                <div>
                                    <div className=" rounded-md h-4  text-rose-400">{item.proName}</div>
                                    <div className='flex items-center pt-1'>
                                        <i><MdCurrencyRupee /></i><p>{item.price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromWishlist(item.id)}
                                    className='p-2 text-xl text-rose-400'
                                >
                                    <RxCross2 />
                                </button>
                            </div>
                            <div className="flex justify-between text-xs">
                                <div
                                    className="flex items-center text-sm text-amber-500"
                                >
                                    <FaStar /><FaStar /><FaStar /><FaStar /><span className='text-black pl-2'>117</span>
                                </div>
                                <button className='bg-rose-400 p-2 rounded text-white mr-2'
                                    onClick={handleCheckout}
                                >Buy Now</button>
                            </div>

                        </div>
                    </div>

                </div>
            ))
            }

            {/* animate-pulse */}

        </ >
    )
}

export default Wishlist