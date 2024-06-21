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
            img: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/w/Gold-Pendant.jpg',
            alt: 'Gold Pendant',
            title: 'Desk and Office',
            description: 'Work from home accessories',
            animation: 'fade-down'
        },
        {
            img: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/w/Gold-Earring.jpg',
            alt: 'Gold Earring',
            title: 'Self-Improvement',
            description: 'Journals and note-taking',
            animation: 'fade-up'
        },
        {
            img: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/w/Gold-Chain.jpg',
            alt: 'Gold Chain',
            title: 'Travel',
            description: 'Daily commute essentials',
            animation: 'fade-down'
        }
    ];

    return (
        <div className="overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-18 lg:max-w-none lg:py-0">
                <h2 className="text-3xl font-bold text-center tracking-tight text-rose-400 sm:text-4xl">Collections</h2>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {collections.map((collection, index) => (
                        <div key={index} className="group relative">
                            <div
                                className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                                data-aos={collection.animation}
                            >
                                <img
                                    src={collection.img}
                                    alt={collection.alt}
                                    className="h-full w-full object-cover object-center hover:scale-125"
                                />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    {collection.title}
                                </a>
                            </h3>
                            <p className="text-base font-semibold text-rose-400">
                                {collection.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MidSec;
