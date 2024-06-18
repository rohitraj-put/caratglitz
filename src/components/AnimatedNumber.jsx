import React from 'react'
import CountUp from 'react-countup'

function AnimatedNumber() {
    return (
        <>
            <div className='count_container'>
                <div className='count_up'>
                    <div>
                        <CountUp className='order-first text-5xl font-semibold tracking-tight text-white sm:text-6xl' start={0} end={1000} suffix='+' duration={5} />
                        <p className='text-2xl font-bold text-center tracking-tight text-white sm:text-2xl'>Customers</p>
                    </div>
                    <div>
                        <CountUp className='order-first text-5xl font-semibold tracking-tight text-white sm:text-6xl' start={0} end={800} suffix='+' duration={5} />
                        <p className='text-2xl font-bold text-center tracking-tight text-white sm:text-2xl'>Products</p>
                    </div>
                    <div >
                        <CountUp className='order-first text-5xl font-semibold tracking-tight text-white sm:text-6xl' start={0} end={125} suffix='+' duration={5} />
                        <p className='text-2xl font-bold text-center tracking-tight text-white sm:text-2xl'>Stores</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AnimatedNumber