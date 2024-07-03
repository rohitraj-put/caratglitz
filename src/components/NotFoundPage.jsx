import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

function NotFoundPage() {
    return (
        <>
            <Navbar />
            <Header />
            <div className='w-full h-80'>
                <img src='https://th.bing.com/th/id/R.53c67dce2d7a212287a80c00a02d9d8b?rik=J%2fOZHtnlDyFPTA&riu=http%3a%2f%2faccount.ugolysoft.com%2fpos%2fimages%2fPAGE-NOT-FOUND.png&ehk=UcKE8UtZKcq1onojHNzoCVe6J1e4wlLv5LEY1MpIjU4%3d&risl=&pid=ImgRaw&r=0' alt='page not found' className='w-full h-full object-contain' />
            </div>
        </>
    )
}

export default NotFoundPage