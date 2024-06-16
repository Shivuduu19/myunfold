'use client'
import { motion, useTransform } from 'framer-motion'
import Image from 'next/image'



const SmallCard = ({ top, left, right, bottom, width, rotate, src, progress, clock }: any) => {
    // console.log(top, left, right, bottom, width, rotate,);
    console.log(clock);
    const Clockvalue = clock ? (2.5 * width) : (-2.5 * width)

    let value = useTransform(progress, [1, 0], [0, Clockvalue])

    console.log(rotate, top, right, bottom, left);
    console.log(top === 'auto');


    return (
        <motion.div style={{ rotateZ: value }} className={`absolute  ${(top === 'auto') ? 'top-auto' : `top-[${top}em]`} ${bottom === 'auto' ? 'bottom-auto' : `bottom-[${bottom}em]`} ${left === 'auto' ? 'left-auto' : `left-[${left}em]`} ${right === 'auto' ? 'right-auto' : `right-[${right}em]`}  z-[2] `}>
            <Image src={src} alt='' className={` w-[${width}em] ${rotate ? `rotate-[${rotate}deg]` : ''}`} />
        </motion.div>
    )
}

export default SmallCard