import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative w-80 rounded shadow-lg pt-4 pb-6 px-6 dark:bg-gray-800 bg-white">
                    <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co/V2hXxNH/untitled-1.png" />
                        <p className="text-2xl font-bold leading-normal text-gray-800 dark:text-gray-100 mt-4 mb-2">Thank You!</p>
                        <p className="text-lg font-semibold leading-5 text-gray-600 dark:text-gray-300">for signing up to our newsletter</p>
                        <p className="mt-4 text-sm leading-5 text-center text-gray-600 dark:text-gray-300">We would like to give you some content for free for your trust in us. We hope you like it!</p>
                        <button className="py-3 px-6 bg-indigo-700 dark:bg-indigo-600 focus:outline-none hover:bg-opacity-80 mt-6 rounded text-xs font-semibold leading-3 text-gray-100">Download content</button>
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
