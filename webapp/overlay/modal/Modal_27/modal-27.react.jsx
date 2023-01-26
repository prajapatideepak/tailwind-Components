import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative sm:w-96 rounded shadow-lg pt-8 px-4 pb-6 dark:bg-gray-800 bg-white">
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Limited Offer</p>
                        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg mt-6 mb-8 w-full bg-gray-50 dark:bg-gray-800">
                            <div className="w-1/3 p-4 sm:p-6 flex flex-col items-center justify-center">
                                <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-10 text-gray-800 dark:text-gray-100">01</p>
                                <p className="text-sm sm:text-base font-semibold leading-4 text-gray-800 mt-2 dark:text-gray-100">Day</p>
                            </div>
                            <div className="w-1/3 p-4 sm:p-6 flex flex-col items-center justify-center border-l border-gray-200 dark:border-gray-700">
                                <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-10 text-gray-800 dark:text-gray-100">12</p>
                                <p className="text-sm sm:text-base font-semibold leading-4 text-gray-800 mt-2 dark:text-gray-100">Hours</p>
                            </div>
                            <div className="w-1/3 p-4 sm:p-6 flex flex-col items-center justify-center border-l border-gray-200 dark:border-gray-700">
                                <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-10 text-gray-800 dark:text-gray-100">36</p>
                                <p className="text-sm sm:text-base font-semibold leading-4 text-gray-800 mt-2 dark:text-gray-100">Minutes</p>
                            </div>
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold leading-7 text-center text-gray-800 dark:text-gray-100">Avail 50% off on our first anniversary</p>
                        <button className="mt-8 focus:outline-none px-12 py-3 bg-indigo-700 hover:bg-opacity-80 dark:bg-indigo-600 hover:bg-opacity-80 rounded">
                            <p className="text-xs font-semibold leading-3 text-gray-100">Claim offer</p>
                        </button>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100 text-gray-400 text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
