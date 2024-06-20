import myfont from '@/app/fonts/fontfile'
import Image from 'next/image'
import React from 'react'
import youfirst from '@/public/unfold/63e0839dd3e9be14a3914ebf_you first.svg'
import cuttingedge from '@/public/unfold/63e083f447ab584c75ba3c35_cutting edge.svg'
import freshAngles from '@/public/unfold/63e0839dd88ab866125f49fd_fresh angles.svg'
import hidenothing from '@/public/unfold/63e0839d8b6096bf904e78ff_hide nothing.svg'

const Values = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center mb-[4em]'>
                <div className='flex flex-col items-start w-[25em] max-w-full'>
                    <p className={`${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] my-0`}>Your brand isn’t an aesthetic. It’s a living organism. We help it thrive by bringing a dynamic perspective and collaborative expertise to everything we build.</p>
                </div>
                <div className='text-right w-[30em] max-w-full'>
                    <h2 className='tracking-[-.02em] text-[7.5em] font-normal  leading-[1] my-0'>Beyond Design</h2>
                </div>
            </div>
            <div className='grid mb-[6.5em] auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-x-[1.5em] gap-y-[1.5em]'>
                <div className='flex flex-col bg-[#fff] rounded-[3em] p-[3.5em] gap-[4em]'>
                    <Image src={youfirst} alt='' className='w-[5.5em]' />
                    <div className='flex flex-col justify-end flex-1 gap-[1em]'>
                        <h3 className='tracking-[-0.02em] text-[2.5em] font-normal leading-[1.2] my-0'>Your First</h3>
                        <p className='tracking-[-0.02em] text-[1.75em] font-normal leading-[1.2] my-0'>You’re the reason we’re here, full stop. We value collaboration above ego and tackle the extra mile to achieve your vision with a can-do attitude.</p>
                    </div>
                </div>
                <div className='flex flex-col bg-[#31f7c8] rounded-[3em] p-[3.5em] gap-[4em]'>
                    <Image src={cuttingedge} alt='' className='w-[5.5em]' />
                    <div className='flex flex-col justify-end flex-1 gap-[1em]'>
                        <h3 className='tracking-[-0.02em] text-[2.5em] font-normal leading-[1.2] my-0'>Cutting Edge</h3>
                        <p className='tracking-[-0.02em] text-[1.75em] font-normal leading-[1.2] my-0'>Proactive about adopting the latest technologies, we deliver forward-thinking brand solutions that evolve to serve future needs.</p>
                    </div>
                </div>
                <div className='flex flex-col bg-[#f6fa5e] rounded-[3em] p-[3.5em] gap-[4em]'>
                    <Image src={hidenothing} alt='' className='w-[5.5em]' />
                    <div className='flex flex-col justify-end flex-1 gap-[1em]'>
                        <h3 className='tracking-[-0.02em] text-[2.5em] font-normal leading-[1.2] my-0'>Hide Nothing</h3>
                        <p className='tracking-[-0.02em] text-[1.75em] font-normal leading-[1.2] my-0'>“Transparency” isn’t a buzzword for us — it’s just how we roll. You’re behind-the-scenes with our team, following our progress every step of the way.</p>
                    </div>
                </div>
                <div className='flex flex-col bg-[#61c6ff] rounded-[3em] p-[3.5em] gap-[4em]'>
                    <Image src={freshAngles} alt='' className='w-[5.5em]' />
                    <div className='flex flex-col justify-end flex-1 gap-[1em]'>
                        <h3 className='tracking-[-0.02em] text-[2.5em] font-normal leading-[1.2] my-0'>Fresh Angles</h3>
                        <p className='tracking-[-0.02em] text-[1.75em] font-normal leading-[1.2] my-0'>Explore. Adapt. Stay curious. Our team lives by these values, designing to inspire and create a better, more interesting world.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values