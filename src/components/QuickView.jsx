import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel, Radio, RadioGroup, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { MdCurrencyRupee } from "react-icons/md";

import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";

const product = {
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    sizes: [
        { name: "8", inStock: true },
        { name: '10', inStock: true },
        { name: '12', inStock: true },
        { name: '14', inStock: true },
        { name: '16', inStock: true },
        { name: '18', inStock: true },
        { name: '20', inStock: true },
        { name: '24', inStock: false },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function QuickView({ data, open, setOpen }) {
    const [currentImage, setCurrentImage] = useState(data.imgsrc)
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    const Controls = () => {
        const { zoomIn, zoomOut } = useControls();
        return (
            <div className='absolute top-10 z-10'>
                <button className='text-2xl w-9 h-16 bg-gray-200 block' onMouseDownCapture={() => zoomIn()}>+</button>
                <button className='text-2xl w-9 h-16 bg-gray-200 mt-2  block' onMouseUpCapture={() => zoomOut()}>-</button>
            </div>
        );
    };
    console.log(data)
    return (
        <>

            <Transition show={open}>

                <Dialog className="relative z-10" onClose={setOpen}>
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <DialogPanel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="aspect-h-3 aspect-w-2  sm:col-span-4 lg:col-span-5">

                                                <div className="w-full h-full z-100 object-contain">
                                                    <TransformWrapper >
                                                        <Controls />
                                                        <TransformComponent>
                                                            <img src={currentImage} alt={data.alt} className="object-cover overflow-hidden object-center cursor-move" />
                                                        </TransformComponent>
                                                    </TransformWrapper>
                                                </div>





                                                <div className='flex w-full h-full z-50'>

                                                    {
                                                        data.allImage.map(changeImg => <div className='w-full h-full p-0.5 cursor-pointer bg-gray-100' >
                                                            <img className='w-full h-full' src={changeImg.nextImg} alt={data.alt} onClick={() => setCurrentImage(changeImg.nextImg)} />
                                                        </div>)
                                                    }
                                                </div>
                                            </div>

                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2 className="text-2xl font-bold text-rose-400 sm:pr-12">{data.proName}</h2>

                                                <section aria-labelledby="information-heading" className="mt-2">

                                                    <p className="flex text-2xl text-gray-900"><MdCurrencyRupee />{data.price}</p>
                                                    <p className='text-sm text-gray-900'>MRP Incl. of all taxes</p>
                                                    <p className="flex text-sm text-gray-900"><MdCurrencyRupee /><del>{data.old_price}</del></p>

                                                    {/* Reviews */}
                                                    <div className="mt-6">
                                                        <h4 className="sr-only">Reviews</h4>
                                                        <div className="flex items-center">
                                                            <div className="flex items-center">
                                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                                    <StarIcon
                                                                        key={rating}
                                                                        className={classNames(
                                                                            product.rating > rating ? 'text-amber-500' : 'text-gray-200',
                                                                            'h-5 w-5 flex-shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                ))}
                                                            </div>
                                                            <p className="sr-only">{product.rating} out of 5 stars</p>
                                                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                {product.reviewCount} reviews
                                                            </a>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section aria-labelledby="options-heading" className="mt-10" sty>
                                                    <form>
                                                        <fieldset className="mt-10" aria-label="Choose a size">
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-sm font-medium text-gray-900">Size</div>
                                                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Size guide
                                                                </a>
                                                            </div>

                                                            <RadioGroup
                                                                value={selectedSize}
                                                                onChange={setSelectedSize}
                                                                className="mt-4 grid grid-cols-4 gap-4"
                                                            >
                                                                {product.sizes.map((size) => (
                                                                    <Radio
                                                                        key={size.name}
                                                                        value={size}
                                                                        disabled={!size.inStock}
                                                                        className={({ focus }) =>
                                                                            classNames(
                                                                                size.inStock
                                                                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                                                focus ? 'ring-2 ring-rose-500' : '',
                                                                                'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                                            )
                                                                        }
                                                                    >
                                                                        {({ checked, focus }) => (
                                                                            <>
                                                                                <span>{size.name}</span>
                                                                                {size.inStock ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            checked ? 'border-rose-500' : 'border-transparent',
                                                                                            focus ? 'border' : 'border-2',
                                                                                            'pointer-events-none absolute -inset-px rounded-md'
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                ) : (
                                                                                    <span
                                                                                        aria-hidden="true"
                                                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                                    >
                                                                                        <svg
                                                                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                                            viewBox="0 0 100 100"
                                                                                            preserveAspectRatio="none"
                                                                                            stroke="currentColor"
                                                                                        >
                                                                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                                        </svg>
                                                                                    </span>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                    </Radio>
                                                                ))}
                                                            </RadioGroup>
                                                        </fieldset>

                                                        <div className='flex gap-5'>
                                                            <button
                                                                type="submit"
                                                                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-rose-400 px-8 py-3 text-base font-medium text-white hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
                                                            >
                                                                Add to Cart
                                                            </button>

                                                            <button
                                                                type="submit"
                                                                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-rose-400 px-8 py-3 text-base font-medium text-white hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
                                                            >
                                                                Buy Now
                                                            </button>
                                                        </div>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default QuickView