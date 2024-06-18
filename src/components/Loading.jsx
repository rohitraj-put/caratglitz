import React from 'react'
import LoadingLogo from '../assets/image/LoadingLogo.png'
function Loading() {
    return (

        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-20 h-20 mt-60 border-8 text-rose-400 backdrop:  text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-rose-400 rounded-full">
                <img className='rounded-full' src={LoadingLogo} alt='logo Image' />
            </div>
            <h4 className='font-bold text-rose-400'>Loading...</h4>
        </div>
    )
}

export default Loading