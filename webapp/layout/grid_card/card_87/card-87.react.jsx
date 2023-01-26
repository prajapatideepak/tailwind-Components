import React, { useState } from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8">
                <div className="max-w-sm shadow">
                    <div className="bg-indigo-500 bg-opacity-10 rounded-tl rounded-tr px-4 sm:px-20 pt-2">
                        <img src="https://i.ibb.co/7yDQCDt/Illustration.png" alt />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-b sm:p-6 p-4">
                        <div className="flex items-center">
                            <div className="pr-5">
                                <p className="w-8 text-sm font-semibold leading-none text-center text-gray-800 dark:text-gray-100">THU</p>
                                <p className="w-7 text-xl font-semibold leading-5 pt-1 text-center text-gray-800 dark:text-gray-100">24</p>
                            </div>
                            <div className="pl-4 border-l border-gray-200">
                                <p className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">Developer Meetup</p>
                                <p className="text-sm leading-4 pt-2 text-gray-500 dark:text-gray-400">Meet world popular developers</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-8">
                            <div className="pr-4">
                                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler text-indigo-700 dark:text-indigo-600 icon-tabler-calendar" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x={4} y={5} width={16} height={16} rx={2} />
                                        <line x1={16} y1={3} x2={16} y2={7} />
                                        <line x1={8} y1={3} x2={8} y2={7} />
                                        <line x1={4} y1={11} x2={20} y2={11} />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">Sat, May 25, 2020</p>
                                <p className="pt-2 text-xs leading-3 text-gray-500 dark:text-gray-400">10:AM to 6:PM</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-5">
                            <div className="pr-4">
                                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler text-indigo-700 dark:text-indigo-600 icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={12} cy={11} r={3} />
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">Central Park</p>
                                <p className="pt-2 text-xs leading-3 text-gray-500 dark:text-gray-400">Manhattan, New york City</p>
                            </div>
                        </div>
                        <div className="pt-8 flex items-center">
                            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center">
                                <img src="https://i.ibb.co/37n3fzs/1.png" alt className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center -ml-2.5">
                                <img src="https://i.ibb.co/nDfs93B/2.png" alt className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center -ml-2.5">
                                <img src="https://i.ibb.co/qFfsngB/3.png" alt className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center -ml-2.5">
                                <img src="https://i.ibb.co/vj2rK3r/4.png" alt className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center -ml-2.5">
                                <img src="https://i.ibb.co/5By9D0H/5.png" alt className="w-8 h-8 rounded-full" />
                            </div>
                            <p className="text-sm font-medium leading-4 pl-2 cursor-pointer text-gray-500 dark:text-gray-400">+42</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
