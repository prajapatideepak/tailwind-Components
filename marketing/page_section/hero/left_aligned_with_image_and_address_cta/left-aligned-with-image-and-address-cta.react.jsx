import React, { useState } from "react";
export default function IndexPage() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="2xl:mx-auto 2xl:container xl:px-0 px-4">
                <nav className="2xl:px-0 xl:px-16 px-0">
                    <div className="hidden lg:flex items-center justify-between pt-10">
                        <a href="javascript:void(0)">
                            <img src="https://cdn.tuk.dev/assets/templates/radian/Logo.png" />
                        </a>
                        <ul className="flex">
                            <li className="text-lg font-bold text-indigo-700 tracking-wide">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                                <a href="javascript:void(0)">About Us</a>
                            </li>
                            <li className="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                                <a href="javascript:void(0)">Projects</a>
                            </li>
                            <li className="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                                <a href="javascript:void(0)">Clients</a>
                            </li>
                            <li className="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                                <a href="javascript:void(0)">Team</a>
                            </li>
                            <li className="text-lg text-gray-800 tracking-wide ml-8 hover:text-indigo-700">
                                <a href="javascript:void(0)">Contacts</a>
                            </li>
                        </ul>
                        <div className="flex items-center">
                            <svg className="text-gray-800 hover:text-indigo-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={20} height={24} viewBox="0 0 20 24" fill="none">
                                <path
                                    d="M16.3641 17.2538L11.5907 22.3037C11.1689 22.7495 10.5969 23 10.0006 23C9.40422 23 8.83227 22.7495 8.41038 22.3037L3.63588 17.2538C2.37725 15.9222 1.52013 14.2256 1.1729 12.3787C0.825673 10.5317 1.00393 8.61734 1.68513 6.87757C2.36633 5.1378 3.51989 3.6508 4.99992 2.6046C6.47995 1.5584 8.21999 1 10 1C11.78 1 13.5201 1.5584 15.0001 2.6046C16.4801 3.6508 17.6337 5.1378 18.3149 6.87757C18.9961 8.61734 19.1743 10.5317 18.8271 12.3787C18.4799 14.2256 17.6227 15.9222 16.3641 17.2538Z"
                                    fill="white"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M10 14.0912C11.864 14.0912 13.375 12.4926 13.375 10.5207C13.375 8.54877 11.864 6.9502 10 6.9502C8.13607 6.9502 6.62503 8.54877 6.62503 10.5207C6.62503 12.4926 8.13607 14.0912 10 14.0912Z" fill="white" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className="ml-6 text-gray-800 hover:text-indigo-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={27} height={24} viewBox="0 0 27 24" fill="none">
                                <path d="M1 23.1113L2.80415 17.7288C1.24487 15.4354 0.680795 12.7194 1.2168 10.086C1.75281 7.45252 3.35242 5.08073 5.71823 3.41159C8.08403 1.74245 11.055 0.889551 14.0788 1.01148C17.1026 1.1334 19.9735 2.22185 22.1575 4.07445C24.3416 5.92705 25.6903 8.41772 25.9529 11.0834C26.2155 13.7491 25.374 16.4083 23.585 18.5667C21.796 20.7251 19.1812 22.2358 16.2268 22.8178C13.2723 23.3999 10.1792 23.0138 7.5227 21.7312L1 23.1113Z" fill="white" />
                                <path d="M1 23.1113L2.80415 17.7288C1.24487 15.4354 0.680795 12.7194 1.2168 10.086C1.75281 7.45252 3.35242 5.08073 5.71823 3.41159C8.08403 1.74245 11.055 0.889551 14.0788 1.01148C17.1026 1.1334 19.9735 2.22185 22.1575 4.07445C24.3416 5.92705 25.6903 8.41772 25.9529 11.0834C26.2155 13.7491 25.374 16.4083 23.585 18.5667C21.796 20.7251 19.1812 22.2358 16.2268 22.8178C13.2723 23.3999 10.1792 23.0138 7.5227 21.7312L1 23.1113" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.4904 12.0703V12.0848" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.93872 12.0703V12.0848" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.0416 12.0703V12.0848" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className="ml-6 text-gray-800 hover:text-indigo-700 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M3.58824 1H8.76471L11.3529 7.47059L8.11765 9.41177C9.50359 12.222 11.778 14.4964 14.5882 15.8824L16.5294 12.6471L23 15.2353V20.4118C23 21.0982 22.7273 21.7565 22.2419 22.2419C21.7565 22.7273 21.0982 23 20.4118 23C15.3638 22.6932 10.6026 20.5496 7.02648 16.9735C3.45042 13.3974 1.30677 8.63625 1 3.58824C1 2.90179 1.27269 2.24346 1.75808 1.75808C2.24346 1.27269 2.90179 1 3.58824 1Z" fill="white" />
                                <path d="M3.58824 1H8.76471L11.3529 7.47059L8.11765 9.41176C9.50359 12.222 11.778 14.4964 14.5882 15.8824L16.5294 12.6471L23 15.2353V20.4118C23 21.0982 22.7273 21.7565 22.2419 22.2419C21.7565 22.7273 21.0982 23 20.4118 23C15.3638 22.6932 10.6026 20.5496 7.02648 16.9735C3.45042 13.3974 1.30677 8.63625 1 3.58824C1 2.90179 1.27269 2.24346 1.75808 1.75808C2.24346 1.27269 2.90179 1 3.58824 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </nav>
                <nav className="lg:hidden relative z-40">
                    <div className="flex pt-4 justify-between items-center">
                        <div>
                            <a href="javascript:void(0)">
                                <img src="https://cdn.tuk.dev/assets/templates/radian/Logo.png" />
                            </a>
                        </div>
                        <div className="visible flex items-center">
                            {show && (
                                <ul className=" p-2  bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Home</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onClick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">About Us</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Projects</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Clients</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Team</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Contacts</span>
                                        </a>
                                    </li>
                                </ul>
                            )}
                            <div className="xl:hidden" onClick={() => setShow(!show)}>
                                {show ? (
                                    <div className=" close-m-menu">
                                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                ) : (
                                    <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="md:flex-row flex flex-col flex-wrap items-center relative py-10 md:py-40 2xl:px-0 xl:px-16 px-0">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800 uppercase">
                            INFINITY MADE
                            <br />
                            <span className="text-indigo-700">REAL</span>
                        </h1>
                        <p className="text-gray-800 leading-8 tracking-wide mt-6 text-base md:text-lg">One of the best designers in the buisness who will make your location look good and professional with the highest quality materials available.</p>
                    </div>
                    <div className="w-full md:w-2/3 flex md:justify-end relative mt-10 md:mt-0 md:pl-20">
                        <img className="w-full z-20" src="https://cdn.tuk.dev/assets/templates/radian/hero1.png" alt="hero" />
                        <img className="absolute z-0 left-0 bottom-0 pb-64 ml-14 hidden 2xl:-mb-16 xl:block" src="https://cdn.tuk.dev/assets/templates/radian/small_circle.png" alt="small circle" />
                        <img className="hidden md:block absolute z-0 xl:-mb-16 left-0 bottom-0 2xl:w-1/4 xl:w-1/3 lg:w-1/4 w-1/5 xl:ml-0 lg:ml-0 ml-10" src="https://cdn.tuk.dev/assets/templates/radian/circle.png" alt="circle" />
                        <div className>
                            <div className="absolute md:-mb-8 xl:-mb-16 bg-white border-2 border-gray-800 flex justify-between items-center w-full md:ml-10 lg:ml-0 md:w-10/12 shadow-xl z-40 bottom-0 left-0 py-4 px-4 lg:px-9 lg:py-9">
                                <p className="text-sm md:text-lg lg:text-2xl font-semibold tracking-wider leading-9 text-gray-800">
                                    308 Negra Arroyo Lane,
                                    <br />
                                    Albuquerque, New Mexico.
                                </p>
                                <div className="w-16 h-16 cursor-pointer hover:bg-gray-300 ease-in duration-150 rounded-full border-black border-4 flex items-center justify-center">
                                    <svg className xmlns="http://www.w3.org/2000/svg" width={29} height={29} viewBox="0 0 29 29" fill="none">
                                        <path d="M2.47308 14.3386H27.0261" stroke="#1A202C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.503 26.6624L27.0257 14.3386" stroke="#1A202C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.503 2.01477L27.0257 14.3386" stroke="#1A202C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row xl:flex-col w-full xl:w-auto items-center 2xl:-mr-20 justify-center relative xl:absolute right-0 2xl:px-0 xl:px-4 px-0">
                        <a className="hidden xl:block" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={19} viewBox="0 0 35 19" fill="none">
                                <path d="M1 18L17.5 1L34 18" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="xl:hidden" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </a>
                        <div className="flex items-center xl:flex-col justify-center  py-16">
                            <a href="javascript:void(0)">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-indigo-700" />
                            </a>
                            <a href="javascript:void(0)">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10" />
                            </a>
                            <a href="javascript:void(0)">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10" />
                            </a>
                            <a href="javascript:void(0)">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10" />
                            </a>
                            <a href="javascript:void(0)">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10" />
                            </a>
                            <a href="javascript:void(0)">
                                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10" />
                            </a>
                        </div>
                        <a className="hidden xl:block" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={18} viewBox="0 0 35 18" fill="none">
                                <path d="M34 1L17.5 17L1 1" stroke="#718096" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="ml-5 xl:hidden" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
