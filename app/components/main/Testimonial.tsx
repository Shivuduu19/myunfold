'use client'
import myfont from '@/app/fonts/fontfile'
import { motion, useScroll, useTransform } from 'framer-motion'
import Card from '../Card'
import nicols from '@/public/unfold/665a014030cda3f1845a8562_image_2024-05-31_12-34-52.png'
import charles from "@/public/unfold/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png"
import josh from '@/public/unfold/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png'
import veronica from '@/public/unfold/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png'
import cocoon from '@/public/unfold/665a01690c508b5bebac1311_image_2024-05-31_12-38-04-p-500.png'
import top from '@/public/unfold/63e523b634d60a18bd161b8f_clutch.svg'
import pencil from '@/public/unfold/63e524b35f5d677e9845c642_pencil.svg'
import chat from '@/public/unfold/63e525277e6bfc538276cd57_chat.svg'
import { useRef } from 'react'
import SmallCard from '../SmallCard'
import GifCompo from '../GifCompo'
import michael from '@/public/unfold/63e525cd1a1547868d38d1f6_michael scott.gif'
import farley from '@/public/unfold/63e526efa973a610da0df9e8_farley.gif'
import shaq from '@/public/unfold/63e5268c56ebad7bf136fb47_shaq.gif'
import Image from 'next/image'
const Testimonial = () => {
    const ref = useRef(null)

    const cards = [
        {
            paragraph: `“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”`,
            desc: 'Nikola Todorovic from Wonder Dynamics',
            src: nicols,
            width: '31em',
            top: '0%',
            bottom: 'auto',
            left: '0%',
            right: 'auto',
            rotate: '15'

        },
        {
            paragraph: `“When the Data Scientists are saying the UX/UI looks good…that's a BIG deal (rarely happens). Well done 👏”`,
            desc: 'Charles Vesley from Merck',
            src: charles,
            width: '26em',
            top: '0%',
            bottom: 'auto',
            left: 'auto',
            right: '0%',
            rotate: '-20'
        }, {
            paragraph: '“Huge thanks to the Unfold team. Really proud of this one.”',
            desc: 'Josh Taylor from Solana',
            src: josh,
            width: '16em',
            top: 'auto',
            bottom: '17em',
            left: 'auto',
            right: '-3em',
            rotate: '17'
        }, {
            paragraph: '“Your designers bring so many mind-opening ideas yet tangible designs to the project. I’m very impressed!”',
            desc: 'Veronica from Safepal',
            src: veronica,
            width: '26em',
            top: 'auto',
            bottom: '-1em',
            left: 'auto',
            right: 'auto',
            rotate: '-7.5'
        }, {
            paragraph: `“Unfold's done in a month and a half what we’ve been trying do in the last year and a half!”
            `,
            desc: 'Brandon Day from Cocoon',
            src: cocoon,
            width: '25.75em',
            top: 'auto',
            bottom: '13em',
            left: '-3em',
            right: 'auto',
            rotate: '23'
        },
    ]



    const dots = {
        initial: {
            y: 0,


        },
        animate: {
            y: ['-75%', '0', '-75%'],
            transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.1, repeat: Infinity, },
        }
    }
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })

    const value = useTransform(scrollYProgress, [0, 1], [0, 23])

    return (
        <div ref={ref} className='flex flex-col justify-center items-center betmt:py-[6em] mb-[10em] pt-[20em] pb-[24em] relative'>

            <div className='z-[1] flex gap-[1.5em] text-center flex-col items-center betmt:w-auto betmt:gap-[4em] w-[55em] max-w-full relative'>
                <div className='rounded-[100vw] flex gap-[0.75em] bg-[#fff] betmt:gap-[2em] betmt:px-[4em] tablet:py-[20px] tablet:px-[3em] items-center h-[2.25em] pl-[1em] pr-[1em] '>
                    <p className='text-[0.875em] font-normal mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] leading-[1.4] mb-0 mt-0'>several people are typing</p>
                    <motion.div animate='animate' variants={dots} className='flex items-center tablet:gap-[5px] gap-[0.25em]'>
                        <motion.div variants={dots} className='bg-[#31f7c8] mobile:w-[1.7em] mobile:h-[1.7em] tablet:w-[.7em] tablet:h-[.7em] rounded-[100vw] w-[0.375em] h-[0.375em]'></motion.div>
                        <motion.div variants={dots} className='bg-[#31f7c8] mobile:w-[1.7em] mobile:h-[1.7em] tablet:w-[.7em] tablet:h-[.7em] rounded-[100vw] w-[0.375em] h-[0.375em]'></motion.div>
                        <motion.div variants={dots} className='bg-[#31f7c8] mobile:w-[1.7em] mobile:h-[1.7em] tablet:w-[.7em] tablet:h-[.7em] rounded-[100vw] w-[0.375em] h-[0.375em]'></motion.div>
                    </motion.div>
                </div>
                <h2 className='tracking-[-0.02em] text-[5.25em] font-normal mobile:text-[6em] leading-[1]'>Our Clients Can’t Say Enough About Us.</h2>
                <div className='w-[30em] max-w-full betmt:w-auto '>
                    <p className={`${myfont.variable} font-fk text-[1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em]  font-normal leading-[1.3] `}>Take a look for yourself. No Slack messages were harmed in the making of this component.</p>
                </div>
            </div>


            <div className='betmt:grid betmt:mt-[8em] betmt:gap-y-[16px]'>
                <motion.div animate='card' className={`
            z-[2] betmt:static absolute top-[0%] left-[0%] right-auto bottom-auto `}>
                    <motion.div className={`betmt:w-auto betmt:rotate-0 betmt:h-full betmt:p-[3.5em] w-[31em] rotate-[15deg] cursor-grab flex flex-col bg-[#fff] rounded-[1.5em] gap-[.75em] items-start p-[1.5em]`}>
                        <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] my-0`}>“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”</p>
                        <div className='flex items-center betmt:flex-col betmt:gap-[2em] betmt:justify-start betmt:items-start betmt:mt-[5em] gap-[0.5em]'>
                            <div className='rounded-[100px]  overflow-hidden betmt:w-[6em] w-[1.5em] max-w-full '>
                                <Image src={nicols} alt='' />
                            </div>
                            <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] text-[0.875em] font-normal leading-[1.4] mb-0 mt-0`}>'Nikola Todorovic from Wonder Dynamics'</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div animate='card' className={`
             z-[2] betmt:static absolute top-[0%] left-auto right-[0%] bottom-auto `}>
                    <motion.div className={`betmt:w-auto betmt:rotate-0 betmt:h-full betmt:p-[3.5em] w-[26em] rotate-[-20deg] cursor-grab flex flex-col bg-[#fff] rounded-[1.5em] gap-[.75em] items-start p-[1.5em]`}>
                        <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] my-0`}>`“When the Data Scientists are saying the UX/UI looks good…that's a BIG deal (rarely happens). Well done 👏”`</p>
                        <div className='flex items-center gap-[0.5em] betmt:flex-col betmt:gap-[2em] betmt:justify-start betmt:items-start betmt:mt-[5em]'>
                            <div className='rounded-[100px] overflow-hidden betmt:w-[6em] w-[1.5em] max-w-full '>
                                <Image src={charles} alt='' />
                            </div>
                            <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] text-[0.875em] font-normal leading-[1.4] mb-0 mt-0`}> 'Charles Vesley from Merck'</p>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.div animate='card' className={`
                    z-[2] betmt:static absolute top-[auto] left-auto right-[-3em] bottom-[17em] `}>
                    <motion.div className={`betmt:w-auto betmt:rotate-0 betmt:h-full betmt:p-[3.5em] w-[16em] rotate-[17deg] cursor-grab flex flex-col bg-[#fff] rounded-[1.5em] gap-[.75em] items-start p-[1.5em]`}>
                        <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] my-0`}>“Huge thanks to the Unfold team. Really proud of this one.”'</p>
                        <div className='flex items-center gap-[0.5em] betmt:flex-col betmt:gap-[2em] betmt:justify-start betmt:items-start betmt:mt-[5em]'>
                            <div className='rounded-[100px] overflow-hidden betmt:w-[6em] w-[1.5em] max-w-full '>
                                <Image src={josh} alt='' />
                            </div>
                            <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] text-[0.875em] font-normal leading-[1.4] mb-0 mt-0`}>'Josh Taylor from Solana'</p>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.div animate='card' className={`
         z-[2] betmt:static absolute top-[auto] left-[auto] right-[auto] bottom-[-1em] `}>
                    <motion.div className={`betmt:w-auto betmt:rotate-0 betmt:h-full betmt:p-[3.5em] w-[26em] rotate-[-7.5deg] cursor-grab flex flex-col bg-[#fff] rounded-[1.5em] gap-[.75em] items-start p-[1.5em]`}>
                        <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] my-0`}>“Your designers bring so many mind-opening ideas yet tangible designs to the project. I’m very impressed!”</p>
                        <div className='flex items-center gap-[0.5em] betmt:flex-col betmt:gap-[2em] betmt:justify-start betmt:items-start betmt:mt-[5em]'>
                            <div className='rounded-[100px] overflow-hidden betmt:w-[6em] w-[1.5em] max-w-full '>
                                <Image src={veronica} alt='' />
                            </div>
                            <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] text-[0.875em] font-normal leading-[1.4] mb-0 mt-0`}>'Veronica from Safepal</p>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.div animate='card' className={`
         z-[2] betmt:static absolute top-[auto] left-[-3em] right-[auto] bottom-[13em] `}>
                    <motion.div className={`betmt:w-auto betmt:rotate-0 betmt:h-full betmt:p-[3.5em] w-[25.75em] rotate-[23deg] cursor-grab flex flex-col bg-[#fff] rounded-[1.5em] gap-[.75em] items-start p-[1.5em]`}>
                        <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] my-0`}>“Unfold's done in a month and a half what we’ve been trying do in the last year and a half!”</p>
                        <div className='flex items-center gap-[0.5em] betmt:flex-col betmt:gap-[2em] betmt:justify-start betmt:items-start betmt:mt-[5em]'>
                            <div className='rounded-[100px] overflow-hidden betmt:w-[6em] w-[1.5em] max-w-full '>
                                <Image src={cocoon} alt='' />
                            </div>
                            <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] text-[0.875em] font-normal leading-[1.4] mb-0 mt-0`}>'Brandon Day from Cocoon</p>
                        </div>
                    </motion.div>
                </motion.div>


            </div>

            <div className='betmt:hidden'>
                <motion.div className={`absolute top-[16em] left-[-2em] right-auto bottom-auto z-[2] `}>
                    <Image src={top} alt='' className={` w-[14em] rotate-[-18] `} />
                </motion.div>

                <motion.div className={`absolute top-[15.9em] left-auto right-[-2.5em] bottom-auto z-[2] `}>
                    <Image src={pencil} alt='' className={` w-[11.5em]  `} />
                </motion.div>

                <motion.div className={`absolute top-auto left-[1em] right-auto bottom-[-2em] z-[2] `}>
                    <Image src={chat} alt='' className={` w-[14em] rotate-[-18] `} />
                </motion.div>



                <motion.div className={`absolute left-[39.2em] top-[2em] right-auto bottom-auto  z-[2] `}>
                    <div className={`flex flex-col justify-center items-center rounded-[1.5em] w-[6.5em] h-[6.5em] overflow-hidden  `}>
                        <Image src={michael} alt='' className='w-full h-full' />
                    </div>
                </motion.div>
                <motion.div className={`absolute left-auto top-auto right-[6em] bottom-[3em]  z-[2] `}>
                    <div className={`flex flex-col justify-center items-center rounded-[1.5em] w-[6.5em] h-[6.5em] overflow-hidden  `}>
                        <Image src={farley} alt='' className='w-full h-full' />
                    </div>
                </motion.div>
                <motion.div className={`absolute left-[34.5em] top-auto right-auto bottom-[12.2em]  z-[2] `}>
                    <div className={`flex flex-col justify-center items-center rounded-[1.5em] w-[6.5em] h-[6.5em] rotate-[-18deg] overflow-hidden  `}>
                        <Image src={shaq} alt='' className='w-full h-full' />
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default Testimonial  