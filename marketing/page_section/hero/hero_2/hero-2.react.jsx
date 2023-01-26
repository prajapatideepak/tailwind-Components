import React, { useState } from "react";

function MyApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                <div className>
                    {/* Navigation */}
                    <div className="container mx-auto z-40 absolute inset-x-0  pt-6 flex flex-row items-center justify-between px-10 ">
                        <div>
                            <img src="https://i.ibb.co/B3s72hL/logo-1.png" alt="Company Logo" role="img" />
                        </div>
                        <div className="sm:inline-flex hidden">
                            <ul className="flex space-x-16 flex-row items-center ">
                                <li className="text-base font-medium leading-none sm:text-center text-gray-900 hover:underline">
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li className="text-base font-medium leading-none sm:text-center text-gray-900 hover:underline">
                                    <a href="javascript:void(0)">About</a>
                                </li>
                                <li className="text-base font-medium leading-none sm:text-center text-gray-900 hover:underline">
                                    <a href="javascript:void(0)">Projects</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center sm:hidden relative" onclick="dropdownHandler(this)">
                            <button onClick={() => setShow(!show)} className="text-gray-800 text-2xl focus:outline-none focus:ring-2 focus:ring-gray-600 rounded" onclick="dropdownHandler(this)">
                                <svg aria-label="open menu" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            </button>
                            {show && (
                                <ul className="p-2 w-40 border-r bg-white absolute rounded z-20 top-10 right-0 shadow">
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-400 focus:text-indigo-700 focus:outline-none">
                                        <div className="flex items-center">
                                            <a href="javascript:void(0)" className="ml-2">
                                                Home
                                            </a>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                        <a href="javascript:void(0)" className="ml-2">
                                            About
                                        </a>
                                    </li>
                                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none bg-white">
                                        <a href="javascript:void(0)" className="ml-2">
                                            Projects
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    {/* Navigation */}
                    {/* Hero content */}
                    <div className="relaive pt-48 sm:py-56 z-20 container mx-auto flex flex-col space-y-10 md:space-y-0 md:flex-row  xl:mb-0 relative">
                        <div className="relative ml-12 lg:ml-20 ">
                            <h1 className="text-5xl lg:text-7xl leading-tight lg:leading-none text-gray-900 absolute z-10 -top-12 -left-2">
                                <span className="text-6xl lg:text-7xl font-bold lg:font-extrabold text-gray-900 ">Discover</span> <br /> the new you.
                            </h1>
                            <hr className="w-44 lg:w-80 h-8 border-8 border-indigo-400 bg-indigo-400 absolute inset-0 z-0 -top-2 lg:top-0 left-20" />
                            <div className="mt-24 lg:mt-36 flex flex-col space-y-6 sm:space-y-14 md:w-2/3 ">
                                <p className="text-base leading-normal text-gray-600 w-11/12 md:w-1/2 xl:w-2/3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div>
                                    <a href="javascript:void(0)" className="text-xl font-medium leading-tight underline text-gray-900 hover:text-indigo-400 ">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:absolute z-0 md:right-0 md:top-0 md:max-w-md flex justify-center px-5 sm:px-0 h-full">
                            <img src="https://i.ibb.co/MgYJ1Xd/pexels-anna-shvets-4588071-1-1.png" alt="A Rabbit" role="img" className />
                        </div>
                    </div>
                    {/* Hero content end */}
                </div>
            </div>
        </>
    );
}

export default MyApp;
