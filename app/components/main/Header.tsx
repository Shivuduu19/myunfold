'use client'
import Image from 'next/image'
import logo from '@/public/unfold/63de243e03e95f5335d7f350_logo.svg'
import head from '@/public/unfold/63de25352ae9b085b2bd03dc_melonhead.svg'
import { motion } from 'framer-motion'

const Header = () => {
    const headAnim = {

        hover: {

            y: '0%',

        },

    }

    const headeryellowAnim = {
        hover: {
            y: '100%',
            transition: {
                ease: 'easeOut',
                duration: 0.2,

            }
        },


    }
    const InsideText = {
        hover: {
            y: '-100%',
            opacity: 1,
            transition: {

                duration: 0.4
            }
        }
    }
    const outsideText = {
        hover: {
            opacity: 0
        }
    }


    return (
        <div className='h-[5.75em] mb-[2em] z-[997] relative flex'>

            <div className='w-full max-w-[1700px] px-[4.375em]'>

                <motion.div className='flex justify-between w-full h-full items-center'>
                    <motion.a whileHover='hover' href="" className='w-[9.7em] max-w-full flex relative'>
                        <Image src={logo} alt='' className='z-[2] relative' />
                        <div className='absolute left-[0%]  w-[30%] h-[150%] bottom-[0.2em] rounded-b-[100vw] flex flex-col overflow-hidden '>
                            <motion.div variants={headAnim} style={{ y: '75%' }} className='  w-full'>
                                <div>

                                    <Image src={head} alt='' className=' max-w-full w-full  ' />
                                </div>
                            </motion.div>
                        </div >
                    </motion.a>
                    <motion.a whileHover='hover' className='flex flex-none w-[11.5em] items-end justify-end h-[5.75em] relative overflow-hidden  rounded-b-[100vw]  max-w-full  '>
                        <div className='z-[1] bg-[#31f7c8] flex-none  h-full w-full rounded-b-[100vw] flex flex-col items-center pt-[2em] relative translate-x-full '>
                            <div className='translate-y-full'>
                                <motion.div variants={InsideText} className='tracking-[-0.02em] uppercase text-[1em] font-[400] leading-[1] opacity-0'>Let's Chat</motion.div>
                            </div>
                        </div>
                        <motion.div variants={headeryellowAnim} transition={{ duration: 0.3, }} className='z-[2] bg-[#f6fa5e]  rounded-[100vw] flex-none w-full h-[200%] relative '></motion.div>
                        <motion.div variants={outsideText} className='absolute flex flex-col items-center z-[3] w-full top-[2rem]'>
                            <div className='tracking-[-0.02em] uppercase text-[1em] font-[400] leading-[1]'>
                                Let's Chat
                            </div>
                        </motion.div>

                    </motion.a >
                </motion.div >
            </div>
        </div>
    )
}

export default Header