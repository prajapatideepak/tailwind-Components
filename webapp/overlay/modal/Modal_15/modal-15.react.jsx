import React from "react";
export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative w-80 sm:w-96 bg-white dark:bg-gray-800 p-6 rounded">
                    <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-50">Recent Stories</p>
                    <p className="w-full md:w-10/12 text-base font-medium leading-normal text-gray-600 dark:text-gray-300 pt-4 pb-6">See what your friends are sharing, Let them know you’re interested.</p>
                    <div className="flex items-center justify-between">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-indigo-700 flex items-center justify-center p-1">
                            <img src="https://i.ibb.co/H24jspQ/Ellipse-2.png" />
                        </div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-indigo-700 flex items-center justify-center p-1">
                            <img src="https://i.ibb.co/kxrmfCX/Ellipse-3.png" />
                        </div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-indigo-700 flex items-center justify-center p-1">
                            <img src="https://i.ibb.co/PzbFXsX/Ellipse-4.png" />
                        </div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-500 flex items-center justify-center p-1">
                            <img src="https://i.ibb.co/Cmyq8qW/Ellipse-5.png" />
                        </div>
                    </div>
                    <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-white transition duration-150 ease-in-out">
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
