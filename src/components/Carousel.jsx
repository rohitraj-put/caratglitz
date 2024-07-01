import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {

    const images = [
        "https://static.malabargoldanddiamonds.com/media/bsimages/Caliesta-web1-14052024.jpg",
        "https://static.malabargoldanddiamonds.com/media/bsimages/Men_Gold_Kada_NTR_web_01032024.jpg",
        "https://static.malabargoldanddiamonds.com/media/bsimages/Zoule-Collection-web-09022024.jpg",
        "https://static.malabargoldanddiamonds.com/media/bsimages/Gold-chain-banner-web1.jpg"
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container w-full overflow-hidden -z-10">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='w-full'>
                        <img className='w-full' src={image} alt={`banner_image_${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
