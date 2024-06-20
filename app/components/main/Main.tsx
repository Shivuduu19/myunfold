import React from 'react'
import Header from './Header'
import Intro from './Intro'
import HomeWork from './HomeWork'
import Testimonial from './Testimonial'
import Friends from './Friends'
import Banner from './Banner'
import Container from './Container'
import Values from './Values'
import Footer from './Footer'

const Main = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Header />
            <div className='max-w-[1700px] w-full mx-auto px-[4.375em]'>

                <Intro />
                <HomeWork />
                <Testimonial />
                <Friends />


            </div>
            <Banner />


            <Container />
            <Footer />


        </div>
    )
}

export default Main