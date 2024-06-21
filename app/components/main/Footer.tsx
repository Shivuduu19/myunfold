import Image from "next/image"
import greenCircle from '@/public/unfold/63e1e17ef3d2d0d1c6b0e561_green circle.svg'
import myfont, { myfoldAlt, myfontGrotesk } from "@/app/fonts/fontfile"
import coffee from '@/public/unfold/640b86c26276f0736b64eb13_coffee.svg'
import FooterExpand from "../FooterExpand"


const Footer = () => {
    return (
        <div className="bg-[#05070f]  text-[#fff]">
            <div className=" bg-[#e8f0f9] rounded-br-[3.5em] rounded-bl-[3.5em] h-[5.5em]"></div>

            <div className="flex items-center w-full pt-[7.75em] pb-[8.75em] ">
                <div className="flex overflow-hidden  gap-[7.5em] flex-none justify-start items-stretch w-full whitespace-nowrap  ">
                    <div className="animate-scroll">
                        <p className="leading-[1.1] tracking-[-0.04em] text-[10em] font-normal  my-0">
                            We make things More Yummy™
                        </p>
                    </div>
                    <div className="animate-scroll">
                        <p className="leading-[1.1] tracking-[-0.04em] text-[10em] font-normal  my-0">
                            We make things More Yummy™
                        </p>
                    </div>
                    <div className="animate-scroll">
                        <p className="leading-[1.1] tracking-[-0.04em] text-[10em] font-normal  my-0">
                            We make things More Yummy™
                        </p>
                    </div>
                </div>
            </div>


            <div className="px-[11em] w-full max-w-[1700px] mx-auto">
                <div className="flex justify-between betmt:flex-col betmt:gap-[9em] items-stretch mb-[5.5em] ">
                    <div className="w-[42em] betmt:w-auto relative">
                        <p className='tracking-[-0.02em] mobile:text-[5em] betmt:text-[3.4em]   text-[2.5em] font-normal leading-[1.2] my-0'>
                            We’re Unfold. A collective bunch working on incredible projects and building enduring partnerships that extend well beyond the deliverable.
                            <br />
                            <br />
                            Want to collaborate
                            <br />
                            with a super down-to-earth, mad-
                            <br />
                            talented team? Hit us up!
                        </p>
                        <Image src={greenCircle} alt="" className="w-[9.6875em] mobile:w-[18em] mobile:left-[12.8em] betmt:w-[14em] betmt:top-[-2em] betmt:left-[7.9em] absolute top-[-1.1em] left-[6.7em] bottom-auto right-auto" />
                    </div>
                    <div className="flex flex-col gap-[2.5em]">
                        <div className="flex flex-col items-start gap-[0em]">
                            <a href="https://dribbble.com/unfold" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] `}>Dribbble</a>
                            <a href="https://www.instagram.com/unfoldco/" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk   mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] `}>Instagram</a>
                            <a href="https://x.com/unfoldco/" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk text-[1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] font-normal leading-[1.3] `}>X</a>
                            <a href="https://www.facebook.com/unfold/" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk text- [1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] font-normal leading-[1.3] `}>Facebook</a>
                            <a href="https://www.linkedin.com/company/unfold-design-agency" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk text-[1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] font-normal leading-[1.3] `}>LinkedIn</a>
                        </div>
                        <div className="flex flex-col items-start gap-[0em]">
                            <a href="https://www.unfold.co/work" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] text-[1.125em] font-normal leading-[1.3] `}>Work</a>
                            <a href="https://www.unfold.co/about" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk text-[1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] font-normal leading-[1.3] `}>About</a>

                        </div>
                        <div className="flex flex-col items-start gap-[0em]">
                            <a href="https://goo.gl/maps/1Zif41pPimsmDZgB8" target="_blank" className={`transition-colors duration-[0.3] ${myfontGrotesk.variable} font-grotesk text-[1.125em] mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] font-normal leading-[1.3] `}>Unfold HQ
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
            <FooterExpand />

            <div className="w-full max-w-[1700px] px-[11em] mb-[5.5em] mx-auto">
                <div className="flex flex-col betmt:w-auto tablet:w-[40em] gap-[2.5em] items-start w-[20em] ">
                    <div className="flex gap-[.75em] mobile:gap-[2em] mobile:py-[2.5em] mobile:px-[4em] betmt:px-[3em] tablet:gap-[1.1em] tablet:py-[1.5em] tablet:px-[2em] rounded-[100vw] items-center p-[1em] bg-[#21242c]">
                        <div className="w-[1.5em] h-[1.5em] mobile:w-[1.2em] mobile:h-[1.2em] betmt:h-[1.5em] betmt:w-[1.5em] betmt:text-[18px] tablet:w-[2.5em] tablet:h-[2.5em]">
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
                        <p className={`${myfontGrotesk.variable} font-grotesk text-[.875em] mobile:text-[3.4em] betmt:text-[2.2em] tablet:text-[1.3em] font-normal leading-[1.4]`}> Offline</p>
                        <div className="rounded-[100vw] mobile:w-[2em] mobile:h-[2em] betmt:w-[1em] betmt:h-[1em] w-[.75em] h-[.75em] bg-[#ff0055]"></div>

                    </div>
                    <p className={`${myfontGrotesk.variable} font-grotesk text-[1.125em] font-normal mobile:text-[4em] betmt:text-[2.5em] tablet:text-[1.6em] leading-[1.3] my-0`}>Your company is ready for big moves and we are here for it. Turn bold ideas into an impactful brand.</p>
                </div>
            </div>

            <div className="w-full max-w-[1700px]  mx-auto px-[4.375em] overflow-hidden">
                <p className={` ${myfoldAlt.variable} font-fkAlt text-center tracking-[-.04em] whitespace-nowrap flex flex-col items-center mb-[-.279em] ml-[-1.6%] text-[29.1em] leading-[0.9] mt-0`}>Unfold</p>

            </div>

        </div>
    )
}

export default Footer