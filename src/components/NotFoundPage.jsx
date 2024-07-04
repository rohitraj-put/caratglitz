import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

function NotFoundPage() {
    return (
        <>
            <Navbar />
            <Header />
            <div className='w-full h-[75vh]'>
                <img src='https://property.ca/static/images/404_illustration_property.png' className='w-full h-full object-contain' />
            </div>
        </>
    )
}

export default NotFoundPage