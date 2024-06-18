import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import daimond from '../assets/image/daimond.mp4'

function ProductFeature() {

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    })

    const Technical_Contant = ["100% Refund", "International Shiping", "Lifetime Exchange", " Handicraft Jewelary", "Certifild Jewelary", "Luxury Pakageing"]

    return (
        <>

            <div className="bg-white py-16 sm:py-12 mt-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center" data-aos="zoom-in-up">
                        <h2 className="text-3xl font-bold tracking-tight text-rose-400 sm:text-4xl">
                            Technical Specifications
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            The walnut wood card tray is precision milled to perfectly fit a stack
                            of Focus cards. The powder coated steel divider separates active cards
                            from new ones, or can be used to archive important task lists.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto" data-aos="zoom-in-up">
                            <h3 className="text-2xl font-bold tracking-tight text-rose-400" >

                                We Are Make Trust
                            </h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet
                                indis perferendis blanditiis repellendus etur quidem assumenda.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-rose-400">
                                    What’s included
                                </h4>
                                <div className="h-px flex-auto bg-fuchsia-100" />
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4  leading-6 text-gray-900 text-xl font-bold sm:grid-cols-2 sm:gap-6"
                            >
                                {
                                    Technical_Contant.map((item, index) => <li className="flex gap-x-3" key={index}>
                                        <svg
                                            className="h-6 w-5 flex-none text-indigo-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {item}
                                    </li>)

                                }
                            </ul>
                        </div>
                        <div className="-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0" data-aos="flip-right">
                            <img className="h-full w-full object-cover object-center rounded-3xl" src='https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Customized.jpg' />
                        </div>
                    </div>
                </div>
            </div>




            <div className='feature_banner '>
                <div className=" mx-auto mt-6 max-w-2xl overflow-hidden sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg" data-aos="fade-down">

                        <video width="400" className="h-full w-full object-cover object-center" loop muted autoPlay>
                            <source src={daimond} type="video/mp4" />
                        </video>

                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">

                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg" data-aos="zoom-in-up">
                            <img
                                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-ring-24052024.jpg"
                                alt="Model wearing plain gray basic tee."
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg " data-aos="zoom-in-up">
                            <img
                                src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/diamond-block/Diamond-bangle-24052024.jpg"
                                alt="Model wearing plain gray basic tee."
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg" data-aos="fade-down">
                        <img
                            src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/gold-jewellery/gold-necklace-28052024.jpg"
                            alt="Model wearing plain white basic tee."
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFeature