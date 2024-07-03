import React, { useEffect } from "react";
import Slider from "react-slick";
import nosering from '../assets/image/nosering.png'
import nosepin from '../assets/image/nosepin.png'
import bracelet from '../assets/image/Shop by cat -Bracelets.jpg'
import Earrings from '../assets/image/Shop by cat - Earring.png'
import pendents from '../assets/image/Pendants.jpg'
import ring from '../assets/image/ring.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

function ProductSlider() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    const slider_card = [
        {
            img_name: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/04_april/homepage/Gemstone-ring.jpg",
            Link: "/Ring"
        },
        {
            img_name: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/04_april/homepage/gemstone-earring.jpg",
            Link: "/Earrings"

        },
        {
            img_name: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/04_april/homepage/gemstone-necklace.jpg",
            Link: "/Necklace"

        },
        {
            img_name: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/04_april/homepage/Gemstone-pendant.jpg",
            Link: "/Pendant"

        },
        {
            img_name: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/04_april/homepage/Gemstone-bangle.jpg",
            Link: "#"
        },

    ]
    return (
        <div className="slider-container mb-4 text-center overflow-hidden" data-aos="fade-up">
            <h1 className="text-3xl font-bold tracking-tight text-rose-400 sm:text-4xl pt-8  ">Gemstone Jewellery</h1>
            <p className="pb-4">Capturing timeless grace in each precious stone</p>
            <Slider {...settings} className="slider_card_main">
                {
                    slider_card.map((item, index) => <div className="slider_card rounded-3xl" key={index}
                        data-aos-anchor-placement="top-bottom">
                        <Link to={`${item.Link}`}>
                            <img className="p-2 rounded-3xl" src={item.img_name} alt="products_slider_image" />
                        </Link>
                    </div>)
                }
            </Slider>
        </div>


    );
}

export default ProductSlider;
