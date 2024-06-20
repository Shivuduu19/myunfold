'use client'

import { useEffect, useRef, useState } from "react"
import { animate, motion } from 'framer-motion'

const NavBar = () => {
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(89.6)
    const [prevElLeft, setPrevEleLeft] = useState(0)
    const [prevElWidth, setPrevEleWidth] = useState(0)

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
            // console.log(activeLinkRef?.getBoundingClientRect());



            if (activeLinkRef) {
                // const navParent = activeLinkRef?.parentElement.parentElement.getBoundingClientRect().left
                const { width, left } = activeLinkRef.getBoundingClientRect();
                const prevEle = activeLinkRef.previousElementSibling?.getBoundingClientRect()
                // console.log(activeLinkRef.previousElementSibling?.getBoundingClientRect());
                // console.log(activeLinkRef?.parentElement?.getBoundingClientRect().left);
                let parentleft: number = 0
                if (activeLinkRef.parentElement) {
                    parentleft = activeLinkRef.parentElement.getBoundingClientRect().left
                }
                // parentleft = activeLinkRef?.parentElement?.getBoundingClientRect().left;
                if (prevEle) {
                    setPrevEleWidth(prevEle.width)
                    setPrevEleLeft(prevEle.left - parentleft)

                }
                setLeft(left - parentleft)
                setWidth(width)

            }
        };

        updateIndicatorSize();
        window.addEventListener('resize', updateIndicatorSize); // Update on resize

        return () => window.removeEventListener('resize', updateIndicatorSize);
    }, [activeLink, itemsRef]);






    // }
    // console.log(left, width);
    // console.log(element);


    // window.addEventListener('resize', () => {
    //     // console.log(linkref.current);
    //     console.log('shiva');
    //     console.log(element);


    //     // const resizeWidth = element.getBoundingClientRect().width
    //     // setWidth(resizeWidth)
    //     // console.log(resizeWidth);

    // })
    const diff = left - prevElLeft
    const divanim = {
        initial: {
            left: prevElLeft,
            width: prevElWidth,
            transition: {
                duration: 0.5
            }
        },
        animate: {
            // x: diff,
            left: left,
            width: width,
            transition: {
                duration: 0.5
            }
        }
    }

    function ontap(e) {
        console.log(e);
        e.preventDefault()
        console.log('shiva');


    }
    function handleClick(e: any) {
        // e.preventDefault()
        console.log(e.target.parentElement);
        const parentLeft = e.target.parentElement.parentElement.getBoundingClientRect().left
        console.log(parentLeft);

        const { width, left } = e.target.parentElement.getBoundingClientRect()
        console.log(left);

        setWidth(width)
        setLeft(left - parentLeft)
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
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative" >Home</p>
                    </motion.a>
                    <motion.a href="/work" onClick={(e) => handleClick(e)} className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">Work</p>
                    </motion.a>
                    <motion.a href="/about" onClick={(e) => handleClick(e)} className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">about</p>
                    </motion.a>
                    <motion.a href="" onClick={(e) => handleClick(e)} className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">contact</p>
                    </motion.a>
                    <motion.div initial='initial' animate='animate' transition={{ duration: 0.5, ease: 'ease' }} variants={divanim} className={`z-[1] opacity-1  flex justify-start absolute top-[0%] bottom-[0%] right-auto overflow-hidden`}>
                        <div className="bg-[#05070f] rounded-[100vw] flex-1 w-full h-full relative"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default NavBar