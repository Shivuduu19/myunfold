

const NavBar = () => {
    return (
        <div className="z-[997] flex flex-col items-center pb-[2em] fixed  bottom-[0%] left-[0%] right-[0%] top-auto">
            <div className="max-w-full rounded-[100vw] p-[.75em] bg-[#fff] shadow-[0em_.5em_1em_-.5em_rgba(5,7,15,0.2)]">
                <div className="relative">
                    <a href="/" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block ">
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">Home</p>
                    </a>
                    <a href="/work" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block ">
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">Work</p>
                    </a>
                    <a href="/about" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block ">
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">about</p>
                    </a>
                    <a href="/" className="z-[2] text-[#fff] mix-blend-difference pt-[.8em] px-[1.625em] pb-[.7em] relative max-w-full inline-block ">
                        <div className="opacity-0 z-[1] bg-[#fff] rounded-[100vw] absolute top-[0%] bottom-[0%] right-[0%] left-[0%]"></div>
                        <p className="z-[2] uppercase mix-blend-difference text-[1em] leading-[1] relative">contact</p>
                    </a>
                    <div className="z-[1] opacity-0  flex justify-start absolute top-[0%] bottom-[0%] right-auto ">
                        <div className="bg-[#05070f] rounded-[100vw] flex-none w-full h-full relative"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar