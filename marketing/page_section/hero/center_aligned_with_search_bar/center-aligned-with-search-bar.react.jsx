import React, { useState } from "react";
export default function Home() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    return (
        <>
            <div className="mx-auto container">
                {/* Navigation Start */}
                <nav className="py-12 hidden lg:block f-s-s-p">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <div>
                                <a href="./index.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                        <g id="Logo">
                                            <circle id="Oval" cx={20} cy={20} r={20} fill="url(#paint0_linear)" />
                                            <path id="L" d="M26.8838 30L27.1299 24.4355H26.542C25.6807 28.3184 24.4775 29.0156 20.8545 29.1523L18.1064 29.2617V12.7871C18.1064 11.4609 18.3662 11.1191 20.3623 10.9004V10.2578H13.0752V10.9004C14.9072 11.1191 15.1533 11.3926 15.1533 12.6094V27.6484C15.1533 28.8516 14.9072 29.1387 13.0752 29.3574V30H26.8838Z" fill="white" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear" x1={0} y1={0} x2={0} y2={40} gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#667EEA" />
                                                <stop offset={1} stopColor="#4C51BF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                            <div className="flex items-center pl-10 cursor-pointer">
                                <p className="text-sm text-indigo-700 font-semibold">View all categories</p>
                                <div className="pl-2 mt-1 text-indigo-700">
                                    <div className="cursor-pointer" onClick={() => setShow(!show)}>
                                        {show ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon block icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        )}
                                    </div>
                                    {show && (
                                        <ul className="bg-white p-4 shadow-lg  duration-300 opacity-100 absolute z-30 -ml-24" id="listHolder1">
                                            <li className="hover:opacity-75 mt-1">All Category</li>
                                            <li className="hover:opacity-75 mt-1">Mobile Phone</li>
                                            <li className="hover:opacity-75 mt-1">Tablets</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <ul className="cursor-pointer flex items-center text-sm text-gray-600 font-semibold">
                                    <li className="hover:opacity-75">Mobile phones</li>
                                    <li className="pl-10 cursor-pointer hover:opacity-75">Houses</li>
                                    <li className="pl-10 cursor-pointer hover:opacity-75">Electronics</li>
                                    <li className="pl-10 cursor-pointer hover:opacity-75">Tablets</li>
                                </ul>
                            </div>
                            <div className="pl-12 flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                                        <path d="M31.5 21L27 16.5H16.5C15.6716 16.5 15 15.8284 15 15V6C15 5.17157 15.6716 4.5 16.5 4.5H30C30.8284 4.5 31.5 5.17157 31.5 6V21" stroke="#718096" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 22.5V25.5C21 26.3284 20.3284 27 19.5 27H9L4.5 31.5V16.5C4.5 15.6716 5.17157 15 6 15H9" stroke="#718096" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="pl-10 flex items-center">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-cover rounded-md mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                                        </div>
                                        <div className="flex relative items-center" data-menu3>
                                            {show2 && (
                                                <ul className="cursor-pointer p-2 w-40 border-r bg-white absolute rounded z-40 right-0 shadow mt-10  top-0" id="listHolder3">
                                                    <li className="cursor-pointer text-text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <circle cx={12} cy={7} r={4} />
                                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                            </svg>
                                                            <span className="ml-2">My Profile</span>
                                                        </div>
                                                    </li>
                                                    <li className="cursor-pointer text-text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <circle cx={12} cy={12} r={9} />
                                                            <line x1={12} y1={17} x2={12} y2="17.01" />
                                                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                                        </svg>
                                                        <span className="ml-2">Help Center</span>
                                                    </li>
                                                    <li className="cursor-pointer text-text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                            <circle cx={12} cy={12} r={3} />
                                                        </svg>
                                                        <span className="ml-2">Account Settings</span>
                                                    </li>
                                                </ul>
                                            )}
                                            <div className="cursor-pointer text-text-gray-600" onClick={() => setShow2(!show2)}>
                                                {show2 ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="6 15 12 9 18 15" />
                                                    </svg>
                                                ) : (
                                                    <svg id="andicators6" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-10">
                                    <button className="py-3 px-8 bg-indigo-700 line-height14 text-white text-sm focus:outline-none hover:opacity-75">Post Ad</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Mobile Responsive */}
                <nav className="lg:hidden">
                    <div className="flex py-2 justify-between items-center px-4 py-6">
                        <a href="./index.html">
                            <img src="https://cdn.tuk.dev/assets/templates/classified/Logo2.png" />
                        </a>
                        <div className="visible flex items-center">
                            {show4 && (
                                <ul id="list" className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:mt-20">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Mobile Phones</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Automobiles</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Houses</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Electronics</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Tablets</span>
                                        </a>
                                    </li>
                                </ul>
                            )}
                            <div className="xl:hidden" onClick={() => setShow4(!show4)}>
                                {show4 ? (
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
                {/* Hero */}
                <div className="flex w-full flex-col items-center justif-center py-16 xl:px-0 px-4">
                    <h1 className="lg:text-6xl text-3xl text-indigo-700 font-bold text-center">What are you looking for?</h1>
                    <h2 className="lg:text-2xl text-lg text-gray-600 pt-6 text-centerlg:mb-0 mb-4">Mobile phones, laptops, automobiles, houses and much more.</h2>
                    <div className="flex flex-col w-full sm:w-1/2 md:ml-4 mt-3 md:mt-10">
                        <div className="relative w-full">
                            <div className="lg:absolute bg-gray-100 lg:border-r lg:border-t lg:border-b lg:mb-0 mb-4 lg:py-5 py-3 border-gray-300 cursor-pointer flex items-center justify-between pr-3 right-0 h-full z-30" onClick={() => setShow3(!show3)}>
                                <p className="lg:text-2xl text-lg leading-tight tracking-normal text-gray-700 px-4">All Categories</p>
                                {show3 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className="icon  icon-tabler icon-tabler-chevron-up" id="andicators5" width={24} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon block icon-tabler icon-tabler-chevron-down" id="andicators4" width={24} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                )}
                                {show3 && (
                                    <ul className="bg-white w-64 shadow-lg p-4  duration-300 opacity-100 mt-56 absolute z-40 lg:-ml-16" id="listHolder2">
                                        <li className="hover:opacity-75 py-3 text-base">All Category</li>
                                        <li className="hover:opacity-75 py-3 text-base">Mobile Phones</li>
                                        <li className="hover:opacity-75 py-3 text-base">Tablets</li>
                                    </ul>
                                )}
                            </div>
                            <div className="absolute inset-0 lg:mt-0 mt-8 w-16 text-gray-700 flex items-center pl-6 h-full lg:py-5 z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                    <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.5 24.5L17.5 17.5" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input id="search" className="w-full text-text-gray-600 focus:outline-none focus:border font-normal pl-16 pr-24 lg:py-5 py-2 flex items-center text-2xl border-gray-300 rounded border relative z-10" placeholder="Search" />
                        </div>
                    </div>
                    <div className="sm:flex justify-center items-center pt-12">
                        <button className="w-full sm:w-auto py-4 px-8 bg-indigo-700 text-white lg:text-2xl border border border-indigo-700 hover:opacity-75 text-lg mr-4 focus:outline-none">Search</button>
                        <button className="w-full sm:w-auto mt-4 sm:mt-0 py-4 px-8 bg-transparent border border border-indigo-700 text-indigo-700 text-text-indigo-700 hover:opacity-75 lg:text-2xl text-lg focus:outline-none">Advance Search</button>
                    </div>
                </div>
            </div>
        </>
    );
}
