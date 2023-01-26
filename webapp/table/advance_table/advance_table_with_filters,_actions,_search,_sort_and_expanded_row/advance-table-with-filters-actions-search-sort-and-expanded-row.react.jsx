import React, { useState } from "react";
const Index = () => {
    const [dropdownStatus, setDropdownStatus] = useState(0);
    return (
        <div className="py-12">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                <div className="flex w-full pl-3 sm:pl-6 pr-3 py-5 items-center justify-between bg-blue-100 rounded-t">
                    <h3 className="text-gray-800 dark:text-gray-100 font-bold text-base sm:text-xl">Jack and Jill Enterprise</h3>
                    <button className="ml-0 sm:ml-6 bg-indigo-700 transition duration-150 ease-in-out focus:outline-none hover:bg-indigo-600 rounded text-white px-5 h-8 flex items-center text-sm">Create New</button>
                </div>
                <div className="flex flex-col md:flex-row p-3 justify-between items-start md:items-stretch w-full">
                    <div className="w-full md:w-1/3 flex flex-col md:flex-row items-start md:items-center">
                        <div className="flex items-center">
                            <a className="p-2 border-gray-200 text-gray-600 dark:text-gray-400 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={7} x2={20} y2={7} />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </a>
                            <a className="text-gray-600 dark:text-gray-400 p-2 ml-2 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-upload" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                    <polyline points="7 9 12 4 17 9" />
                                    <line x1={12} y1={4} x2={12} y2={16} />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row items-start md:items-center justify-end">
                        <div className="flex items-center border-gray-200 border rounded mt-3 md:mt-0">
                            <a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={16} height={16} rx={2} />
                                    <line x1={4} y1={10} x2={20} y2={10} />
                                    <line x1={10} y1={4} x2={10} y2={20} />
                                </svg>
                            </a>
                            <a className="text-indigo-700 p-2 bg-gray-200 border border-transparent rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                            </a>
                            <a className="text-gray-600 dark:text-gray-400 p-2 border-transparent border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-columns" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={16} height={16} rx={2} />
                                    <line x1={12} y1={4} x2={12} y2={20} />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col w-full sm:w-1/2 md:ml-4 mt-3 md:mt-0">
                            <div className="relative w-full">
                                <div className="absolute cursor-pointer text-gray-600 dark:text-gray-400 flex items-center pr-3 right-0 border-l h-full">
                                    <span className="ml-2 mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                                        </svg>
                                    </span>
                                    <span className="text-sm leading-tight tracking-normal">Filter</span>
                                </div>
                                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <label htmlFor="search" className="hidden text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" />
                                <input id="search" className="w-full bg-transparent dark:bg-gray-800 text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal pl-8 pr-24 h-10 flex items-center text-sm border-gray-300 dark:border-gray-200 rounded border" placeholder="Search by project name or owner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-200" id="main-table">
                        <thead>
                            <tr className="w-full bg-gray-100 border-b border-gray-300 dark:border-gray-200">
                                <th className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="checkAll(this)" />
                                        <div className="opacity-0 cursor-defaut ml-4 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                        </div>
                                    </div>
                                </th>
                                <th
                                    className="whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onClick={() => {
                                        dropdownStatus == 0 ? setDropdownStatus(8) : setDropdownStatus(0);
                                    }}
                                >
                                    <div className="flex items-center justify-between relative chuss-div">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Project</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus == 8 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus == 0 ? setDropdownStatus(9) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Type</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus == 9 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus == 0 ? setDropdownStatus(10) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Status</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus == 10 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus == 0 ? setDropdownStatus(11) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Priority</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus == 11 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus == 0 ? setDropdownStatus(12) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Owner</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus == 12 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus == 0 ? setDropdownStatus(13) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative ">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Created on</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                        {dropdownStatus == 13 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus == 0 ? setDropdownStatus(14) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative ">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Due on</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus == 14 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th className="border-l border-gray-300 dark:border-gray-200 pl-4 pr-12 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Actions</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300 dark:border-gray-200">
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <a
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(1) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            href="javascript: void(0)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Software Develop…</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Development</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <div className="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-blue-500 font-normal">Assigned</span>
                                    </div>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">High</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                    <div class="relative">
                                        <div
                                            class="relative z-0 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-200 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded bg-transparent"
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(15) : setDropdownStatus(0);
                                            }}
                                        >
                                            <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                            <div class="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        {dropdownStatus == 15 && (
                                            <ul class="z-10 bg-white dark:bg-gray-800 transition duration-300 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus == 1 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">Software Development Project</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">Saul Berenson &amp; Nicholas Brody</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            <tr className="border-b border-gray-300 dark:border-gray-200">
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <a
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(2) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            href="javascript: void(0)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jade's website</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Design</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <div className="bg-red-200 h-6 w-20 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-red-500 font-normal">Pending</span>
                                    </div>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Medium</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                    <div class="relative">
                                        <div
                                            class="relative z-0 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-200 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded bg-transparent"
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(16) : setDropdownStatus(0);
                                            }}
                                        >
                                            <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                            <div class="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        {dropdownStatus == 16 && (
                                            <ul class="z-10 bg-white dark:bg-gray-800 transition duration-300 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus == 2 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">Software Development Project</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">Saul Berenson &amp; Nicholas Brody</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            <tr className="border-b border-gray-300 dark:border-gray-200">
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <a
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(3) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            href="javascript: void(0)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing Visuals</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <div className="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-blue-500 font-normal">Assigned</span>
                                    </div>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Low</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                    <div class="relative">
                                        <div
                                            class="relative z-0 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-200 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded bg-transparent"
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(17) : setDropdownStatus(0);
                                            }}
                                        >
                                            <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                            <div class="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        {dropdownStatus == 17 && (
                                            <ul class="z-10 bg-white dark:bg-gray-800 transition duration-300 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus == 3 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">Software Development Project</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">Saul Berenson &amp; Nicholas Brody</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            <tr className="border-b border-gray-300 dark:border-gray-200">
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <a
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(4) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            href="javascript: void(0)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jade's website</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Design</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <div className="bg-red-200 h-6 w-20 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-red-500 font-normal">Pending</span>
                                    </div>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Medium</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                    <div class="relative">
                                        <div
                                            class="relative z-0 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-200 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded bg-transparent"
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(18) : setDropdownStatus(0);
                                            }}
                                        >
                                            <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                            <div class="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        {dropdownStatus == 18 && (
                                            <ul class="z-10 bg-white dark:bg-gray-800 transition duration-300 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus == 4 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">Software Development Project</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">Saul Berenson &amp; Nicholas Brody</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            <tr className="border-b border-gray-300 dark:border-gray-200">
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <a
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(5) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            href="javascript: void(0)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing Visuals</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <div className="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-blue-500 font-normal">Assigned</span>
                                    </div>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Low</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                    <div class="relative">
                                        <div
                                            class="relative z-0 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-200 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded bg-transparent"
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(19) : setDropdownStatus(0);
                                            }}
                                        >
                                            <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                            <div class="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        {dropdownStatus == 19 && (
                                            <ul class="z-10 bg-white dark:bg-gray-800 transition duration-300 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus == 5 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">Software Development Project</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">Saul Berenson &amp; Nicholas Brody</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            <tr className="border-b border-gray-300 dark:border-gray-200 ">
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <a
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(6) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            href="javascript: void(0)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jade's website</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Design</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <div className="bg-red-200 h-6 w-20 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-red-500 font-normal">Pending</span>
                                    </div>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Medium</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                    <div class="relative">
                                        <div
                                            class="relative z-0 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-200 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded bg-transparent"
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(20) : setDropdownStatus(0);
                                            }}
                                        >
                                            <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                            <div class="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        {dropdownStatus == 20 && (
                                            <ul class="z-10 bg-white dark:bg-gray-800 transition duration-300 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus == 6 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">Software Development Project</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">Saul Berenson &amp; Nicholas Brody</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <a
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(7) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            href="javascript: void(0)"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing Visuals</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Marketing</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <div className="bg-blue-200 h-6 w-20 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-blue-500 font-normal">Assigned</span>
                                    </div>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Low</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Jason Smith</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">6/28/2020</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">9/28/2020</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-32">
                                    <div class="relative">
                                        <div
                                            class="relative z-0 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-200 w-full cursor-pointer text-xs form-select block py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded bg-transparent"
                                            onClick={() => {
                                                dropdownStatus == 0 ? setDropdownStatus(21) : setDropdownStatus(0);
                                            }}
                                        >
                                            <p class="leading-3 tracking-normal font-normal">Edit Project</p>
                                            <div class="cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                        {dropdownStatus == 21 && (
                                            <ul class="z-10 bg-white dark:bg-gray-800 transition duration-300 bg-white dark:bg-gray-800 shadow rounded mt-2 w-48 py-1 absolute">
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Edit Project</li>
                                                <li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Project</li>
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus == 7 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <a className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" href="javascript: void(0)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">Software Development Project</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Owner</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Jason Smith</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Type</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Development</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Time Spent</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">1440 Hours, 45 Mins</h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Project</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">Create new features for the app</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Priority</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">High</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Incharge officer(s)</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">Saul Berenson &amp; Nicholas Brody</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-gray-600 dark:text-gray-400 text-xs mb-2 font-bold">Message</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Recommended Action</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mx-auto container pt-8 flex justify-center sm:justify-end items-center">
                <a className="text-gray-600 dark:text-gray-400 mr-5 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </a>
                <p className="text-gray-800 dark:text-gray-100 fot-normal text-xs">Page</p>
                <label htmlFor="selectedPage" className="hidden" />
                <input id="selectedPage" type="text" className="bg-white dark:bg-gray-800 w-6 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 dark:border-gray-200 rounded border" defaultValue={4} />
                <p className="text-gray-800 dark:text-gray-100 fot-normal text-xs">of 20</p>
                <a className="text-gray-600 dark:text-gray-400 mx-5 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </a>
                <label htmlFor="selectedPage1" className="hidden" />
                <input id="selectedPage1" type="text" className="bg-white dark:bg-gray-800 w-8 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 dark:border-gray-200 rounded border" defaultValue={30} />
                <p className="-mt-1 text-gray-800 dark:text-gray-100 fot-normal text-xs">per page</p>
            </div>
        </div>
    );
};
export default Index;
