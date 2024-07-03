import React, { useState } from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import ProductData from '../data/ProductData';
import ProductCard from './ProductCard';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import Footer from './Footer';
import Feedback from './Feedback';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Navbar';

function ProductDetail() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const product = ProductData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const [showImage, setShowImage] = useState(product.imgsrc);

    const sameCategoryProducts = ProductData.filter(item => item.category === product.category && item.id !== product.id);

    const Controls = () => {
        const { zoomIn, zoomOut } = useControls();
        return (
            <div className='absolute left-2 top-2'>
                <button className='text-2xl w-9 h-16 bg-gray-200 block' onMouseDownCapture={() => zoomIn()}>+</button>
                <button className='text-2xl w-9 h-16 bg-gray-200 mt-2 block' onMouseUpCapture={() => zoomOut()}>-</button>
            </div>
        );
    };

    const cartHandler = (e) => {
        dispatch(addToCart(product))
        toast.success(`${product.proName} has been cart in the list`, {
            position: "top-right",
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
    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="bg-white">
                <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-4 gap-12 p-6 rounded-lg">
                        <div className="relative border-2 rounded lg:col-span-2 w-full lg:sticky top-0 text-center">
                            <button type="button" className="text-rose-400 absolute text-3xl top-4 right-4 p-1 bg-gray-100 rounded-full">
                                <CiHeart />
                            </button>
                            <div className="w-3/4 h-3/4 mx-auto">
                                <TransformWrapper>
                                    <Controls />
                                    <TransformComponent>
                                        <img
                                            src={showImage}
                                            alt="Product"
                                            className="w-3/4 object-cover mx-auto"
                                        />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                            <div className="mt-2 mb-4 flex justify-center gap-4 mx-auto">
                                {product.allImage.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-24 h-20 flex items-center p-2 justify-center cursor-pointer"
                                    >
                                        <img
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className="w-full border-solid border-2 border-gray-100"
                                            onClick={() => setShowImage(image)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-extrabold text-rose-400">
                                {product.proName}
                            </h2>
                            <p>The price and size are ideal, and the colors are stunning. I must say again how much I adore {product.proName}.</p>
                            <div className="flex space-x-2 mt-4 text-amber-400 items-center">
                                {[1, 2, 3, 4].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                                <h4 className="text-gray-800 text-base">117 Reviews</h4>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4 items-center">
                                <p className="text-gray-800 text-2xl flex items-center">
                                    <MdCurrencyRupee />{product.price}
                                </p>
                                <p className="text-gray-400 text-base">
                                    <strike>{product.old_price}</strike>
                                    <span className="text-sm ml-1">Tax included</span>
                                </p>
                            </div>
                            <div className="text-lg mt-4 text-center">
                                <div className="overflow-x-auto border-x border-t">
                                    <table className="table-auto w-full">
                                        <tbody>
                                            {[
                                                { label: 'Gold Price', price: '₹ 4125' },
                                                { label: 'Diamond Price', price: '₹ 6000' },
                                                { label: 'Gemstone Price', price: '₹ 1246' },
                                                { label: 'Making Price', price: '₹ 2000' },
                                                { label: 'Total Value', price: '₹ 16000', isBold: true },
                                            ].map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={`border-b ${item.isBold ? 'bg-gray-50 font-bold' : 'hover:bg-gray-50'}`}
                                                >
                                                    <td className="p-4">{item.label}</td>
                                                    <td className="p-4">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                <button
                                    type="button"
                                    className="min-w-[200px] px-4 py-3 bg-rose-400 hover:bg-rose-500 text-white text-sm font-semibold rounded"
                                    onClick={handleCheckout}
                                >
                                    BUY NOW
                                </button>
                                <button
                                    type="button"
                                    className="min-w-[200px] px-4 py-2.5 border border-rose-400 bg-transparent hover:bg-rose-50 text-gray-800 text-sm font-semibold rounded"
                                    onClick={cartHandler}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-2xl text-center mt-8 font-bold tracking-tight text-rose-400 capitalize sm:text-4xl">Product Details</h3>
                    <div className='flex justify-center pr-2 mt-8 gap-6 max-md:flex-wrap'>
                        {[
                            {
                                title: 'JEWELLERY INFORMATION',
                                items: [
                                    { label: 'BRAND', value: 'CARATGLITZ' },
                                    { label: 'CERTIFICATE TYPE', value: 'IGL&I' },
                                    { label: 'CLASP', value: 'Box With Tongue And Safety' },
                                    { label: 'COLLECTION', value: 'Everyday' },
                                    { label: 'STONE', value: 'Diamond IJ-SI' },
                                    { label: 'WIDTH', value: '14.9 mm' },
                                    { label: 'HEIGHT', value: '20.1 mm' },
                                    { label: 'MATERIAL', value: 'Precious Metal' },
                                    { label: 'MODEL NUMBER', value: '27MS7PC734306' },
                                    { label: 'WARRANTY TYPE', value: 'Manufacturer & Seller' },
                                ],
                            },
                            {
                                title: 'GOLD',
                                items: [
                                    { label: 'METAL', value: '14k Yellow Gold' },
                                    { label: 'METAL WEIGHT', value: '1.17 gm' },
                                    { label: 'LUSTRE', value: 'Very High' },
                                    { label: 'DIAMOND', isSubheader: true },
                                    { label: 'NUMBER OF STONES', value: '14' },
                                    { label: 'DIAMOND WEIGHT', value: '0.05 ct' },
                                    { label: 'CUT', value: 'Excellent' },
                                    { label: 'STONE CREATION METHOD', value: 'Real' },
                                    { label: 'STONE TREATMENT METHOD', value: 'Not Treated' },
                                    { label: 'CLARITY', value: 'IJ-SI' },
                                ],
                            },
                        ].map((section, index) => (
                            <div key={index} className="mb-6 w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                                <h3 className="text-base text-center text-rose-400">{section.title}</h3>
                                <ul className="mt-4 space-y-6 text-gray-800">
                                    {section.items.map((item, itemIndex) => (
                                        item.isSubheader ? (
                                            <h3 key={itemIndex} className="text-base text-center text-rose-400">{item.label}</h3>
                                        ) : (
                                            <li key={itemIndex} className="text-sm">
                                                {item.label} <span className="ml-4 float-right">{item.value}</span>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='text-center w-3/4 mx-auto my-8'>
                        <h3 className="text-2xl text-center p-4 font-bold tracking-tight text-rose-400 capitalize sm:text-4xl">Price Breakup</h3>
                        <p>Value-based pricing ensures that our customers feel happy paying price for the value they're getting. Moreover, individual narration (gold price, diamond price, making charges, GST, discount if any) of every product helps our customer to compare the price more easily as we are confident enough that the customers will return to us after comparing the price and quality.</p>
                    </div>
                    <h3 className="text-2xl text-center mt-8 font-bold tracking-tight text-rose-400 capitalize sm:text-4xl">Similar Products</h3>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {sameCategoryProducts.length === 0 ? <p className='text-center'>No Similar Item available!</p> : sameCategoryProducts.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                    <Feedback />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
