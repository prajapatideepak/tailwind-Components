import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative w-80 rounded shadow-lg px-6 pt-12 pb-6 dark:bg-gray-800 bg-white">
                    <div className="flex items-center justify-center flex-col">
                        <img src="https://i.ibb.co/mH1rpYd/perspaleta1-0002.png" />
                        <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100 mt-10">Email Recieved</p>
                        <p className="text-sm leading-tight text-center text-gray-600 dark:text-gray-300 mt-4">We really appreciate your concerns and reaching out to us. We will try our best to answer all your questions as soon as possible!</p>
                        <button className="py-3 px-16 mt-8 bg-indigo-700 dark:bg-indigo-600 rounded focus:outline-none hover:bg-opacity-80 text-xs font-semibold leading-3 text-gray-100">Great</button>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 m-3 dark:text-gray-100 text-gray-400 text-gray-600 transition duration-150 ease-in-out">
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
