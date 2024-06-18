import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Category() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    })

    return (
        <>
            <div className='category overflow-hidden'>
                <div className='category_box' data-aos="fade-down">
                    <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-ring-24052024.jpg' alt='category' />
                </div>
                <div className='category_box' data-aos="fade-up">
                    <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-chain-24052024.jpg' alt='category' />
                </div>
                <div className='category_box' data-aos="fade-down">
                    <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-kada-24052024.jpg' alt='category' />
                </div>
                <div className='category_box' data-aos="fade-up">
                    <img src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-view-all-24052024.jpg' alt='category' />
                </div>
            </div>
        </>
    )
}

export default Category