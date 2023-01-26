import React, { useState } from "react";

export default function Index() {

    const [rotate, setRotate] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <div className="bg-gray-200" style={{height:'600px'}}>
            <div className=" h-full relative">
                <div className="bg-white">
                    <div className="2xl:container 2xl:mx-auto">
                        <nav className>
                            <div className=" flex flex-row justify-between">
                                <div className=" flex space-x-3 items-center py-5 lg:pl-7 sm:pl-6 py-6 pl-4 pr-8">
                                    <svg className="cursor-pointer" width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z" fill="#1F2937" />
                                    </svg>
                                    <h1 className=" font-normal text-2xl leading-6 text-gray-800">OvonRueden</h1>
                                </div>
                                {/* For large (i.e. desktop and laptop sized screen) */}
                                <div className="lg:flex hidden flex-auto justify-between flex-row px-7 border-l border-r border-gray-200 py-6">
                                    <div className>
                                        <p className=" font-normal text-xs leading-3 text-gray-600">Hi David</p>
                                        <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">Welcome Back</h3>
                                    </div>
                                    <div className=" focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded ">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 14L10 10" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <input aria-label="Search Bar" className="focus:outline-none w-56  xl:w-64 bg-gray-50 font-normal text-sm leading-4 text-gray-500 placeholder-gray-500 " type="text" placeholder="Search" />
                                    </div>
                                </div>
                                <div className=" hidden sm:flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8">
                                    <div className="cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200" />
                                        <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg" />
                                    </div>
                                    <div className=" flex justify-center items-center flex-row">
                                        <img className="w-10 h-10 " src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3" />
                                        <div className="ml-2">
                                            <p className="text-lg leading-4 font-semibold text-gray-800">David Hulk</p>
                                            <p className=" font-normal text-xs leading-3 text-gray-600 mt-1">david@alphahulk.com</p>
                                        </div>
                                        <svg onClick={()=>setRotate(!rotate)} className={`${rotate ? 'rotate-180' : ''} cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800`} width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L13 1" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Burger Icon */}
                                <div id="bgIcon" onClick={()=>setShow(!show)} className=" focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4">
                                    <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={`${show ? '' : 'hidden'} `} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            {/* for medium-sized devices */}
                            <div className="lg:hidden hidden sm:flex flex-col lg:px-7 sm:px-6 px-4 ">
                                <hr className=" w-full bg-gray-200 " />
                                <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                                    <div className>
                                        <p className=" font-normal text-xs leading-3 text-gray-600">Hi David</p>
                                        <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">Welcome Back</h3>
                                    </div>
                                    <div className=" focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded ">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 14L10 10" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <input aria-label="Search Bar" className=" focus:outline-none w-44 lg:w-56 xl:w-64 bg-gray-50 font-normal text-sm leading-4 text-gray-500 placeholder-gray-500 " type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Mobile and Small devices Navigation */}
                <div id="MobileNavigation" className={`${show ? '' : 'hidden'} transform duration-150 sm:hidden h-full bg-white `}>
                    <div className=" flex flex-col justify-between h-auto ">
                        <div className=" flex flex-col lg:px-7 sm:px-6 px-4">
                            <hr className=" w-full bg-gray-200 " />
                            <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                                <div className>
                                    <p className=" font-normal text-xs leading-3 text-gray-600">Hi David</p>
                                    <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">Welcome Back</h3>
                                </div>
                                <div className="cursor-pointer relative flex justify-center items-center">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200" />
                                    <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg" />
                                </div>
                            </div>
                            <div className=" w-auto sm:w-96 focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center pl-4  space-x-3 rounded mt-4 ">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 14L10 10" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input aria-label="Search Bar" className=" focus:outline-none w-full bg-gray-50 font-normal pl-2 text-sm leading-4  py-3.5 text-gray-500 placeholder-gray-500 " type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className=" flex items-center flex-row py-6 px-8 bg-gray-100 absolute bottom-0 left-0 w-full">
                            <img className="w-10 h-10 " src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person image-3" />
                            <div className="ml-2">
                                <p className="text-lg leading-4 font-semibold text-gray-800">David Hulk</p>
                                <p className=" font-normal text-xs leading-3 text-gray-600 mt-1">david@alphahulk.com</p>
                            </div>
                            <svg onclick="rotateIcon()" className="cursor-pointer transform duration-100 xl:ml-7 ml-3.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 " width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


