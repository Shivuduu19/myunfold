import myfont from '@/app/fonts/fontfile'
import Image from 'next/image'
import star from '@/public/unfold/63e04ac26af00b1fba5f9e5e_startup star.svg'
import established from '@/public/unfold/63e04ac247ab58939bb5d371_established star.svg'
import enterprise from '@/public/unfold/63e04ac21693d180a60f6426_enterprise star.svg'
import FriendsScroll from '../FriendsScroll'

const Friends = () => {
    return (
        <div className='flex gap-[5em] bg-[#fff] rounded-[3em] mb-[6.5em] p-[2.5em] '>
            <div className='flex flex-col gap-[19em] betmt:gap-[6em] max-w-full w-[38.5em] pt-[2.5em] pl-[2.5em] pb-[2.5em]'>
                <h2 className={` ${myfont.variable} font-fk tracking-[-0.02em] text-[7.5em] max-w-full font-normal leading-[1] mt-0 mb-0  `}>{'Friends '}

                    <span className='whitespace-nowrap'>
                        &#38; Partners
                    </span>
                </h2>
                <div className='flex items-start mobile:flex-col mobile:justify-center mobile:items-center gap-[4em] '>
                    <div className='flex flex-col items-center gap-[1.5em]'>
                        <Image src={star} alt='' className='w-[6.5em]' />
                        <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet::text-[1.3em] text-[0.875em] font-normal leading-[1.4em] mt-0`}>Startup</p>
                    </div>
                    <div className='flex flex-col items-center gap-[1.5em]'>
                        <Image src={established} alt='' className='w-[6.5em]' />
                        <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet::text-[1.3em] text-[0.875em] font-normal leading-[1.4em] mt-0`}> Established</p>
                    </div>
                    <div className='flex flex-col items-center gap-[1.5em]'>
                        <Image src={enterprise} alt='' className='w-[6.5em]' />
                        <p className={`${myfont.variable} font-fk mobile:text-[3.4em] betmt:text-[2.2em] tablet::text-[1.3em] text-[0.875em] font-normal leading-[1.4em] mt-0`}> Enterprise</p>
                    </div>

                </div>
            </div>
            <div className='bg-[#21242c] rounded-[2.5em] flex-col flex-1 justify-center items-center flex relative overflow-hidden'>
                <div className='flex flex-col justify-center items-center absolute'>
                    <FriendsScroll />
                </div>

            </div>
        </div>
    )
}

export default Friends