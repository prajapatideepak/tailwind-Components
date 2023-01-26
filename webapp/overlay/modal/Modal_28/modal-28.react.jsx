import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-1/2 rounded shadow-lg py-5 px-4 dark:bg-gray-800 bg-white">
                    <div className="md:flex items-center justify-between">
                        <div className="flex items-center justify-between">
                            <p className="text-base font-bold leading-4 dark:text-gray-100 text-gray-900">Subscribe to our Newsletter</p>
                            <div className="cursor-pointer md:hidden dark:text-gray-100 text-gray-400 text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                            <div className="pb-1 border-b border-gray-200 dark:border-gray-400 w-44">
                                <input className="w-full bg-transparent focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 text-sm font-medium leading-4 text-gray-500 dark:text-gray-400" placeholder="Enter your email..." />
                            </div>
                            <button className="focus:outline-none ml-6 md:mr-4 px-4 py-2 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded">
                                <p className="text-xs font-medium leading-3 text-gray-100">Subscribe</p>
                            </button>
                            <div className="cursor-pointer md:block hidden dark:text-gray-100 text-gray-400 text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
