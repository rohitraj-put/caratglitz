import React from 'react'
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";


function Wishlist({ wishlist, removeFromWishlist }) {

    return (
        <>
            {wishlist.map(item => (
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
                                <button className='bg-rose-400 p-1 rounded text-white mr-2'>Buy Now</button>
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