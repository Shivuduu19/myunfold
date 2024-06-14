import React from 'react'
import Header from './Header'
import Intro from './Intro'

const Main = () => {
    return (
        <div>
            <Header />
            <div className='max-w-[1700px] w-full mx-auto px-[4.375em]'>

                <Intro />
                <div className='h-screen'></div>
            </div>
        </div>
    )
}

export default Main