import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="py-12">
                <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                    <div className="flex flex-col lg:flex-row p-8 justify-between items-start lg:items-stretch w-full">
                        <div className="w-full lg:w-1/4 xl:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                            <div className="w-full relative mb-2 lg:mb-0 lg:mr-4">
                                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <label htmlFor="search" className="hidden" />
                                <input id="search" className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 dark:border-gray-200 rounded border" placeholder="Search" />
                            </div>
                        </div>
                        <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-between">
                            <div className="relative w-full lg:w-1/4 my-2 lg:my-0 lg:mx-2 xl:mx-4 z-10">
                                <div className="absolute z-0 inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                                <select aria-label="Selected tab" className="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                    <option selected className="text-sm text-gray-600 dark:text-gray-400">
                                        Representatives
                                    </option>
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                </select>
                            </div>
                            <div className="relative w-full lg:w-1/4 my-2 lg:my-0 lg:mx-2 xl:mx-4 z-10">
                                <div className="z-0 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                                <select aria-label="Selected tab" className="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 dark:border-gray-200 rounded text-gray-600  dark:text-gray-400  appearance-none bg-transparent">
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                    <option selected className="text-sm text-gray-600 dark:text-gray-400">
                                        Status Reports
                                    </option>
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                    <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                                </select>
                            </div>
                            <div className="relative w-full lg:w-1/4 my-2 lg:my-0 cursor-pointer lg:mx-2 xl:mx-4 z-0 border focus:border-gray-800 border-gray-300 dark:border-gray-200 rounded p-2">
                                <div className="z-0 w-10 px-2 absolute inset-0 m-auto z-0 border-l mr-0 flex items-center text-indigo-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-calendar-event" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={4} y={5} width={16} height={16} rx={2} />
                                        <line x1={16} y1={3} x2={16} y2={7} />
                                        <line x1={8} y1={3} x2={8} y2={7} />
                                        <line x1={4} y1={11} x2={20} y2={11} />
                                        <rect x={8} y={15} width={2} height={2} />
                                    </svg>
                                    <input type="date" className="absolute right-0 z-10 opacity-0 cursor-pointer" />
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Schedule Dates</p>
                            </div>
                            <button className="focus:shadow-outline-gray border border-transparent w-auto lg:w-1/4 my-2 lg:my-0 lg:ml-2 xl:ml-4 bg-indigo-700 transition focus:outline-none focus:border-gray-800 focus:shadow-outline-gray duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm">Add Schedule</button>
                        </div>
                    </div>
                    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                        <table className="min-w-full bg-white dark:bg-gray-800 rounded">
                            <thead>
                                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                                    <th className="pl-8 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Date</th>
                                    <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Time</th>
                                    <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Status</th>
                                    <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Client</th>
                                    <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Phone Number</th>
                                    <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Representative</th>
                                    <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">Action</th>
                                    <td className="pr-8">
                                        <button className="w-32 opacity-0 bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm cursor-default">Start Session</button>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-24 border-gray-300  border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-indigo-200 text-indigo-700 rounded-full text-sm leading-3 py-2 px-5">New</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm">Start Session</button>
                                    </td>
                                </tr>
                                <tr className="h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-yellow-200 text-yellow-600 rounded-full text-sm leading-3 py-2 px-5">Reg.</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm">Start Session</button>
                                    </td>
                                </tr>
                                <tr className="opacity-50 h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-indigo-200 text-indigo-700 rounded-full text-sm leading-3 py-2 px-5">New</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="cursor-not-allowed bg-gray-200 transition duration-150 ease-in-out rounded text-gray-600 dark:text-gray-400 px-5 py-1 text-sm focus:outline-none">Cancelled</button>
                                    </td>
                                </tr>
                                <tr className="h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-transparent text-gray-800 dark:text-gray-100 border border-gray-300 rounded-full text-sm leading-3 py-2 px-5">N/A</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm">Start Session</button>
                                    </td>
                                </tr>
                                <tr className="opacity-50 h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-indigo-200 text-indigo-700 rounded-full text-sm leading-3 py-2 px-5">New</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="cursor-not-allowed bg-gray-200 transition duration-150 ease-in-out rounded text-gray-600 dark:text-gray-400 px-5 py-1 text-sm focus:outline-none">Cancelled</button>
                                    </td>
                                </tr>
                                <tr className="h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-indigo-200 text-indigo-700 rounded-full text-sm leading-3 py-2 px-5">New</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm">Start Session</button>
                                    </td>
                                </tr>
                                <tr className="h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-yellow-200 text-yellow-600 rounded-full text-sm leading-3 py-2 px-5">Reg.</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm">Start Session</button>
                                    </td>
                                </tr>
                                <tr className="h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-indigo-200 text-indigo-700 rounded-full text-sm leading-3 py-2 px-5">New</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm">Start Session</button>
                                    </td>
                                </tr>
                                <tr className="h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-transparent text-gray-800 dark:text-gray-100 border border-gray-300 rounded-full text-sm leading-3 py-2 px-5">N/A</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm">Start Session</button>
                                    </td>
                                </tr>
                                <tr className="opacity-50 h-24 border-gray-300 border-b border-t hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">06/02/2020</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">9:00 am</td>
                                    <td className="pr-6">
                                        <div className="w-full flex justify-start items-center h-full">
                                            <div className="bg-indigo-200 text-indigo-700 rounded-full text-sm leading-3 py-2 px-5">New</div>
                                        </div>
                                    </td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Saun Berenson</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">300-300-232-232</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dr. Ralp Kimmerman</td>
                                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                        <div className="flex items-center">
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                        <line x1={16} y1={5} x2={19} y2={8} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="mx-2 rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-indigo-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                                <div className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={4} y1={7} x2={20} y2={7} />
                                                        <line x1={10} y1={11} x2={10} y2={17} />
                                                        <line x1={14} y1={11} x2={14} y2={17} />
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="pr-8 text-right">
                                        <button className="cursor-not-allowed bg-gray-200 transition duration-150 ease-in-out rounded text-gray-600 dark:text-gray-400 px-5 py-1 text-sm focus:outline-none">Cancelled</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mx-auto container pt-8 flex justify-center sm:justify-end items-center">
                    <a className="mr-2 sm:mr-5 rounded border border-transparent focus:outline-none focus:border-gray-800 text-gray-600 focus:shadow-outline-gray" href="javascript: void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left text-gray-800 dark:text-gray-100" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </a>
                    <p className="text-gray-800 dark:text-gray-100 fot-normal text-base">Page</p>
                    <label htmlFor="selectedPage" className="hidden" />
                    <input id="selectedPage" type="text" className="bg-white dark:bg-gray-800 w-8 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:shadow-outline-gray focus:border focus:border-indigo-700 font-normal flex items-center text-base border-gray-300 rounded border" defaultValue={4} />
                    <p className="text-gray-800 dark:text-gray-100 fot-normal text-base">of 20</p>
                    <a className="mx-2 sm:mx-5 rounded border border-transparent focus:outline-none focus:border-gray-800 text-gray-600 focus:shadow-outline-gray" href="javascript: void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </a>
                    <label htmlFor="totalPage" className="hidden" />
                    <input id="totalPage" type="text" className="bg-white dark:bg-gray-800 w-10 px-2 mr-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:shadow-outline-gray focus:border focus:border-indigo-700 font-normal flex items-center text-base border-gray-300 rounded border" defaultValue={30} />
                    <p className="-mt-1 text-gray-800 dark:text-gray-100 fot-normal text-base">per page</p>
                </div>
            </div>
        </>
    );
}
