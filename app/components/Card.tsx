'use client'
import Image from 'next/image'
import React from 'react'
import myfont from '../fonts/fontfile'
import { motion, useScroll, useTransform } from 'framer-motion'

const Card = ({ top, bottom, left, right, width, paragraph, src, desc, rotate, ref }: any) => {
    // console.log(top, bottom, left, right, width, paragraph, src, desc);
    // const nexttop = String(top)
    // console.log(nexttop);
    const rotation = parseInt(rotate)
    const intTop = parseInt(top)
    const intRight = parseInt(right)
    const intLeft = parseInt(left)
    const intBottom = parseInt

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })

    const value = useTransform(scrollYProgress, [1, 0], [rotation * 2, -rotation * 2])
    const xvalue = useTransform(scrollYProgress, [1, 0], [20, 0])
    const cardvar = {
        card: {
            x: `${xvalue}em`
        }
    }

    return (
        <motion.div animate='card' variants={cardvar} className={`
        top-[${top}] bottom-[${bottom}] left-[${left}] right-[${right}] z-[2] absolute `}>
            <motion.div style={{ rotate: value, }} className={`max-w-[${width}] cursor-grab flex flex-col bg-[#fff] rounded-[1.5em] items-start p-[1.5em]`}>
                <p className='mt-0 mb-0 break-words flex-none '>{paragraph}</p>
                <div className='flex items-center gap-[0.5em]'>
                    <div className='rounded-[100px] overflow-hidden w-[1.5em] max-w-full '>
                        <Image src={src} alt='' />
                    </div>
                    <p className={`${myfont.variable} font-fk text-[0.875em] font-normal leading-[1.4] mb-0 mt-0`}>{desc}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Card