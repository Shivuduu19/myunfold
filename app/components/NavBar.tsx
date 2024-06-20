'use client'

import { useEffect, useRef, useState } from "react"

const NavBar = () => {
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(89.6)
    const [element, setElement] = useState<HTMLAnchorElement>()
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

    // console.log(itemsRef.current[1]?.pathname);

    // console.log(getRefs());
    console.log(element);

    useEffect(() => {
        // Update indicator size on initial render and link clicks
        const updateIndicatorSize = () => {
            const activeLinkRef: HTMLAnchorElement | undefined = itemsRef.current.find((ref) => ref.pathname === activeLink);
            console.log(activeLinkRef?.getBoundingClientRect());
            setElement(activeLinkRef)


            if (activeLinkRef) {
                // const navParent = activeLinkRef?.parentElement.parentElement.getBoundingClientRect().left
                const { width, left } = activeLinkRef.getBoundingClientRect();
                console.log(width, left);
                console.log(activeLinkRef?.parentElement?.getBoundingClientRect().left);
                let parentleft: number = 0
                if (activeLinkRef.parentElement) {
                    parentleft = activeLinkRef.parentElement.getBoundingClientRect().left
                }
                // parentleft = activeLinkRef?.parentElement?.getBoundingClientRect().left;

                setLeft(left - parentleft)
                setWidth(width)

            }
        };

        updateIndicatorSize();
        window.addEventListener('resize', updateIndicatorSize); // Update on resize

        return () => window.removeEventListener('resize', updateIndicatorSize);
    }, [activeLink, itemsRef]);


    // const handleClick = (e: any) => {
    //     e.preventDefault()
    //     // console.log(e.target.parentElement.getBoundingClientRect());
    //     // console.log(e.target.parentElement.parentElement.parentElement.getBoundingClientRect());
    //     setElement(e.target.parentElement)
    //     const navParent = e.target.parentElement.parentElement.parentElement.getBoundingClientRect().left
    //     const link = e.target.parentElement.getBoundingClientRect()
    //     const width = link.width
    //     const linkLeft = link.left - navParent - 10.78125
    //     // console.log(linkLeft);
    //     // console.log(width);
    //     setLeft(linkLeft)
    //     setWidth(width)



    // }
    console.log(left, width);
    console.log(element);


    // window.addEventListener('resize', () => {
    //     // console.log(linkref.current);
    //     console.log('shiva');
    //     console.log(element);


    //     // const resizeWidth = element.getBoundingClientRect().width
    //     // setWidth(resizeWidth)
    //     // console.log(resizeWidth);

    // })

    return (
        <div className="z-[997] flex flex-col items-center pb-[2em] fixed  bottom-[0%] left-[0%] right-[0%] top-auto">
            <div className="max-w-full rounded-[100vw] mobile:text-[3vw] p-[.75em] bg-[#fff] shadow-[0em_.5em_1em_-.5em_rgba(5,7,15,0.2)]">
                <div className="relative">
                    <a href="/" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative" >Home</p>
                    </a>
                    <a href="/work" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">Work</p>
                    </a>
                    <a href="/about" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">about</p>
                    </a>
                    <a href="/" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block " ref={node => {
                        const arr = getRefs()
                        if (node) {
                            arr.push(node)
                        }
                    }}>
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">contact</p>
                    </a>
                    <div style={{ left: left, width: width }} className={`z-[1] opacity-1  flex justify-start absolute top-[0%] bottom-[0%] right-auto overflow-hidden`}>
                        <div className="bg-[#05070f] rounded-[100vw] flex-1 w-full h-full relative"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar