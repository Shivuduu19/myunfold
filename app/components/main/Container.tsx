
import React from 'react'

import HomwSection from './HomwSection'
import Values from './Values'
import ValuesSection from './ValuesSection'

const Container = () => {
    return (
        <div className='w-full max-w-[1700px] mx-auto px-[4.375em]'>
            <HomwSection />
            {/* <Values /> */}
            <ValuesSection />
        </div>
    )
}

export default Container