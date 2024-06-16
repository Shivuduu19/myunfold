'use client'
import React, { useState } from "react"
import first from '@/public/unfold/66566f547d37d898e17b77c7_safepal.png'
import second from '@/public/unfold/665668fdac8cc6dd79a22bdf_solana.png'
import third from '@/public/unfold/66566f3a57dda519020fda82_lamar.png'
import HomeWorkChild from "../HomeWorkChild"
const HomeWork = () => {

    const homeWorkInfo = [{
        projectTitle: 'SafePal',
        projectDesc: 'Making your crypto experience safe and fun.',
        src: first
    },
    {
        projectTitle: 'Solana',
        projectDesc: 'Blockchain of command and more.',
        src: second
    },
    {
        projectTitle: 'Lamar',
        projectDesc: `You've seen us from your minivan.`,
        src: third
    }
    ]
    const [selectedBox, setSelectedBox] = useState(0)


    const handleTap = (index: number) => {
        setSelectedBox(index)
    }


    return (
        <div className="bg-[#05070f] text-[#fff] rounded-[3em] flex flex-col justify-center p-[2.5em] mb-[10em]">
            <div className="flex mx-[-0.75em] justify-center">
                {homeWorkInfo.map((info, index) => <HomeWorkChild key={index} protitle={info.projectTitle} desc={info.projectDesc} src={info.src} handleTap={() => handleTap(index)} selectedBox={selectedBox} boxIndex={index} />)}


            </div>
        </div>
    )
}

export default HomeWork