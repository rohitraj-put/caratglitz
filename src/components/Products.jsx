import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import ProductCard from './ProductCard';
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

function Products() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    })
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
            allImage: [
                { nextImg: Pro_1_1 },
                { nextImg: Pro_1_3 },
                { nextImg: Pro_1_2 },
                { nextImg: Harshali }
            ]
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
            allImage: [
                { nextImg: pro_2_1 },
                { nextImg: pro_2_2 },
                { nextImg: pro_2_3 },
                { nextImg: pro_2_4 }
            ]


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
            allImage: [
                { nextImg: pro_3_2 },
                { nextImg: pro_3_3 },
                { nextImg: pro_3_4 },
                { nextImg: pro_3_5 }
            ]


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
            allImage: [
                { nextImg: pro_4_2 },
                { nextImg: pro_4_4 },
                { nextImg: pro_4_3 },
                { nextImg: pro_4_5 }
            ]

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
            allImage: [
                { nextImg: pro_5_2 },
                { nextImg: pro_5_3 },
                { nextImg: pro_5_4 },
                { nextImg: pro_5_5 }
            ]


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
            allImage: [
                { nextImg: pro_6_1 },
                { nextImg: pro_6_3 },
                { nextImg: pro_6_4 },
                { nextImg: pro_6_5 }
            ]


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
            allImage: [
                { nextImg: pro_7_2 },
                { nextImg: pro_7_3 },
                { nextImg: pro_7_4 },
                { nextImg: pro_7_5 }
            ]


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
            allImage: [
                { nextImg: pro_8_2 },
                { nextImg: pro_8_3 },
                { nextImg: pro_8_4 },
                { nextImg: pro_8_5 }
            ]


        }
    ]
    return (
        <>


            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl py-10 font-bold text-center tracking-tight text-rose-400 sm:text-4xl">
                        Customers Also Purchased
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            ProductData.map((item, index) => <ProductCard key={index} item={item} />)
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products