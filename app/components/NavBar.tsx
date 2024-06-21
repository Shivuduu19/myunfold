'use client'

import { useEffect, useRef, useState } from "react"
import { animate, motion } from 'framer-motion'

const NavBar = () => {
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(89.6)
    const [prevElLeft, setPrevEleLeft] = useState(0)
    const [prevElWidth, setPrevEleWidth] = useState(0)
    const [linkClick, setLinkClick] = useState(false)

    const itemsRef = useRef<HTMLAnchorElement[]>([])
    const [activeLink, setActiveLink] = useState("");

    function getRefs() {
        return itemsRef.current
    }

    useEffect(() => {
        const handleActiveLink = () => {
            setActiveLink(window.location.pathname);
        };

        handleActiveLink();
        window.addEventListener('popstate', handleActiveLink);

        return () => window.removeEventListener('popstate', handleActiveLink);
    }, []);



    useEffect(() => {
        // Update indicator size on initial render and link clicks
        const updateIndicatorSize = () => {
            const activeLinkRef: HTMLAnchorElement | undefined = itemsRef.current.find((ref) => ref.pathname === activeLink);
            // console.log(activeLinkRef);
            setLinkClick(false)


            if (activeLinkRef) {

                const { width, left } = activeLinkRef.getBoundingClientRect();
                const prevEle = activeLinkRef.previousElementSibling?.getBoundingClientRect()


                let parentleft: number = 0
                if (activeLinkRef.parentElement) {
                    parentleft = activeLinkRef.parentElement.getBoundingClientRect().left
                }


                setLeft(left - parentleft)
                setWidth(width)



            }
        };

        updateIndicatorSize();
        window.addEventListener('resize', updateIndicatorSize); // Update on resize

        return () => window.removeEventListener('resize', updateIndicatorSize);
    }, [activeLink]);






    function handleClick(e: any) {
        e.preventDefault()
        setLinkClick(true)
        // console.log(e.target.parentElement);
        const parentLeft = e.target.parentElement.parentElement.getBoundingClientRect().left
        // console.log(parentLeft);
        // e.target.previousElementSibling.style.opacity = 1
        // setTimeout(() => {
        //     e.target.parentElement.previousElementSibling.firstChild.style.opacity = 0

        // }, 500)
        const { width, left } = e.target.parentElement.getBoundingClientRect()
        // console.log(left);

        setWidth(width)
        setLeft(left - parentLeft)
        setTimeout(() => {
            window.location.href = e.target.parentElement.href;
        }, 1000);
    }

    console.log(width, left);

    return (
        <div className="z-[997] flex flex-col items-center pb-[2em] fixed  bottom-[0%] left-[0%] right-[0%] top-auto">
            <div className="max-w-full rounded-[100vw] mobile:text-[3vw] p-[.75em] bg-[#fff] shadow-[0em_.5em_1em_-.5em_rgba(5,7,15,0.2)]">
                <div className="relative">
                    <motion.a href="/"
                        onClick={(e) => handleClick(e)} className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                            const arr = getRefs()
                            if (node) {
                                arr.push(node)
                            }
                        }}>
                        <motion.div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></motion.div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative" >Home</p>
                    </motion.a>
                    <motion.a href="/work" onClick={(e) => handleClick(e)} className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <motion.div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></motion.div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">Work</p>
                    </motion.a>


                    <motion.a href="/about" onClick={(e) => handleClick(e)} className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <motion.div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></motion.div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">about</p>
                    </motion.a>


                    <motion.a href="/" onClick={(e) => handleClick(e)} className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <motion.div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></motion.div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">contact</p>
                    </motion.a>
                    <motion.div style={linkClick ? { left: left, width: width, opacity: 1, transition: 'all 500ms ease 0s', justifyContent: "flex-end" } : { left: left, width: width, opacity: 1 }} className={`z-[1] w-[6.4em]  flex justify-start absolute top-[0%] bottom-[0%] right-auto overflow-hidden opacity-0 translate-x-0`}>
                        <motion.div style={linkClick ? { transition: 'width 250ms ease 0s', width: '140%' } : {}} className="bg-[#05070f] rounded-[100vw] flex-1 w-full h-full relative"></motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default NavBar