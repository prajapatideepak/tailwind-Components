import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative w-96 rounded">
                    <div className="bg-indigo-700 dark:bg-indigo-600 rounded-tl pt-6 pb-7 rounded-tr px-4">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/FW5K7M1/Ellipse-1.png" />
                                <div className="ml-3">
                                    <p className="text-lg font-bold leading-none text-gray-100">Kelly Kapoor</p>
                                    <p className="text-xs font-medium leading-3 text-gray-100 mt-2">Customer Support</p>
                                </div>
                            </div>
                            <p className="text-sm leading-5 text-gray-100 mt-4">hey everyone, don’t hesitate to ask any questions on your mind. We’re here to help!</p>
                        </div>
                    </div>
                    <div className="py-4 bg-white dark:bg-gray-800 px-4 rounded-bl rounded-br">
                        <div className="flex items-center justify-between">
                            <input placeholder="Type your message..." className="text-sm font-medium leading-none text-gray-500 focus:outline-none dark:text-gray-400 bg-white dark:bg-gray-800" />
                            <button onclick="modalHandler()" className="text-sm font-bold leading-none text-indigo-700 focus:outline-none dark:text-gray-100">
                                Send
                            </button>
                        </div>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 m-3 text-white transition duration-150 ease-in-out">
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
