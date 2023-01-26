import React, { useState } from "react";
export default function IndexPage() {
    const [show, setShow] = useState(null);
    const [menu, setMenu] = useState(null);
    return (
        <>
            <div className="mx-auto container py-12 px-6">
                <div className="">
                    <div className="flex pt-6 items-center">
                        <div className="cursor-pointer">
                            {show == 0 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(null)} aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(0)} aria-label="Hide" className=" icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                            )}
                        </div>
                        <h1 className="text-lg text-gray-900 dark:text-gray-100 font-semibold ml-3">Overdue</h1>
                    </div>
                    {show == 0 && (
                        <ul className="pt-6">
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-red-500  mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3 relative">
                                            {menu === 1 && (
                                                <div className="dropdown-content mt-8 absolute left-0 -ml-20 shadow-md z-10  w-32">
                                                    <ul className="bg-white shadow rounded py-1">
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                    </ul>
                                                </div>
                                            )}
                                            <svg
                                                onClick={() => {
                                                    menu === 1 ? setMenu(null) : setMenu(1);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="cursor-pointer icon icon-tabler icon-tabler-dots dropbtn"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr className="my-5 border-t border-gray-300 dark:border-gray-200" />
                            </li>
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-red-500  mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3 relative">
                                            {menu === 2 && (
                                                <div className="dropdown-content mt-8 absolute left-0 -ml-20 shadow-md z-10  w-32">
                                                    <ul className="bg-white shadow rounded py-1">
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                    </ul>
                                                </div>
                                            )}
                                            <svg
                                                onClick={() => {
                                                    menu === 2 ? setMenu(null) : setMenu(2);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="cursor-pointer icon icon-tabler icon-tabler-dots dropbtn"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr className="my-5 border-t border-gray-300 dark:border-gray-200" />
                            </li>
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-red-500  mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3 relative">
                                            {menu === 3 && (
                                                <div className="dropdown-content mt-8 absolute left-0 -ml-20 shadow-md z-10  w-32">
                                                    <ul className="bg-white shadow rounded py-1">
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                    </ul>
                                                </div>
                                            )}
                                            <svg
                                                onClick={() => {
                                                    menu === 3 ? setMenu(null) : setMenu(3);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="cursor-pointer icon icon-tabler icon-tabler-dots dropbtn"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
                <hr className="mt-6 border-t border-gray-300 dark:border-gray-200" />
                <div>
                    <div className="flex pt-6 items-center">
                        <div className="cursor-pointer">
                            {show == 1 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(null)} aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShow(1)} aria-label="Hide" className=" icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                            )}
                        </div>
                        <h1 className="text-lg text-gray-900 dark:text-gray-100 font-semibold ml-3">Urgent</h1>
                    </div>
                    {show == 1 && (
                        <ul className="pt-6">
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-yellow-600  mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3 relative">
                                            {menu === 4 && (
                                                <div className="dropdown-content mt-8 absolute left-0 -ml-20 shadow-md z-10  w-32">
                                                    <ul className="bg-white shadow rounded py-1">
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                    </ul>
                                                </div>
                                            )}
                                            <svg
                                                onClick={() => {
                                                    menu === 4 ? setMenu(null) : setMenu(4);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="cursor-pointer icon icon-tabler icon-tabler-dots dropbtn"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr className="my-5 border-t border-gray-300 dark:border-gray-200" />
                            </li>
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-yellow-600  mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3 relative">
                                            {menu === 5 && (
                                                <div className="dropdown-content mt-8 absolute left-0 -ml-20 shadow-md z-10  w-32">
                                                    <ul className="bg-white shadow rounded py-1">
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                    </ul>
                                                </div>
                                            )}
                                            <svg
                                                onClick={() => {
                                                    menu === 5 ? setMenu(null) : setMenu(5);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="cursor-pointer icon icon-tabler icon-tabler-dots dropbtn"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr className="my-5 border-t border-gray-300 dark:border-gray-200" />
                            </li>
                            <li className="md:flex justify-between items-center">
                                <div className="flex items-center text-gray-400 w-full md:w-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                    </svg>
                                    <div className="mx-4 bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-semibold">Welcome to Quicklist!</p>
                                </div>
                                <div className="md:flex items-center md:w-1/2 w-full justify-end text-gray-700">
                                    <p className="text-yellow-600  mt-4 md:mt-0 mr-10">Due today at 18:00</p>
                                    <div className="mt-4 md:mt-0 flex items-center">
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                                <circle cx={9} cy={9} r={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                                <line x1={16} y1={3} x2={16} y2={7} />
                                                <line x1={8} y1={3} x2={8} y2={7} />
                                                <line x1={4} y1={11} x2={20} y2={11} />
                                                <rect x={8} y={15} width={2} height={2} />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={9} cy={7} r={4} />
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                <path d="M16 11h6m-3 -3v6" />
                                            </svg>
                                        </div>
                                        <div className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                                <line x1={10} y1={12} x2={14} y2={12} />
                                            </svg>
                                        </div>
                                        <div className="mr-3 relative">
                                            {menu === 6 && (
                                                <div className="dropdown-content mt-8 absolute left-0 -ml-20 shadow-md z-10  w-32">
                                                    <ul className="bg-white shadow rounded py-1">
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                    </ul>
                                                </div>
                                            )}
                                            <svg
                                                onClick={() => {
                                                    menu === 6 ? setMenu(null) : setMenu(6);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="cursor-pointer icon icon-tabler icon-tabler-dots dropbtn"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
                <hr className="mt-6 border-t border-gray-300 dark:border-gray-200" />
                <style>
                    {`
                    .checkbox:checked+.check-icon {
                        display: flex;
                    }
                    `}
                </style>
            </div>
        </>
    );
}
