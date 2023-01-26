import React, { useState } from "react";
function IndexPage() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="container mx-auto">
                <nav className="lg:hidden">
                    <div className="flex py-2 justify-between items-center px-4">
                        <div>
                            <img src="https://cdn.tuk.dev/assets/components/111220/Hero9/logo.png" alt />
                        </div>
                        <div className="visible flex items-center">
                            {show && (
                                <ul className="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Home</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Donations</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Events</span>
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
                                    <div>
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
                <div className="flex justify-center w-full px-16">
                    <img src="https://i.ibb.co/5kw5jQn/VOTE-GELLER.png" alt="long text" />
                </div>
                <div className="lg:flex lg:mt-6 xl:-mt-6">
                    <div className="w-full lg:w-2/5 bg-indigo-800 py-10 px-6 xl:py-24 xl:px-8 text-white">
                        <h1 className="text-3xl font-semibold lg:w-10/12">Get to know Senator Jessica Geller</h1>
                        <p className="py-6 text-lg">Transparency and honesty seem to matter more than ever in America</p>
                        <div className="flex items-center">
                            <button className="hover:opacity-90 py-3 px-4 bg-red-600 text-sm mr-3 uppercase focus:outline-none">Who is Jessica?</button>
                            <button className="hover:opacity-90 py-3 px-4 bg-indigo-700 text-sm uppercase focus:outline-none">The Plan</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 relative">
                        <img className="lg:absolute inset-0 h-full w-full object-cover object-center" src="https://cdn.tuk.dev/assets/components/111220/Hero9/header.png" alt="Senator" />
                    </div>
                </div>
                <nav>
                    <div className="px-4 xl:px-0 hidden lg:flex items-center justify-between w-full py-5 border-b border-gray-200">
                        <div className="flex items-center">
                            <div>
                                <div>
                                    <img src="https://cdn.tuk.dev/assets/components/111220/Hero9/logo.png" alt />
                                </div>
                            </div>
                            <div className="flex items-center pl-6">
                                <div className="text-sm font-medium cursor-pointer text-red-600">
                                    <a href="javascript:void(0)">Home</a>
                                </div>
                                <div className="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                                    <a href="javascript:void(0)">Donations</a>
                                </div>
                                <div className="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                                    <a href="javascript:void(0)">Events</a>
                                </div>
                                <div className="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                                    <a href="javascript:void(0)">Blog</a>
                                </div>
                                <div className="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                                    <a href="javascript:void(0)">About Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-1/5 xl:w-1/6">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                    <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#3C366B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.5 24.5L17.5 17.5" stroke="#3C366B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <button className="hover:opacity-90 py-3 px-4 bg-red-600 text-sm uppercase text-white focus:outline-none">Donate Now</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default IndexPage;
