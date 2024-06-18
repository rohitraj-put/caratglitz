import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container w-full overflow-hidden">
            <Slider {...settings}>
                <div className='w-full'>
                    <img className='w-full' src="https://static.malabargoldanddiamonds.com/media/bsimages/Caliesta-web1-14052024.jpg" alt='banner_image' />
                </div>
                <div className='w-full'>
                    <img className='w-full' src="https://static.malabargoldanddiamonds.com/media/bsimages/Men_Gold_Kada_NTR_web_01032024.jpg" alt='banner_image' />
                </div>
                <div className='w-full'>
                    <img className='w-full' src='https://static.malabargoldanddiamonds.com/media/bsimages/Zoule-Collection-web-09022024.jpg' alt='banner_image' />
                </div>
                <div className='w-full'>
                    <img className='w-full' src='https://static.malabargoldanddiamonds.com/media/bsimages/Gold-chain-banner-web1.jpg' alt='banner_image' />
                </div>

            </Slider >
        </div>
    )
}

export default Carousel