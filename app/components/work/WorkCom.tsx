import Image from 'next/image'
import React from 'react'

const WorkCom = ({ src, title }: any) => {
    return (
        <div className='flex flex-col gap-[2em]'>

            <a href="" className='rounded-[3em] w-full pt-[100%] overflow-hidden relative max-w-full inline-block'>
                <Image src={src} alt='' className='absolute top-[0%] bottom-[0%] left-[0%] right-[0%] w-full h-full object-cover' />
            </a>
            <div className='pl-[1.5em]'>
                <h4 className='tracking-[-.02em] mobile:text-[4.8em] betmt:text-[3em] tablet:text-[2.2em]  text-[1.75em] font-normal leading-[1.2] my-0 '>{title}</h4>
            </div>
        </div>
    )
}

export default WorkCom