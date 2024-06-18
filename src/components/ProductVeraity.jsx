import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'


function ProductVeraity() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    })

    return (
        <div className='product_veraity '>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/fast-ships-2.gif' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/focus-block/best-seller.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/focus-block/new-arrivals.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/02_feb/ind-homepage/category-slider/solitare.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/02_feb/ind-homepage/category-slider/Anklet.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/Bangle-1.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/Offer.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/02_feb/ind-homepage/category-slider/Mangalsutra.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/Chain-1.jpg' alt='trust' />
            </div>
            <div className='veraity_box' data-aos="zoom-in">
                <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/band.jpg' alt='trust' />
            </div>
        </div>
    )
}

export default ProductVeraity