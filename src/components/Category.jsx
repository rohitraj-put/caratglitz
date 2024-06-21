import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const categories = [
    {
        src: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-ring-24052024.jpg',
        alt: 'Platinum Ring',
        animation: 'fade-down'
    },
    {
        src: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-chain-24052024.jpg',
        alt: 'Platinum Chain',
        animation: 'fade-up'
    },
    {
        src: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-kada-24052024.jpg',
        alt: 'Platinum Kada',
        animation: 'fade-down'
    },
    {
        src: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/platinum%20block/platinum-view-all-24052024.jpg',
        alt: 'View All Platinum Jewelry',
        animation: 'fade-up'
    }
];

function Category() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    return (
        <div className='category overflow-hidden'>
            {categories.map((category, index) => (
                <div className='category_box' data-aos={category.animation} key={index}>
                    <img src={category.src} alt={category.alt} />
                </div>
            ))}
        </div>
    );
}

export default Category;
