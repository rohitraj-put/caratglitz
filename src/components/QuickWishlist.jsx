import React from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

function QuickWishlist({ open, setOpen, send }) {
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

                                    <div className="relative flex w-full justify-center items-center overflow-hidden bg-white px-4 pb-8 pt-8 shadow-2xl sm:px-6 sm:pt-4 md:p-4 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute bg-gray-200 rounded-full p-2 right-2 top-2 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <div >
                                            <h2 className='text-center text-3xl text-rose-400 font-bold '>My Wishlist</h2>
                                            {send}
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

export default QuickWishlist