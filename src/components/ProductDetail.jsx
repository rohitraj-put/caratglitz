import React, { useState } from 'react';
// import image from '../assets/image/4-1.png';
import { MdCurrencyRupee } from "react-icons/md";
import Feedback from './Feedback';
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import product1 from '../assets/image/2-1.png'
import Pro_1_1 from '../assets/image/4-1.png'
import Pro_1_2 from '../assets/image/1-1.png'
import Pro_1_3 from '../assets/image/3-1.png'
import Harshali from '../assets/image/harshali.png'

import pro_2_1 from '../assets/image/1.png'
import pro_2_2 from '../assets/image/2.png'
import pro_2_3 from '../assets/image/3.png'
import pro_2_4 from '../assets/image/4.png'

import pro_3_1 from '../assets/image/3-1.jpg'
import pro_3_2 from '../assets/image/3-2.jpg'
import pro_3_3 from '../assets/image/3-3.jpg'
import pro_3_4 from '../assets/image/3-4.jpg'
import pro_3_5 from '../assets/image/3-5.jpg'

import pro_4_2 from '../assets/image/4-2.png'
import pro_4_3 from '../assets/image/4-3.png'
import pro_4_4 from '../assets/image/4-4.png'
import pro_4_5 from '../assets/image/4-5.png'
import pro_4_6 from '../assets/image/4-6.png'

import pro_5_1 from '../assets/image/5-1.jpg'
import pro_5_2 from '../assets/image/5-2.jpg'
import pro_5_3 from '../assets/image/5-3.jpg'
import pro_5_4 from '../assets/image/5-4.jpg'
import pro_5_5 from '../assets/image/5-5.jpg'

import pro_6_1 from '../assets/image/6-1.jpg'
import pro_6_2 from '../assets/image/6-2.jpg'
import pro_6_3 from '../assets/image/6-3.jpg'
import pro_6_4 from '../assets/image/6-4.jpg'
import pro_6_5 from '../assets/image/6-5.jpg'

import pro_7_1 from '../assets/image/7-1.jpg'
import pro_7_2 from '../assets/image/7-2.jpg'
import pro_7_3 from '../assets/image/7-3.jpg'
import pro_7_4 from '../assets/image/7-4.jpg'
import pro_7_5 from '../assets/image/7-5.jpg'

import pro_8_1 from '../assets/image/8-1.jpg'
import pro_8_2 from '../assets/image/8-2.jpg'
import pro_8_3 from '../assets/image/8-3.jpg'
import pro_8_4 from '../assets/image/8-4.jpg'
import pro_8_5 from '../assets/image/8-5.jpg'

import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";
import Head from './Head';
import Header from './Header';
import Footer from './Footer';

const ProductData = [
    {
        id: 1,
        imgsrc: product1,
        alt: "Harshali Drops Earrings Image",
        proName: "Harshali Drops Earrings",
        price: 14000,
        hover_image: Pro_1_1,
        old_price: 20000,
        rating: 4,
        allImage: [Pro_1_1, Pro_1_3, Pro_1_2, Harshali]
    },
    {
        id: 2,
        imgsrc: pro_2_2,
        alt: "Green Sparkle Drops",
        proName: "Green Sparkle Drops ",
        price: 14000,
        hover_image: pro_2_4,
        old_price: 20000,
        rating: 4,
        allImage: [pro_2_1, pro_2_2, pro_2_3, pro_2_4]


    },
    {
        id: 3,
        imgsrc: pro_3_1,
        alt: "Periwinkle Pendant",
        proName: "Periwinkle Pendant",
        price: 14000,
        hover_image: pro_3_4,
        old_price: 20000,
        rating: 4,
        allImage: [pro_3_2, pro_3_3, pro_3_4, pro_3_5]


    },
    {
        id: 4,
        imgsrc: pro_4_6,
        details: "Ring In 22Kt Yellow Gold (11.08 gram)",
        alt: "Tulipa Drops Earrings",
        proName: "Tulipa Drops Earrings",
        price: 14000,
        hover_image: pro_4_3,
        old_price: 20000,
        rating: 4,
        allImage: [pro_4_2, pro_4_4, pro_4_3, pro_4_5]

    },
    {
        id: 5,
        imgsrc: pro_5_1,
        proName: "Adorable Heart Diamond Ring",
        alt: "Adorable Heart Diamond Ring",
        price: 14000,
        hover_image: pro_5_3,
        old_price: 20000,
        rating: 4,
        allImage: [pro_5_2, pro_5_3, pro_5_4, pro_5_5]


    },
    {
        id: 6,
        imgsrc: pro_6_2,
        proName: "Bansuri Pendant",
        alt: "Bansuri Pendant",
        price: 14000,
        hover_image: pro_6_3,
        old_price: 20000,
        rating: 4,
        allImage: [pro_6_1, pro_6_3, pro_6_4, pro_6_5]


    },
    {
        id: 7,
        imgsrc: pro_7_1,
        proName: "Amoli Necklace",
        alt: "Amoli Necklace",
        price: 14000,
        hover_image: pro_7_3,
        old_price: 20000,
        rating: 4,
        allImage: [pro_7_2, pro_7_3, pro_7_4, pro_7_5]


    },
    {
        id: 8,
        imgsrc: pro_8_1,
        proName: "Abia Stud Earrings",
        alt: "Abia Stud Earrings",
        price: 14000,
        hover_image: pro_8_3,
        old_price: 20000,
        rating: 4,
        allImage: [pro_8_2, pro_8_3, pro_8_4, pro_8_5]


    }
]
function ProductDetail() {

    const { id } = useParams();
    const product = ProductData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }
    const [showImage, setShowImage] = useState(product ? product.imgsrc : '');

    const Controls = () => {
        const { zoomIn, zoomOut } = useControls();
        return (
            <div className='absolute left-2 top-2'>
                <button className='text-2xl w-9 h-16 bg-gray-200 block' onMouseDownCapture={() => zoomIn()}>+</button>
                <button className='text-2xl w-9 h-16 bg-gray-200 mt-2  block' onMouseUpCapture={() => zoomOut()}>-</button>
            </div>
        );
    };
    return (
        <>
            <Head />
            <Header />
            <div className=" bg-white">
                <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-4 gap-12 p-6 rounded-lg">
                        <div className=" relative border-2 rounded lg:col-span-2 w-full lg:sticky top-0 text-center">
                            <button type="button" className=" text-rose-400  absolute text-3xl top-4 right-4 p-1 bg-gray-100 rounded-full">
                                <CiHeart />
                            </button>
                            <div className="w-3/4 h-3/4  mx-auto">
                                <TransformWrapper >
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
                                                { label: 'Total Value', price: '₹ 14000', isBold: true },
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
                                    onClick={() => alert('You cannot buy right now')}
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
                    <h3 className="text-2xl text-center mt-8 font-bold tracking-tight text-rose-400 capitalize sm:text-4xl">product details</h3>
                    <div className='flex justify-center  pr-2 mt-8 gap-6 max-md:flex-wrap '>
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
                    <div className='text-center w-3/4 mx-auto  my-8'>
                        <h3 className="text-2xl text-center p-4 font-bold tracking-tight text-rose-400 capitalize sm:text-4xl">price breakup</h3>
                        <p>Value-based pricing ensures that our customers feel happy paying price for the value they're getting. Moreover, individual narration (gold price, diamond price, making charges, GST, discount if any) of every product helps our customer to compare the price more easily as we are confident enough that the customers will return to us after comparing the price and quality.</p>
                    </div>

                    <Feedback />

                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
