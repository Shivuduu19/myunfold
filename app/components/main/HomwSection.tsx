import Image from 'next/image'
import React from 'react'
import jam from '@/public/unfold/665114658293e25fc21ed174_jamm-logo.svg'
import myfont from '@/app/fonts/fontfile'

const HomwSection = () => {
    return (
        <div className='bg-[#fff] betmt:h-auto rounded-[3em] h-[40em] my-[6.5em] flex relative overflow-hidden '>
            <div className='pointer-events-none flex betmt:flex-col betmt:justify-between betmt:items-start betmt:relative flex-row items-end justify-between w-full pt-[5em] px-[5em] absolute top-[0%] bottom-auto left-[0%] right-[0%]'>
                <div className=' betmt:w-auto w-[30em] '>
                    <Image src={jam} alt='' className='w-[60%]' />
                    <div className='mt-[30px] max-w-[440px] '>
                        <h2 className='tracking-[-0.02em] mobile:text-[5.5em] betmt:text-[4.6em] text-[4em] font-normal leading-[1.2] my-0'>
                            Unfold’s
                            <br />
                            subscription service
                        </h2>
                    </div>
                </div>
                <div className='grid mb-[1em] mobile:my-[5em] betmt:my-[3em] betmt:w-full tablet:grid-cols-[1fr_1fr] tablet:grid-flow-row grid-flow-col auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto] gap-y-[0.6em] gap-x-[5.5em]'>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em]  text-[1.125em] font-normal leading-[1.3]`}>Branding</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Print</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Strategy</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Logos</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Consulting</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Web Design</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Illustration</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Copywriting</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Development</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>UI/UX</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Product</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Apps</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Icons</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] whitespace-nowrap`}>Design Systems</p>
                    <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>Prototyping</p>

                </div>
            </div>
        </div>
    )
}

export default HomwSection