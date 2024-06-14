'use client'
import Image from 'next/image'
import logo from '@/public/unfold/63de243e03e95f5335d7f350_logo.svg'
import { motion } from 'framer-motion'

const Header = () => {

    const headeryellowAnim = {
        hover: {
            y: '100%',
            transition: {
                duration: 0.2
            }
        }
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
        <div className='flex justify-between items-centers'>
            <a href="" className='w-[9.7em]'>
                <Image src={logo} alt='' className='z-[2]' />
            </a>
            <motion.a whileHover='hover' className='flex flex-none w-[11.5em] items-end justify-end h-[5.75em] relative overflow-hidden  rounded-b-[100vw]  max-w-full  '>
                <div className='z-[1] bg-[#31f7c8] flex-none  h-full w-full rounded-b-[100vw] flex flex-col items-center pt-[2em] relative translate-x-full '>
                    <div className='translate-y-full'>
                        <motion.div variants={InsideText} className='tracking-[-0.02em] uppercase text-[1em] font-[400] leading-[1] opacity-0'>Let's Chat</motion.div>
                    </div>
                </div>
                <motion.div variants={headeryellowAnim} className='z-[2] bg-[#f6fa5e]  rounded-[100vw] flex-none w-full h-[200%] relative '></motion.div>
                <motion.div variants={outsideText} className='absolute flex flex-col items-center z-[3] w-full top-[2rem]'>
                    <div className='tracking-[-0.02em] uppercase text-[1em] font-[400] leading-[1]'>
                        Let's Chat
                    </div>
                </motion.div>

            </motion.a >
        </div >
    )
}

export default Header