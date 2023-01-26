import React, { useState } from "react";
function IndexPage() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="lg:px-6 xl:px-0">
                <div className="container mx-auto relative z-20">
                    <nav className="w-full absolute">
                        <div className="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
                            <div className="w-2/3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={115} height={40} viewBox="0 0 115 40" fill="none">
                                    <path d="M0 39.4521V12.0548H12.8311C18.8007 12.0548 22.0257 16.0959 22.0257 20.8904C22.0257 25.6849 18.7321 29.726 12.8311 29.726H5.83234V39.4521H0ZM16.1247 20.8904C16.1247 18.5617 14.4093 17.1918 12.0764 17.1918H5.83234V24.5891H12.0764C14.3407 24.5891 16.1247 23.1507 16.1247 20.8904Z" fill="#032E47" />
                                    <path d="M25.6621 39.4521V12.0548H31.5631V39.4521H25.6621Z" fill="#032E47" />
                                    <path d="M44.6688 39.4521C42.13 32.9452 39.5913 26.4384 37.1211 19.9315C40.895 24.3151 44.6002 28.6986 48.3741 33.1507C54.6181 22.0548 60.8621 11.0274 67.1748 0C62.0972 13.1507 57.0883 26.3014 52.0107 39.4521H44.6688Z" fill="#4B98D3" />
                                    <path d="M44.6688 39.4521C42.13 32.9452 39.5913 26.4384 37.1211 19.9315C40.895 24.3151 44.6002 28.6986 48.3741 33.1507C49.6092 35.274 50.8442 37.3973 52.0107 39.4521H44.6688Z" fill="#032E47" />
                                    <path d="M63.1953 25.8219C63.1953 17.5343 69.2335 11.6439 77.536 11.6439C85.8385 11.6439 91.8767 17.5343 91.8767 25.8219C91.8767 34.1096 85.8385 40 77.536 40C69.2335 40 63.1953 34.1096 63.1953 25.8219ZM85.9071 25.8219C85.9071 20.685 82.6136 16.8493 77.536 16.8493C72.4584 16.8493 69.2335 20.685 69.2335 25.8219C69.2335 30.8904 72.4584 34.7945 77.536 34.7945C82.6136 34.7945 85.9071 30.8904 85.9071 25.8219Z" fill="#032E47" />
                                    <path
                                        d="M71.292 25.8219C71.292 22.2603 73.8994 19.6575 77.536 19.6575C81.1726 19.6575 83.78 22.2603 83.78 25.8219C83.78 29.3836 81.1726 31.9863 77.536 31.9863C73.968 31.9863 71.292 29.3836 71.292 25.8219ZM82.2019 25.8904C82.2019 23.3562 80.4179 21.4384 77.6732 21.4384C74.9286 21.4384 73.1446 23.3562 73.1446 25.8904C73.1446 28.4247 74.9286 30.3425 77.6732 30.3425C80.4179 30.3425 82.2019 28.4247 82.2019 25.8904ZM82.9567 25.8219C82.9567 22.9452 80.8296 20.7534 77.6046 20.7534C74.3797 20.7534 72.3212 22.9452 72.3212 25.8219C72.3212 28.6986 74.3797 30.8904 77.6046 30.8904C80.8296 30.8219 82.9567 28.6986 82.9567 25.8219Z"
                                        fill="#032E47"
                                    />
                                    <path d="M101.139 39.4521V17.1918H93.1113V12.0548H115V17.1918H107.04V39.4521H101.139Z" fill="#032E47" />
                                    <path
                                        d="M77.3628 27.9299C76.7582 27.8666 76.3071 27.6132 76 27.2649L76.4415 26.5893C76.6526 26.8321 76.9693 27.0537 77.3532 27.1382V26.1353C76.7678 25.9664 76.1248 25.7236 76.1248 24.858C76.1248 24.214 76.5854 23.6756 77.3628 23.5806V23H77.9098V23.6017C78.3704 23.6545 78.7639 23.8551 79.071 24.1612L78.62 24.8157C78.4088 24.6046 78.1689 24.4779 77.9098 24.404V25.3013C78.5048 25.4702 79.167 25.7236 79.167 26.5787C79.167 27.286 78.7543 27.8244 77.9098 27.9194V28.5H77.3628V27.9299ZM77.3628 25.143V24.3724C77.1036 24.4146 76.9597 24.5729 76.9597 24.7841C76.9597 24.9741 77.1132 25.0691 77.3628 25.143ZM77.9098 26.2831V27.1276C78.1881 27.0643 78.3321 26.8848 78.3321 26.6843C78.3321 26.4731 78.1497 26.3676 77.9098 26.2831Z"
                                        fill="#4B98D3"
                                    />
                                </svg>
                            </div>
                            <div className="md:w-1/2 xl:w-1/3">
                                <ul className="flex justify-between w-full items-center text-gray-600">
                                    <li className="border-b-4 border-indigo-600 pb-1">
                                        <a href>Home</a>
                                    </li>
                                    <li className="border-b-4 border-transparent pb-1">
                                        <a href>Stats</a>
                                    </li>
                                    <li className="border-b-4 border-transparent pb-1">
                                        <a href>Coins</a>
                                    </li>
                                    <li className="border-b-4 border-transparent pb-1">
                                        <a href>Blog</a>
                                    </li>
                                    <li className="border-b-4 border-transparent pb-1">
                                        <a href>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className="lg:hidden">
                        <div className="flex py-6 justify-between items-center px-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={80} height={40} viewBox="0 0 115 40" fill="none">
                                    <path d="M0 39.4521V12.0548H12.8311C18.8007 12.0548 22.0257 16.0959 22.0257 20.8904C22.0257 25.6849 18.7321 29.726 12.8311 29.726H5.83234V39.4521H0ZM16.1247 20.8904C16.1247 18.5617 14.4093 17.1918 12.0764 17.1918H5.83234V24.5891H12.0764C14.3407 24.5891 16.1247 23.1507 16.1247 20.8904Z" fill="#032E47" />
                                    <path d="M25.6621 39.4521V12.0548H31.5631V39.4521H25.6621Z" fill="#032E47" />
                                    <path d="M44.6688 39.4521C42.13 32.9452 39.5913 26.4384 37.1211 19.9315C40.895 24.3151 44.6002 28.6986 48.3741 33.1507C54.6181 22.0548 60.8621 11.0274 67.1748 0C62.0972 13.1507 57.0883 26.3014 52.0107 39.4521H44.6688Z" fill="#4B98D3" />
                                    <path d="M44.6688 39.4521C42.13 32.9452 39.5913 26.4384 37.1211 19.9315C40.895 24.3151 44.6002 28.6986 48.3741 33.1507C49.6092 35.274 50.8442 37.3973 52.0107 39.4521H44.6688Z" fill="#032E47" />
                                    <path d="M63.1953 25.8219C63.1953 17.5343 69.2335 11.6439 77.536 11.6439C85.8385 11.6439 91.8767 17.5343 91.8767 25.8219C91.8767 34.1096 85.8385 40 77.536 40C69.2335 40 63.1953 34.1096 63.1953 25.8219ZM85.9071 25.8219C85.9071 20.685 82.6136 16.8493 77.536 16.8493C72.4584 16.8493 69.2335 20.685 69.2335 25.8219C69.2335 30.8904 72.4584 34.7945 77.536 34.7945C82.6136 34.7945 85.9071 30.8904 85.9071 25.8219Z" fill="#032E47" />
                                    <path
                                        d="M71.292 25.8219C71.292 22.2603 73.8994 19.6575 77.536 19.6575C81.1726 19.6575 83.78 22.2603 83.78 25.8219C83.78 29.3836 81.1726 31.9863 77.536 31.9863C73.968 31.9863 71.292 29.3836 71.292 25.8219ZM82.2019 25.8904C82.2019 23.3562 80.4179 21.4384 77.6732 21.4384C74.9286 21.4384 73.1446 23.3562 73.1446 25.8904C73.1446 28.4247 74.9286 30.3425 77.6732 30.3425C80.4179 30.3425 82.2019 28.4247 82.2019 25.8904ZM82.9567 25.8219C82.9567 22.9452 80.8296 20.7534 77.6046 20.7534C74.3797 20.7534 72.3212 22.9452 72.3212 25.8219C72.3212 28.6986 74.3797 30.8904 77.6046 30.8904C80.8296 30.8219 82.9567 28.6986 82.9567 25.8219Z"
                                        fill="#032E47"
                                    />
                                    <path d="M101.139 39.4521V17.1918H93.1113V12.0548H115V17.1918H107.04V39.4521H101.139Z" fill="#032E47" />
                                    <path
                                        d="M77.3628 27.9299C76.7582 27.8666 76.3071 27.6132 76 27.2649L76.4415 26.5893C76.6526 26.8321 76.9693 27.0537 77.3532 27.1382V26.1353C76.7678 25.9664 76.1248 25.7236 76.1248 24.858C76.1248 24.214 76.5854 23.6756 77.3628 23.5806V23H77.9098V23.6017C78.3704 23.6545 78.7639 23.8551 79.071 24.1612L78.62 24.8157C78.4088 24.6046 78.1689 24.4779 77.9098 24.404V25.3013C78.5048 25.4702 79.167 25.7236 79.167 26.5787C79.167 27.286 78.7543 27.8244 77.9098 27.9194V28.5H77.3628V27.9299ZM77.3628 25.143V24.3724C77.1036 24.4146 76.9597 24.5729 76.9597 24.7841C76.9597 24.9741 77.1132 25.0691 77.3628 25.143ZM77.9098 26.2831V27.1276C78.1881 27.0643 78.3321 26.8848 78.3321 26.6843C78.3321 26.4731 78.1497 26.3676 77.9098 26.2831Z"
                                        fill="#4B98D3"
                                    />
                                </svg>
                            </div>
                            <div className=" flex items-center">
                                {show && (
                                    <ul id="list" className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                        <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold">Home</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold">Stats</span>
                                            </a>
                                        </li>
                                        <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold">Coins</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold">Blog</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a href="javascript:void(0)">
                                                <span className="ml-2 font-bold">About Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <div className="xl:hidden" onClick={() => setShow(!show)}>
                                    {show ? (
                                        <div id="close" className=" close-m-menu">
                                            <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    ) : (
                                        <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">ONE WALLET TO RULE THEM ALL</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Do you want to control your expenses and be always aware of how much money you have spent? </h2>
                            <div className="w-full flex justify-center md:block">
                                <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="md:absolute md:w-1/2 md:-ml-28" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png" alt />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
