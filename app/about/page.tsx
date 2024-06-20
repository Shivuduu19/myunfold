import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/main/Header'
import myfont from '../fonts/fontfile'
import Banner from '../components/main/Banner'
import HomwSection from '../components/main/HomwSection'
import CollectiveGroup from '../components/about/CollectiveGroup'
import Footer from '../components/main/Footer'

const page = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <div className='w-full'>
                <Header />
                <div className='w-full max-w-[1700px] mx-auto px-[4.375em]' >
                    <div className='flex justify-between items-end mb-[4.5em] betmt:mt-[7em] tablet:mt-[4.5em] gap-[6.25em]'>
                        <div className='w-[55em] betmt:w-auto'>
                            <h1 className={` ${myfont.variable} font-fk tracking-[-.04em] text-[10em] font-normal leading-[.9] my-0`} >
                                Pioneering
                                <br />
                                forward.
                            </h1>
                            <div className='mt-[2.5em]'>
                                <p className='tracking-[-.02em] text-[1.5em] mobile:text-[4.3em] betmt:text-[2.8em] font-normal leading-[1.2] '>
                                    We are a collective network of like-minded builders, designers and explorers. From consulting, to design and development and motion and marketing.
                                    <br />
                                    <br />
                                    We’re blessed to have partnered with many companies and amazing humans along the way. 🙏🏻
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner />
                <div className='w-full max-w-[1700px] mx-auto px-[4.375em]'>

                    <HomwSection />
                </div>

                <div className='w-full max-w-[1700px] mx-auto px-[4.375em]'>
                    <h1 className='tracking-[-.04em] text-[10em] font-normal leading-[.9]'>
                        The
                        <br />
                        Collective.
                    </h1>
                    <div className='mt-[48px] mb-[2.5em]'>
                        <div className='grid auto-cols-[1fr] betmt:grid-cols-[1fr] tablet:grid-cols-[1fr_1fr]  grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-x-[2.5em] gap-y-[2.5em]'>

                            <CollectiveGroup />

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default page