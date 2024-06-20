import myfont, { myfontGrotesk } from '@/app/fonts/fontfile'
import Image from 'next/image'
import React from 'react'

const Collectivecomp = ({ src, heading, desc }: any) => {
    return (
        < div className='flex flex-col gap-[1em] mb-[2.5em]'>
            <a href="" className='rounded-[3em] w-full relative overflow-hidden max-w-full inline-block'>
                <Image src={src} alt='' className='object-cover w-full h-full static ' />

            </a>
            <div className='flex flex-col mobile:my-[3em] betmt:pl-[8.6em] tablet:mt-[1.5em] tablet:pl-[4em]  gap-[.6em] pl-[2em]'>
                <h4 className='tracking-[-.02em] text-[1.75em] font-normal leading-[1.2] mobile:text-[4.8em] betmt:text-[3em] tablet:text-[2.2em] my-0'>{heading}</h4>
                <div className={`${myfontGrotesk.variable} font-grotesk text-[.875em] mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] font-normal leading-[1.4]`}>{desc}</div>
            </div>
        </div>



    )
}

export default Collectivecomp