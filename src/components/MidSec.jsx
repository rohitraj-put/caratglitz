import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MidSec() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    const collections = [
        {
            img: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/06_june/homepage-our-collection/Legendz-collection-1.jpg',
            alt: 'Gold Pendant',
          
            animation: 'fade-down'
        },
        {
            img: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/06_june/homepage-our-collection/kids-collection-1.jpg',
            alt: 'Gold Earring',
          
            animation: 'fade-up'
        },
        {
            img: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/06_june/homepage-our-collection/Sankha-Pola-1.jpg',
            alt: 'Gold Chain',
          
            animation: 'fade-down'
        }
    ];

    return (
        <div className="overflow-hidden mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-8 sm:py-18 lg:max-w-none lg:py-0">
                <h2 className="text-3xl font-bold text-center tracking-tight text-rose-400 sm:text-4xl">Collections</h2>
                <p className="pb-8 text-center">Discover our latest jewellery collection!</p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {collections.map((collection, index) => (
                        <div key={index} className="group relative overflow-hidden">
                            <div
                                className="relative h-80 w-full overflow-hidden  rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-80"
                                data-aos={collection.animation}
                            >
                                <img
                                    src={collection.img}
                                    alt={collection.alt}
                                    className="h-full w-full object-fill rounded-xl duration-200 hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MidSec;
