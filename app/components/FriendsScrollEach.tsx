'use client'
import Image from 'next/image'
import React from 'react'
import figma from '@/public/unfold/63f4e4d60042c41c51225010_figma.svg'
const FriendsScrollEach = ({ object }: any) => {
    const { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve } = object
    // console.log(one);


    return (
        <div className=' flex flex-col flex-none gap-[4em] w-[15em] '>
            <Image src={one} alt='' className='w-full' />
            <Image src={two} alt='' className='w-full' />
            <Image src={three} alt='' className='w-full' />
            <Image src={four} alt='' className='w-full' />
            <Image src={five} alt='' className='w-full' />
            <Image src={six} alt='' className='w-full' />
            <Image src={seven} alt='' className='w-full' />
            <Image src={eight} alt='' className='w-full' />
            <Image src={nine} alt='' className='w-full' />
            <Image src={ten} alt='' className='w-full' />
            <Image src={eleven} alt='' className='w-full' />
            <Image src={twelve} alt='' className='w-full' />
        </div>
    )
}

export default FriendsScrollEach