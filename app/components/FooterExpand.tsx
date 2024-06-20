'use client'
import Image from 'next/image'
import { motion, transform } from 'framer-motion'
import coffee from '@/public/unfold/640b86c26276f0736b64eb13_coffee.svg'
import { myfoldAlt } from '../fonts/fontfile'

const FooterExpand = () => {

    const footerImgexpand = {
        hover: {
            display: 'block',

            scaleX: 1,
            scaleY: 1,
            transition: {
                staggerChildren: 0.2
            }

        }
    }
    const footersvgdisappear = {
        hover: {
            display: 'none',
            scaleX: 0.8,
            scaleY: 0.8,
            transition: {
                duration: 0.1
            }
        }
    }

    const background = {
        hover: {
            backgroundColor: '#31F7C8',
            scaleX: 1.03,
            scaleY: 1.03
        }
    }

    return (
        <motion.div whileHover='hover' className="w-full max-w-[1700px] mx-auto px-[4.375em]">
            <a href="https://www.unfold.co/contact" className="text-[#05070f] flex justify-center items-center mb-[5.5em] py-[4em] px-[5em] relative max-w-full">
                <div className="z-[2] flex flex-col gap-[1.5em] flex-1 relative">
                    <h2 className={`${myfoldAlt.variable} font-fkAlt relative left-[-1.1%] tracking-[-0.04em] text-[10em] font-normal leading-[.9] my-0`}>Let's Chat</h2>
                    <p className="tracking-[-.02em] text-[1.75em] mobile:text-[4.8em] betmt:text-[3em] tablet:text-[2.2em] font-normal leading-[1.2] my-0">Want to grab a virtual coffee and talk about your project?</p>

                </div>
                < motion.div className="z-[2] flex flex-col items-center justify-center relative w-[14em] h-[14em]">
                    <motion.div style={{ display: 'none', scaleX: 0.8, scaleY: 0.8 }} variants={footerImgexpand} className='w-full absolute bottom-auto left-auto right-auto max-w-none top-auto ml-[-60%] '>

                        <Image src={coffee} alt="" className="w-[170%] max-w-none   " />
                    </motion.div>
                    <motion.div style={{ display: 'flex' }} variants={footersvgdisappear} className="  flex-col items-center justify-center  z-[2] bg-[#fff] rounded-[100vw] relative w-[13em] h-[13em]">
                        <div className="w-[55%]">
                            <svg width=" 100%" height=" 100%" viewBox="0 0 106 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65.0781 81.0233C65.0781 58.9191 82.9972 41 105.101 41" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                <path d="M65.0781 0.97666C65.0781 23.0809 82.9972 41 105.101 41" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                <path d="M99.8203 41L0.894692 41" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div style={{ backgroundColor: '#f6fa5e', }} variants={background} className="absolute z-[1] w-full h-full rounded-[3em] "></motion.div>
            </a>
        </motion.div >

    )
}

export default FooterExpand