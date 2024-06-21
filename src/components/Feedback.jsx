import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Feedback() {

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    })
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000
    };

    const feedBack = [
        {
            customer_img: "https://img.freepik.com/free-photo/close-up-attractive-young-woman_23-2148204689.jpg?t=st=1718170248~exp=1718173848~hmac=c1ee21f71db16e5bbba598613befc5fad974ed8b138f1956b9d2076b903f7f61&w=740",
            feeback: "My order of bracelets arrived recently, and they are AMAZING! The price and size are ideal, and the colors are stunning. I must say again how much I adore Halstead. Your rates, selection, and customer service are excellent, and I appreciate that you're just up the hill from me, so I can always get my goods quickly.",
            customer_name: "Alisha"
        },
        {
            customer_img: "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?t=st=1718170155~exp=1718173755~hmac=441bc8d9bc77ecfdd8fee757dc23e763636b7ef265c75701f09dcc2ef18db414&w=740",
            feeback: "I'm grateful for everything you've done. The products are excellent, the service is great, and the package is flawless. Without a doubt, I'll place another order!",
            customer_name: "John"
        },
        {
            customer_img: "https://img.freepik.com/free-photo/portrait-man-wearing-white-clothes_23-2148910266.jpg?t=st=1718170415~exp=1718174015~hmac=bc566640b7447c94bf695a2c1e41f46a55ae0d730875198ce78b41e1807c6147&w=740",
            feeback: "I just wanted to let you know how happy I am with the ring. My daughter hasn't seen it yet, but I'm waiting to give it to her for their ring ceremony, so I know she'll be happy too. Unlike a class ring that she might wear very occasionally, it will be something she can wear forever. Once again, thanks",
            customer_name: "Morgan"
        },

    ]
    return (
        <div className="slider-container mb-4 overflow-hidden" >
            <h1 className="text-3xl font-bold tracking-tight text-rose-400 sm:text-4xl p-8 text-center capitalize" >What Our
                Customers Say</h1>
            <Slider {...settings} className="slider_card_main">
                {
                    feedBack.map((item, index) => <div className="slider_card text-center border-r-2" key={index}>
                        <div className="py-3 px-3 w-28 h-28 m-auto">
                            <img className="rounded-full border-2 border-rose-500" src={item.customer_img} />

                        </div>
                        <p className="p-14 rounded-3xl max-md:p-1 "><q>{item.feeback}</q></p>
                        <div className="flex justify-center text-2xl text-amber-500">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <h1 className="slider_contant">{item.customer_name}</h1>
                    </div>)
                }
            </Slider>
        </div>


    );
}

export default Feedback;
