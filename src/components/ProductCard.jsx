import React, { useState } from 'react'
import TopSelling from '../assets/image/TOPSELLING.svg'
import QuickView from './QuickView'
import { FaStar } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


function ProductCard({ item }) {
    const [data, setData] = useState(null)
    const [open, setOpen] = useState(true)


    const addData = (data) => {
        setOpen(true)
        setData(data)
    }
    const addToItem = () => {
        alert('Item has been added to the cart')
    }
    return (
        <>
            <div className="container flex justify-center ">
                <div className="max-w-sm py-2  old_image " data-aos="zoom-in">
                    <div className="bg-white relative border-lg hover:drop-shadow-2xl transition duration-500 rounded-lg border-1" >
                        <div className='absolute top-2 right-3 text-2xl p-1 bg-gray-100 rounded-full z-10 text-rose-400'>
                            <CiHeart />
                        </div>
                        <Link to={`/product/${item.id}`} >
                            <div>
                                <img
                                    className="rounded-t-lg"
                                    src={item.imgsrc}
                                    alt={item.alt}
                                />
                                <img
                                    className="new_image rounded-t-lg"
                                    src={item.hover_image}
                                    alt={item.alt}
                                />
                            </div>
                        </Link>
                        <div className="px-2 rounded-lg bg-white">
                            <h1 className="text-gray-700 font-bold text-1xl hover:text-gray-900 hover:cursor-pointer">
                                {item.proName}
                            </h1>
                        </div>
                        <div className='flex justify-between px-2'>
                            <div className="flex items-center py-2  bg-white rounded-lg">
                                <i><MdCurrencyRupee /></i><span className="text-md">{item.price}</span>
                                <del className='pl-2'>{item.old_price}</del>

                            </div>
                            <div className="flex justify-center items-center text-xl text-amber-500">
                                <FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                        </div>
                        <div className='m-2'>
                            <button
                                className="mt-1 mb-2 rounded-2xl  bg-rose-400 px-20 py-2 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-rose-600 sm:mt-0 sm:w-full sm:shrink-0 max-md:w-full"
                                onClick={() => addData(item)}
                            >
                                Quick View
                            </button>
                            <button
                                className="mt-3 mb-2 rounded-2xl bg-rose-400 px-20 py-2 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-rose-500 sm:mt-0 sm:w-full sm:shrink-0 max-md:w-full" onClick={addToItem}
                            >
                                Add Cart
                            </button>
                        </div>
                        <img className='absolute top-0' src={TopSelling} alt='top_selling' />
                    </div>
                </div >
            </div >
            <Outlet />
            {data && <QuickView data={data} open={open} setOpen={setOpen} />}
        </>
    )
}

export default ProductCard