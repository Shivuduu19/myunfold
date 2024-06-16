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



    return (
        <div ref={ref} className='flex flex-col justify-center items-center mb-[10em] pt-[20em] pb-[24em] relative'>

            <div className='z-[1] flex gap-[1.5em] text-center flex-col items-center w-[55em] max-w-full relative'>
                <div className='rounded-[100vw] flex gap-[0.75em] bg-[#fff] items-center h-[2.25em] pl-[1em] pr-[1em] '>
                    <p className='text-[0.875em] font-normal leading-[1.4] mb-0 mt-0'>several people are typing</p>
                    <motion.div animate='animate' variants={dots} className='flex items-center gap-[0.25em]'>
                        <motion.div variants={dots} className='bg-[#31f7c8] rounded-[100vw] w-[0.375em] h-[0.375em]'></motion.div>
                        <motion.div variants={dots} className='bg-[#31f7c8] rounded-[100vw] w-[0.375em] h-[0.375em]'></motion.div>
                        <motion.div variants={dots} className='bg-[#31f7c8] rounded-[100vw] w-[0.375em] h-[0.375em]'></motion.div>
                    </motion.div>
                </div>
                <h2 className='tracking-[-0.02em] text-[5.25em] font-normal leading-[1]'>Our Clients Can’t Say Enough About Us.</h2>
                <div className='w-[30em] max-w-full '>
                    <p className={`${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>Take a look for yourself. No Slack messages were harmed in the making of this component.</p>
                </div>
            </div>
            <div>
                {
                    cards.map((card) =>
                        <Card paragraph={card.paragraph} desc={card.desc} src={card.src} width={card.width} top={card.top} left={card.left} right={card.right} bottom={card.bottom} rotate={card.rotate} ref={ref} />
                    )
                }
            </div>
            <Image src={farley} alt='' className='absolute bottom-[3em] right-[6em]' />
            <div>

            </div>
            <SmallCard progress={scrollYProgress} top={'16'} left={'-2'} right={'auto'} bottom={'auto'} width={14} rotate={-18} src={top} />
            <SmallCard progress={scrollYProgress} top={'15.9'} right={'-2.5'} width={11.5} left={'auto'} bottom={'auto'} src={pencil} clock={true} />
            <SmallCard progress={scrollYProgress} top={'auto'} right={'auto'} bottom={-2} left={1} src={chat} width={11.5} />
            <GifCompo top={2} bottom={'auto'} left={39.2} right={'auto'} src={michael} progress={scrollYProgress} />
            <GifCompo progress={scrollYProgress} top={'auto'} bottom={3} left={'auto'} right={6} src={farley} />
            <GifCompo progress={scrollYProgress} top={'auto'} bottom={12.2} left={34.5} right={'auto'} src={shaq} />
        </div >
    )
}

export default Testimonial  