import Image from "next/image"
import greenCircle from '@/public/unfold/63e1e17ef3d2d0d1c6b0e561_green circle.svg'
import myfont from "@/app/fonts/fontfile"
import coffee from '@/public/unfold/640b86c26276f0736b64eb13_coffee.svg'


const Footer = () => {
    return (
        <div className="bg-[#05070f]  text-[#fff]">
            <div className=" bg-[#e8f0f9] rounded-br-[3.5em] rounded-bl-[3.5em] h-[5.5em]"></div>

            <div className="flex items-center w-full pt-[7.75em] pb-[8.75em] ">
                <div className="flex overflow-hidden  gap-[7.5em] flex-none justify-start items-stretch w-full whitespace-nowrap  ">
                    <div className="">
                        <p className="leading-[1.1] tracking-[-0.04em] text-[10em] font-normal  my-0">
                            We make things More Yummy™
                        </p>
                    </div>
                    <div className="">
                        <p className="leading-[1.1] tracking-[-0.04em] text-[10em] font-normal  my-0">
                            We make things More Yummy™
                        </p>
                    </div>
                    <div className="">
                        <p className="leading-[1.1] tracking-[-0.04em] text-[10em] font-normal  my-0">
                            We make things More Yummy™
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-[11em] w-full max-w-[1700px] mx-auto">
                <div className="flex justify-between items-stretch mb-[5.5em] ">
                    <div className="w-[42em] relative">
                        <p className='tracking-[-0.02em] text-[2.5em] font-normal leading-[1.2] my-0'>
                            We’re Unfold. A collective bunch working on incredible projects and building enduring partnerships that extend well beyond the deliverable.
                            <br />
                            <br />
                            Want to collaborate
                            <br />
                            with a super down-to-earth, mad-
                            <br />
                            talented team? Hit us up!
                        </p>
                        <Image src={greenCircle} alt="" className="w-[9.6875em] absolute top-[-1.1em] left-[6.7em] bottom-auto right-auto" />
                    </div>
                    <div className="flex flex-col gap-[2.5em]">
                        <div className="flex flex-col items-start gap-[0em]">
                            <a href="https://dribbble.com/unfold" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>Dribbble</a>
                            <a href="https://www.instagram.com/unfoldco/" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>Instagram</a>
                            <a href="https://x.com/unfoldco/" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>X</a>
                            <a href="https://www.facebook.com/unfold/" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>Facebook</a>
                            <a href="https://www.linkedin.com/company/unfold-design-agency" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>LinkedIn</a>
                        </div>
                        <div className="flex flex-col items-start gap-[0em]">
                            <a href="https://www.unfold.co/work" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>Work</a>
                            <a href="https://www.unfold.co/about" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>About</a>

                        </div>
                        <div className="flex flex-col items-start gap-[0em]">
                            <a href="https://goo.gl/maps/1Zif41pPimsmDZgB8" target="_blank" className={`transition-colors duration-[0.3] ${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] `}>Unfold HQ
                                <br />
                                5920 Pan American Blvd
                                <br />
                                Suite 205,
                                <br />
                                North Port, Florida, 34287
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full max-w-[1700px] mx-auto px-[4.375em]">
                <a href="https://www.unfold.co/contact" className="text-[#05070f] flex justify-center items-center mb-[5.5em] py-[4em] px-[5em] relative max-w-full">
                    <div className="z-[2] flex flex-col gap-[1.5em] flex-1 relative">
                        <h2 className="relative left-[-1.1%] tracking-[-0.04em] text-[10em] font-normal leading-[.9 my-0]">Let's Chat</h2>
                        <p className="tracking-[.02em] text-[1.75em] font-normal leading-[1.2] my-0">Want to grab a virtual coffee and talk about your project?</p>

                    </div>
                    <div className="z-[2] flex flex-col items-center justify-center relative w-[14em] h-[14em]">
                        <Image src={coffee} alt="" className="w-[170%] hidden absolute " />
                        <div className="flex  flex-col items-center justify-center  z-[2] bg-[#fff] rounded-[100vw] relative w-[13em] h-[13em]">
                            <div className="w-[55%]">
                                <svg width=" 100%" height=" 100%" viewBox="0 0 106 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M65.0781 81.0233C65.0781 58.9191 82.9972 41 105.101 41" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                    <path d="M65.0781 0.97666C65.0781 23.0809 82.9972 41 105.101 41" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                    <path d="M99.8203 41L0.894692 41" stroke="currentColor" stroke-width="2" data-darkreader-inline-stroke="" ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-[1] w-full h-full rounded-[3em] bg-[#f6fa5e]"></div>
                </a>
            </div>

            <div className="w-full max-w-[1700px] px-[11em] mb-[5.5em] mx-auto">
                <div className="flex flex-col gap-[2.5em] items-start w-[20em] ">
                    <div className="flex gap-[.75em] rounded-[100vw] items-center p-[1em] bg-[#21242c]">
                        <div className="w-[1.5em] h-[1.5em]">
                            <svg width=" 100%" height=" 100%" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3426_100906)">
                                    <path d="M21.9259 11.24C21.9259 16.95 17.2959 21.58 11.5859 21.58C5.87586 21.58 1.25586 16.95 1.25586 11.24H21.9259Z" stroke="currentColor" stroke-miterlimit="10"></path>
                                    <path d="M21.7558 8.95C20.8658 4.14 16.6558 0.5 11.5958 0.5C6.53579 0.5 2.31579 4.14 1.43579 8.95" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="square"></path>
                                    <path d="M2.88574 5.26001H20.2957" stroke="currentColor" stroke-miterlimit="10"></path>
                                    <path d="M11.5959 0.5V9.23" stroke="currentColor" stroke-miterlimit="10"></path>
                                    <path d="M6.22583 9.22999C6.22583 4.60999 8.62583 0.859985 11.5958 0.859985C14.5658 0.859985 16.9558 4.60999 16.9558 9.22999" stroke="currentColor" stroke-miterlimit="10"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3426_100906">
                                        <rect width="21.67" height="22.07" fill="currentColor" transform="translate(0.755859)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className={`${myfont.variable} font-fk text-[.875em] font-normal leading-[1.4]`}> offline</p>
                        <div className="rounded-[100vw] w-[.75em] h-[.75em] bg-[#ff0055]"></div>

                    </div>
                    <p className={`${myfont.variable} font-fk text-[1.125em] font-normal leading-[1.3] my-0`}>Your company is ready for big moves and we are here for it. Turn bold ideas into an impactful brand.</p>
                </div>
            </div>

            <div className="w-full max-w-[1700px]  mx-auto px-[4.375em] overflow-hidden">
                <p className="text-center tracking-[-.04em] whitespace-nowrap flex flex-col items-center mb-[-.235em] ml-[-1.6%] text-[29.1em] leading-[0.9] mt-0">Unfold</p>

            </div>

        </div>
    )
}

export default Footer