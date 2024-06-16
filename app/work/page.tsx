import React from 'react'
import Header from '../components/main/Header'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import summer from '@/public/unfold/Work/665684770bb40fe903e9e23f_Link-p-500.png'
import myfont from '../fonts/fontfile'
import WorkCom from '../components/work/WorkCom'
import unsplash from '@/public/unfold/Work/66568afb5759bfcea47a9860_6463e344612effa8e0d6e392_almas-salakhov-8hTqBs8N4f0-unsplash.jpg-p-500.png'
import safepal from '@/public/unfold/Work/66568fe8d7b37ef1f04c5ebc_1231231-p-500.png'
import lamar from '@/public/unfold/Work/6656a69d7079c1811b09c153_lamar-p-500.png'
import tavus from '@/public/unfold/Work/6657f1d718070622ed4209a6_Tavus.png'
import mighty from '@/public/unfold/Work/6657f1e5ae30fd55bc68efe7_Mighty.png'
import lmnft from '@/public/unfold/Work/6657f1f371f357f192aee795_LMNFT.png'
import rumble from '@/public/unfold/Work/6657f25c07e1594e24c64675_Rumble.png'
import merck from '@/public/unfold/Work/6657f26d185a36836fc6b2c0_Merck.png'
import shadow from '@/public/unfold/Work/6657f27bc41f1012064af655_Shadow.png'
import jamm from '@/public/unfold/Work/6657f8aa666d31af679eea2a_Jamm.png'
import grabient from '@/public/unfold/Work/6657f8d4f2eefada2608025c_Grabient.png'
import arc from '@/public/unfold/Work/6657f8e3185a36836fcb90ce_Arc.png'
import skewdat from '@/public/unfold/Work/6657f918df7979f82cbd52d1_Skew-p-500.png'
import dronies from '@/public/unfold/Work/6657f942acd762fffa85b4a3_Dronie.png'
import jumpback from '@/public/unfold/Work/6657f96b277b000933443342_Jumpback.png'
import Footer from '../components/main/Footer'

const page = () => {
    return (
        <>

            <NavBar />
            <div>
                <Header />
                <div className='w-full max-w-[1700px] mx-auto px-[4.375em]'>
                    <div className='flex flex-col gap-[6.25em] mb-4.5em] relative '>
                        <div className='flex justify-between items-end gap-[1.5em]'>
                            <div className='w-[55em]'>
                                <h1 className={` ${myfont.variable} font-fk tracking-[-.04em] text-[10em] font-normal leading-[.9] my-0`}>Our
                                    <span className='block'></span>
                                    clients.</h1>
                            </div>

                        </div>
                        <div>
                            <div className='grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-[2.5em] gap-y-[2.5em] '>
                                <WorkCom src={summer} title={'Solana Summer Camp'} />
                                <WorkCom src={unsplash} title={'Wonder Dynamics'} />
                                <WorkCom src={safepal} title={'SafePal'} />
                                <WorkCom src={lamar} title={'Lamar'} />
                                <WorkCom src={tavus} title={'Tavus'} />
                                <WorkCom src={mighty} title={'Mighty'} />
                                <WorkCom src={lmnft} title={'LMNFT'} />
                                <WorkCom src={rumble} title={'Rumble'} />
                                <WorkCom src={merck} title={'Merck'} />
                                <WorkCom src={shadow} title={'Shadow'} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[13em] '>
                    <div className='w-full max-w-[1700px] mx-auto px-[4.375em]'>
                        <div className='flex flex-col gap-[6.25em] mb-[4.5em] relative'>
                            <div className='flex justify-between items-end gap-[1.5em]'>
                                <div className='w-[55em]'>
                                    <h1 className={` ${myfont.variable} font-fk tracking-[-.04em] text-[10em] font-normal leading-[.9] my-0`}>Things
                                        <span className='block'></span>
                                        we built.</h1>
                                </div>
                            </div>
                            <div>
                                <div className='grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-[2.5em] gap-y-[2.5em] '>
                                    <WorkCom src={jamm} title={'Jamm Design Subscription'} />
                                    <WorkCom src={grabient} title={'Grabient'} />
                                    <WorkCom src={arc} title={'Arc Plugin'} />
                                    <WorkCom src={skewdat} title={'SkewDat'} />
                                    <WorkCom src={dronies} title={'Dronies'} />
                                    <WorkCom src={jumpback} title={'JumpBack'} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default page