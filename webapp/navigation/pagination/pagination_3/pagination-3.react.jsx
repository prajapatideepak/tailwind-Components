import React from "react";

export default function index() {
    return (
        <>
            <div className="mx-auto container">
                <div className="flex justify-center items-center py-14">
                    <div className="h-8 border flex justify-between">
                        <div className="flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-gray-400 flex justify-center items-center p-2 border-r">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12L6 8L10 4" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center md:mx-14 lg:mx-20 mx-10 items-center flex-row space-x-2.5 text-sm font-medium leading-none text-gray-600">
                            <div className="hidden md:block">
                                <p>...</p>
                            </div>
                            <div className="md:hidden">
                                <p>1</p>
                            </div>
                            <div>
                                <p className="hover:text-white hover:bg-indigo-700 cursor-pointer p-1.5 text-center rounded">2</p>
                            </div>
                            <div>
                                <p className="text-white bg-indigo-700 p-1.5 cursor-pointer text-center rounded">3</p>
                            </div>
                            <div>
                                <p className="hover:text-white hover:bg-indigo-700 cursor-pointer p-1.5 text-center rounded">4</p>
                            </div>
                            <div>
                                <p className="hover:text-white hover:bg-indigo-700 cursor-pointer p-1.5 text-center rounded">5</p>
                            </div>
                            <div className="hidden md:block">
                                <p className="hover:text-white hover:bg-indigo-700 cursor-pointer p-1.5 text-center rounded">6</p>
                            </div>
                            <div className="hidden md:block">
                                <p className="hover:text-white hover:bg-indigo-700 cursor-pointer p-1.5 text-center rounded">7</p>
                            </div>
                            <div className="hidden md:block">
                                <p className="hover:text-white hover:bg-indigo-700 cursor-pointer p-1.5 text-center rounded">8</p>
                            </div>
                            <div className="hidden md:block">
                                <p>...</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-gray-400 flex justify-center items-center p-2 border-l">
                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 4L10 8L6 12" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
