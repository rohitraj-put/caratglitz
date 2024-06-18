import React from 'react'
import Carousel from './Carousel'
import MidSec from './MidSec'
import Products from './Products'
import ProductSlider from './ProductSlider'
import ProductFeature from './ProductFeature'
import AnimatedNumber from './AnimatedNumber'
import Feedback from './Feedback'
import ProductVeraity from './ProductVeraity'
import Category from './Category'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'

function Home() {
    return (
        <>
            <Carousel />
            <ProductVeraity />
            <MidSec />
            <Products />
            <ProductSlider />
            <ProductFeature />
            <AnimatedNumber />
            <Category />
            <Feedback />
        </>
    )
}

export default Home