'use client'
import Image from 'next/image'
import { motion, useTransform } from 'framer-motion'

const GifCompo = ({ top, bottom, left, right, rotate, src, progress }: any) => {
    const value = useTransform(progress, [0, 1], [0, 23])

    const inTop = top !== 'auto' ? `top-[${top}em]` : 'top-auto'
    const inBottom = bottom !== 'auto' ? `bottom-[${bottom}em]` : 'bottom-auto'
    const inLeft = left !== 'auto' ? `left-[${left}em]` : 'left-auto'
    const inRight = right !== 'auto' ? `right-[${right}em]` : 'right-auto'
    console.log(inTop, inLeft, inBottom, inRight);


    return (
        <motion.div style={{ rotateZ: value }} className={`absolute ${inTop}  ${inBottom} ${inLeft}  ${inRight}  z-[2] `}>
            <div className={`flex flex-col justify-center items-center rounded-[1.5em] w-[6.5em] h-[6.5em] overflow-hidden ${rotate ? `rotate-[${rotate}deg]` : ''} `}>
                <Image src={src} alt='' className='w-full h-full' />
            </div>
        </motion.div>
    )
}

export default GifCompo