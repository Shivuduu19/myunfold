'use client'
import React from 'react'
import myfont from '../fonts/fontfile'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HomeWorkChild = ({ protitle, desc, src, handleTap, selectedBox, boxIndex }: any) => {
    const selected = selectedBox === boxIndex ? true : false
    const boxVariants = {
        selected: {
            width: '70%',
            transition: {
                // duration: 0.3,
                // ease: 'easeOut'
            }
        },
        text: {
            y: '0%'
        },
        view: {
            scale: 1
        }
    }
    const leftArrow = {
        hover: {
            x: '0%'
        }
    }
    const rightArrow = {
        hover: {
            x: '100%'
        }
    }

    return (
        <motion.div onTap={handleTap} variants={boxVariants} initial={{ width: '15%' }} animate={selected ? 'selected' : ''} className='flex flex-col relative pt-[11.5em] pl-[0.75em] pr-[0.75em] mobile:pt-[21em]'>
            <div className='flex flex-col mobile:w-auto items-start gap-[0.5em] w-[30em] pl-[0.75em] absolute top-[0%] left-[0%] flex-none'>
                <div className='overflow-hidden relative'>

                    <motion.div transition={{ duration: 0.3, }} style={{ y: '120%' }} animate={selected ? 'text' : ''} variants={boxVariants} className='translate-y-full flex-none'>
                        <h3 className={`${myfont.variable} font-fk leading-[1] tracking-[-0.02em] text-[7.5em] font-[400] mt-0 flex-none `}>{protitle}</h3>
                    </motion.div>
                </div>
                <div className='overflow-hidden relative'>

                    <div className='flex-none'>
                        <motion.div transition={{ duration: 0.3, }} style={{ y: '120%' }} animate={selected ? 'text' : ''} variants={boxVariants} className=''>
                            <p className={`${myfont.variable} font-fk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] mb-0`}>{desc}</p>
                        </motion.div>
                    </div>
                </div>

            </div>
            {/* <div className='flex flex-col items-start gap-y-[0.5em] w-[30em] pl-[0.75em] absolute top-[0%] left-[0%]'>
                <div className=''>

                </div>
            </div> */}
            <motion.div className='cursor-pointer rounded-[2.5em] flex-col justify-center items-center h-[32em] flex relative overflow-hidden'>
                <Image src={src} alt='' objectFit='cover' className='w-[54em] flex-none max-w-none absolute  ' />
                <div className='rounded-[100vw] mobile:max-w-[70px] betmt:max-w-[100px] tablet:max-w-[150px] max-w-[11em] absolute bottom-[2em] right-[2em] overflow-hidden '>
                    <motion.div style={{ scale: 0 }} transition={{ duration: 0.3, }} animate={selected ? { scale: 1 } : ''} className='origin-[100%_100%]' >
                        <a href="" className='bg-[#fff] text-[#05070f] flex gap-[1em] rounded-[100vw] justify-center items-center px-[2.5em] py-[1em] max-w-full'>
                            <div className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3]`}>View</div>
                            <motion.div whileHover='hover' className='flex justify-center items-center relative overflow-hidden '>
                                <motion.div style={{ x: '0%' }} variants={rightArrow} className='h-[1.3em]   ' >
                                    <svg className='overflow-hidden' width=" 100%" height=" 100%" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.0922 31.9589C26.0922 23.145 33.2373 15.9999 42.0512 15.9999" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                        <path d="M26.0922 0.0408205C26.0922 8.85476 33.2373 15.9999 42.0512 15.9999" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                        <path d="M39.9459 15.9999L0.499951 15.9999" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                    </svg>
                                </motion.div>
                                <motion.div style={{ x: '-100%' }} variants={leftArrow} className='h-[1.3em]  absolute '>
                                    <svg className='overflow-hidden' width=" 100%" height=" 100%" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.0922 31.9589C26.0922 23.145 33.2373 15.9999 42.0512 15.9999" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                        <path d="M26.0922 0.0408205C26.0922 8.85476 33.2373 15.9999 42.0512 15.9999" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                        <path d="M39.9459 15.9999L0.499951 15.9999" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </a>

                    </motion.div>
                </div>
                <div className='absolute rounded-[0.5em] bottom-[2em] left-[2em] overflow-hidden'>
                    <motion.div style={{ scale: 0 }} transition={{ duration: 0.3, }} animate={selected ? { scale: 1 } : ''} className='tablet:flex-col tablet:gap-[.7em] tablet:items-start tablet:justify-center flex items-center gap-[0.5em] origin-[0_100%]  '>
                        <div className='bg-[#21242c] text-[#fff] tablet:h-auto rounded-[0.5em] h-[2em] py-[0.5em] px-[0.75em]'>
                            <div className={`${myfont.variable} font-fk text-[0.75em] mobile:text-[2.8em] betmt:text-[1.6em] tablet:text-[1.2em] font-normal leading-[1.4]`}> Brand</div>
                        </div>
                        <div className='bg-[#21242c] text-[#fff] tablet:h-auto rounded-[0.5em] h-[2em] py-[0.5em] px-[0.75em]'>
                            <div className={`${myfont.variable} font-fk text-[0.75em] mobile:text-[2.8em] betmt:text-[1.6em] tablet:text-[1.2em] font-normal leading-[1.4]`}>Web</div>
                        </div>
                        <div className='bg-[#21242c] text-[#fff] tablet:h-auto rounded-[0.5em] h-[2em] py-[0.5em] px-[0.75em]'>
                            <div className={`${myfont.variable} font-fk text-[0.75em] mobile:text-[2.8em] betmt:text-[1.6em] tablet:text-[1.2em] font-normal leading-[1.4]`}>Illustration</div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>


        </motion.div>
    )
}

export default HomeWorkChild