import Image from 'next/image'
import { motion, useTransform } from 'framer-motion'

const GifCompo = ({ top, bottom, left, right, rotate, src, progress }: any) => {
    const value = useTransform(progress, [0, 1], [0, 23])
    return (
        <motion.div style={{ rotateZ: value }} className={`absolute   ${top !== 'auto' ? `top-[${top}em]` : 'top-auto'}    ${bottom !== 'auto' ? `bottom-[${bottom}em]` : 'bottom-auto'} ${left !== 'auto' ? `left-[${left}em]` : 'left-auto'}  ${right !== 'auto' ? `right-[${right}em]` : 'right-auto'}  z-[2] `}>
            <div className={`flex flex-col justify-center items-center rounded-[1.5em] w-[6.5em] h-[6.5em] overflow-hidden ${rotate ? `rotate-[${rotate}deg]` : ''} `}>
                <Image src={src} alt='' className='w-full h-full' />
            </div>
        </motion.div>
    )
}

export default GifCompo