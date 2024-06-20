import React from 'react'
import image from '../assets/image/4-1.png'
import { MdCurrencyRupee } from "react-icons/md";
import Feedback from './Feedback';
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function ProductDetail() {
    return (
        <>
            <div className="font-sans bg-white">
                <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12  p-6 rounded-lg">
                        <div className=" border-2 rounded lg:col-span-3 w-full lg:sticky top-0 text-center">
                            <div className="px-4 py-10 rounded-lg  relative">
                                <img
                                    src={image}
                                    alt="Product"
                                    className="w-2/4 object-cover mx-auto"
                                />
                                <button type="button" className="absolute text-2xl top-4 right-4">
                                    <CiHeart />
                                </button>
                            </div>
                            <div className="mt-6 mb-7 flex flex-wrap justify-center gap-6 mx-auto">
                                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                    <img
                                        src={image}
                                        alt="Product2"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                    <img
                                        src={image}
                                        alt="Product2"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                    <img
                                        src={image}
                                        alt="Product2"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                    <img
                                        src={image}
                                        alt="Product2"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-extrabold text-gray-800">
                                Harshali Drops Earrings
                            </h2>
                            <div className="flex space-x-2 mt-4 text-amber-400 items-center">
                                <FaStar /><FaStar /><FaStar /><FaStar />
                                <h4 className="text-gray-800 text-base">117 Reviews</h4>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4 items-center">
                                <p className="text-gray-800 text-2xl">
                                    <span className='flex'><MdCurrencyRupee />14000</span></p>
                                <p className="text-gray-400 text-base">
                                    <strike>20000</strike>
                                    <span className="text-sm ml-1">Tax included</span>
                                </p>
                            </div>



                            <div className="text-lg mt-4 text-center">
                                <div className="overflow-x-auto border-x border-t">
                                    <table className="table-auto w-full">
                                        <tbody>
                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="p-4">Gold Price</td>
                                                <td className="p-4">₹ 4125</td>
                                            </tr>
                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="p-4">Diamond Price</td>
                                                <td className="p-4">₹ 6000</td>
                                            </tr>
                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="p-4">Gemstone Price</td>
                                                <td className="p-4">₹ 1246</td>
                                            </tr>
                                            <tr className="border-b hover:bg-gray-50">
                                                <td className="p-4">Making Price</td>
                                                <td className="p-4">₹ 2000</td>
                                            </tr>
                                            <tr className="border-b bg-gray-50 font-bold">
                                                <td className="p-4">Total Value</td>
                                                <td className="p-4">₹ 14000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>



                            <div className="flex flex-wrap gap-4 mt-8">
                                <button
                                    type="button"
                                    className="min-w-[200px] px-4 py-3 bg-rose-400 hover:bg-rose-500 text-white text-sm font-semibold rounded" onClick={() => alert('you can not buy right now')}
                                >
                                    BUY NOW
                                </button>
                                <button
                                    type="button"
                                    className="min-w-[200px] px-4 py-2.5 border border-rose-400 bg-transparent hover:bg-rose-50 text-gray-800 text-sm font-semibold rounded"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl text-center mt-8 text-gray-800">PRODUCT DETAILS
                    </h3>
                    <div className='flex justify-between pl-8 pr-2'>
                        <div className="mt-8 mb-6 w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">

                            <h3 className=" text-base text-center  text-rose-400">
                                JEWELLERY INFORMATION</h3>
                            <ul className="mt-4 space-y-6 text-gray-800">
                                <li className="text-sm">
                                    BRAND <span className="ml-4 float-right">CARATGLITZ
                                    </span>
                                </li>
                                <li className="text-sm">
                                    CERTIFICATE TYPE <span className="ml-4 float-right">IGL&I</span>
                                </li>
                                <li className="text-sm">
                                    CLASP<span className="ml-4 float-right">Box With Tongue And Safety</span>
                                </li>
                                <li className="text-sm">
                                    COLLECTION{" "}
                                    <span className="ml-4 float-right">Everyday</span>
                                </li>
                                <li className="text-sm">
                                    STONE{" "}
                                    <span className="ml-4 float-right">Diamond IJ-SI</span>
                                </li>
                                <li className="text-sm">
                                    WIDTH <span className="ml-4 float-right">14.9 mm</span>
                                </li>
                                <li className="text-sm">
                                    HEIGHT<span className="ml-4 float-right">20.1 mm</span>
                                </li>
                                <li className="text-sm">
                                    MATERIAL{" "}
                                    <span className="ml-4 float-right">Precious Metal</span>
                                </li>
                                <li className="text-sm">
                                    MODEL NUMBER<span className="ml-4 float-right">27MS7PC734306</span>
                                </li>
                                <li className="text-sm">
                                    WARRANTY TYPE<span className="ml-4 float-right">Manufacturer & Seller</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-16 mb-6 w-full  shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">

                            <h3 className=" text-base text-center  text-rose-400">
                                GOLD</h3>

                            <ul className="mt-4 space-y-6 text-gray-800">
                                <li className="text-sm">
                                    METAL<span className="ml-4 float-right">14k Yellow Gold
                                    </span>
                                </li>
                                <li className="text-sm">
                                    METAL WEIGHT <span className="ml-4 float-right">1.17 gm</span>
                                </li>
                                <li className="text-sm">
                                    LUSTRE<span className="ml-4 float-right">Very High</span>
                                </li>


                                <h3 className=" text-base text-center  text-rose-400">
                                    DIAMOND</h3>


                                <li className="text-sm">
                                    NUMBER OF STONES
                                    <span className="ml-4 float-right">14</span>
                                </li>
                                <li className="text-sm">
                                    DIAMOND WEIGHT
                                    <span className="ml-4 float-right">0.05 ct</span>
                                </li>
                                <li className="text-sm">
                                    CUT<span className="ml-4 float-right">Excellent</span>
                                </li>
                                <li className="text-sm">
                                    STONE CREATION METHOD<span className="ml-4 float-right">Real</span>
                                </li>
                                <li className="text-sm">
                                    STONE TREATMENT METHOD
                                    <span className="ml-4 float-right">Not Treated</span>
                                </li>
                                <li className="text-sm">
                                    CLARITY<span className="ml-4 float-right">IJ-SI</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div>

                        <Feedback />

                    </div>

                </div>
            </div>

        </>
    )
}

export default ProductDetail