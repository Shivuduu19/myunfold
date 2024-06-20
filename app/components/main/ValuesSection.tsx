import myfont, { myfontGrotesk } from '@/app/fonts/fontfile'
import Image from 'next/image'
import youfirst from '@/public/unfold/63e0839dd3e9be14a3914ebf_you first.svg'
import cuttingedge from '@/public/unfold/63e083f447ab584c75ba3c35_cutting edge.svg'
import freshAngles from '@/public/unfold/63e0839dd88ab866125f49fd_fresh angles.svg'
import hidenothing from '@/public/unfold/63e0839d8b6096bf904e78ff_hide nothing.svg'

const ValuesSection = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center mb-[4em] mobile:text-center mobile:gap-[4em] mobile:justify-between mobile:flex-col-reverse mobile:items-center mobile:mx-[6em] '>
                <div className='flex flex-col items-start w-[25em] mobile:w-auto tablet:w-[40em] max-w-full'>
                    <p className={`${myfontGrotesk.variable} font-grotesk text-[1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] font-normal leading-[1.3] my-0`}>Your brand isn’t an aesthetic. It’s a living organism. We help it thrive by bringing a dynamic perspective and collaborative expertise to everything we build.</p>
                </div>
                <div className='text-right w-[30em] max-w-full mobile:w-auto'>
                    <h2 className={` tracking-[-0.02em] text-[7.5em] font-normal  leading-[1] my-0`}>Beyond Design</h2>
                </div>
            </div>
            <div className='flex gap-[1.5em] mobile:flex-col mobile:gap-[4em]'>
                <div className='w-[33.333%] flex gap-[4em] mobile:w-auto flex-col justify-between rounded-[3em] p-[3.5em] bg-[#31f7c8]'>
                    <Image src={youfirst} alt='' className='w-[5.5em]' />
                    <div className='flex flex-col justify-end betmt:justify-center betmt:items-start flex-1 gap-[1em]'>
                        <h3 className='tracking-[-0.02em] mobile:text-[5em] betmt:text-[3.4em]  text-[2.5em] font-normal leading-[1.2] my-0'>You First</h3>
                        <p className={`${myfontGrotesk.variable} font-grotesk  text-[1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] font-normal leading-[1.3]  my-0`}>You’re the reason we’re here, full stop. We value collaboration above ego and tackle the extra mile to achieve your vision with a can-do attitude.</p>
                    </div>
                </div>


                <div className='grid auto-cols-[1fr]  grid-cols-[1fr] grid-rows-[1fr_1fr] flex-1 mobile:gap-y-[4em] betmt:grid-rows-[.25fr_1fr] gap-y-[1.5em] gap-x-[16px] '>
                    <div className='bg-[#fff] flex flex-col justify-between betmt:mx-auto p-[3.5em] rounded-[3em] gap-[4em]'>
                        <Image src={cuttingedge} alt='' className='w-[5.5em] ' />
                        <div className='flex flex-col justify-end betmt:justify-center betmt:items-start flex-1 gap-[1em]'>
                            <h3 className='tracking-[-0.02em] mobile:text-[5em] betmt:text-[3.4em]  text-[2.5em] font-normal leading-[1.2] my-0'>Cutting Edge
                            </h3>
                            <p className={`${myfontGrotesk.variable} font-grotesk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] my-0`}>Proactive about adopting the latest technologies, we deliver forward-thinking brand solutions that evolve to serve future needs.</p>
                        </div>
                    </div>
                    <div className='flex gap-[1.5em] betmt:flex-col betmt:gap-[1.5em] flex-1'>
                        <div className=' w-[50%] betmt:w-auto relative overflow-hidden flex gap-[4em] flex-col justify-between rounded-[3em] p-[3.5em] bg-[#f6fa5e]'>
                            <Image src={hidenothing} alt='' className='w-[5.5em]' />
                            <div className='flex flex-col betmt:justify-center betmt:items-start justify-end flex-1 gap-[1em]' >
                                <h3 className='tracking-[-0.02em] mobile:text-[5em] betmt:text-[3.4em] text-[2.5em] font-normal leading-[1.2] my-0' >Hide Nothing</h3>
                                <p className={`${myfontGrotesk.variable} font-grotesk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal   whitespace-pre-wrap leading-[1.3] my-0 `}>“Transparency” isn’t a buzzword for us — it’s  how we roll. You’re behind-the-scenes with our team, following our every move.</p>
                            </div>
                            {/* <div></div> */}
                        </div>
                        <div className=' w-[50%] betmt:w-auto relative overflow-hidden flex gap-[4em] flex-col justify-between rounded-[3em] p-[3.5em] bg-[#61c6ff]'>
                            <Image src={freshAngles} alt='' className='w-[5.5em]' />
                            <div className='flex flex-col  betmt:justify-center betmt:items-start flex-1 gap-[1em]' >
                                <h3 className='tracking-[-0.02em] mobile:text-[5em] betmt:text-[3.4em] text-[2.5em] font-normal leading-[1.2] my-0' >Fresh Angles</h3>
                                <p className={`${myfontGrotesk.variable} font-grotesk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em]  text-[1.125em] font-normal  leading-[1.3] my-0`}>Explore. Adapt. Stay curious. Our team lives by these values, designing to inspire and create a better, more interesting world.</p>
                            </div>
                            {/* <div></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValuesSection