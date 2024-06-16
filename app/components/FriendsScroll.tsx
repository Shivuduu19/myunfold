// 'use client'
import React from 'react'
import FriendsScrollEach from './FriendsScrollEach'
import figma from '@/public/unfold/63f4e4d60042c41c51225010_figma.svg'
import gofoundme from '@/public/unfold/63f4e4d50042c48800224fff_gofundme.svg'
import stellar from '@/public/unfold/63f4e4d51bba1e19a5ebbc6d_stellar.svg'
import treecard from '@/public/unfold/63f4e4d57d1035dac0048dfa_treecard.svg'
import lab from '@/public/unfold/63f4e4d527bda7041a3ddcc9_lob.svg'
import weebly from '@/public/unfold/63f4e4d5281895bd74dca61f_weebly.svg'
import peacock from '@/public/unfold/63f4e4d5732b62e5da9f2068_peacock.svg'
import payjunction from '@/public/unfold/63f4e4d53d6a0b12360c4041_payjunction.svg'
import tebra from '@/public/unfold/63f4e4d5c33a775dad67aa11_tebra.svg'
import rumble from '@/public/unfold/63f5382c0bd7f7786f082abc_rumble.svg'
import solana from '@/public/unfold/63f4e4d5e7eeb09f63fa09d3_solana.svg'
import remax from '@/public/unfold/63f4e4d540c54f69767830f2_remax.svg'
import paypal from '@/public/unfold/63f4e4d5e2ba456a616835fd_paypal.svg'
import okta from '@/public/unfold/63f4e4d54f087037b8dd927e_okta.svg'
import merck from '@/public/unfold/63f4e4d5c89f670acb652765_merck.svg'
import ripple from '@/public/unfold/63f4e4d533aa5ab058ecf596_ripple.svg'
import discord from '@/public/unfold/63f4e4d5f58db3c81d861a18_discord.svg'
import adobe from '@/public/unfold/63f4e4d5e60e92093153987e_adobe.svg'
import genesys from '@/public/unfold/63f4e4d5c89f67525b652764_genesysgo.svg'
import invision from '@/public/unfold/63f4e4d565469f6f03fefe05_invision.svg'
import lamar from '@/public/unfold/63f51a8ef953732be500f8f5_lamar.svg'
import bowlero from '@/public/unfold/63f4e4d5d3c2200b4b2c1940_bowlero.svg'
import facebook from '@/public/unfold/63f4e4d5897d62433f1edba4_facebook.svg'

const object1 = {
    one: figma,
    two: gofoundme,
    three: stellar,
    four: treecard,
    five: lab,
    six: weebly,
    seven: peacock,
    eight: payjunction,
    nine: tebra,
    ten: rumble,
    eleven: solana,
    twelve: remax
}
const object2 = {
    one: paypal,
    two: okta,
    three: merck,
    four: ripple,
    five: discord,
    six: adobe,
    seven: genesys,
    eight: invision,
    nine: lamar,
    ten: bowlero,
    eleven: facebook,
    twelve: figma
}
const object3 = {
    one: stellar,
    two: treecard,
    three: peacock,
    four: payjunction,
    five: weebly,
    six: lab,
    seven: treecard,
    eight: tebra,
    nine: rumble,
    ten: solana,
    eleven: remax,
    twelve: paypal
}
const object4 = {
    one: treecard,
    two: stellar,
    three: gofoundme,
    four: figma,
    five: facebook,
    six: bowlero,
    seven: lamar,
    eight: invision,
    nine: genesys,
    ten: adobe,
    eleven: discord,
    twelve: ripple
}
// console.log(object1.one);


const FriendsScroll = () => {
    return (
        <div className='flex justify-center items-center gap-[1em] -rotate-[30deg]'>
            <FriendsScrollEach object={object1} />
            <FriendsScrollEach object={object2} />
            <FriendsScrollEach object={object3} />
            <FriendsScrollEach object={object4} />
        </div>
    )
}

export default FriendsScroll