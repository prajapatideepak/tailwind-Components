import { useState } from "react";

const Index = (props) => {
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    return (
        <div>
            <div className="mx-auto container py-20 px-6">
                <ul>
                    <li className="flex items-center mb-6">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                    <li className="flex items-center mb-6">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                    <li className="flex items-center mb-6">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                    <li className="flex items-center">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                </ul>
                <div className="mt-16 flex relative items-center justify-between text-gray-700">
                    <h3 className="text-3xl text-gray-900 dark:text-gray-100 font-semibold">Design Research</h3>
                    <div className="relative">
                        <svg onClick={() => setshow(!show)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler text-gray-900 dark:text-gray-100 icon-tabler-dots dropbtn" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={5} cy={12} r={1} />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                        </svg>
                    </div>
                    {show && (
                        <div className="dropdown-content mt-8 absolute right-0 mt-36 shadow-md z-10  w-32">
                            <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li className="cursor-pointer text-gray-600 dark:text-gray-100 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-100 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-100 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                            </ul>
                        </div>
                    )}
                </div>
                <hr className="mb-8 mt-6 border-t border-gray-300 dark:border-gray-700" />
                <ul>
                    <li className="flex items-center mb-6">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                    <li className="flex items-center mb-6">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                    <li className="flex items-center">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                </ul>
                <div className="mt-16 flex relative items-center justify-between text-gray-700">
                    <h3 className="text-3xl text-gray-900 dark:text-gray-100 font-semibold">Prototyping</h3>
                    <div className="relative">
                        <svg onClick={() => setshow1(!show1)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon text-gray-900 dark:text-gray-100 icon-tabler icon-tabler-dots dropbtn" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={5} cy={12} r={1} />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                        </svg>
                    </div>
                    {show1 && (
                        <div className="dropdown-content mt-8 absolute right-0 mt-36 shadow-md z-10 w-32">
                            <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                <li className="cursor-pointer text-gray-600 dark:text-gray-100 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-100 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-100 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                            </ul>
                        </div>
                    )}
                </div>
                <hr className="mb-8 mt-6 border-t border-gray-300 dark:border-gray-700" />
                <ul>
                    <li className="flex items-center mb-6">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                    <li className="flex items-center mb-6">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                    <li className="flex items-center">
                        <div className="mr-2 bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon bg-yellow-400 text-white rounded-sm hidden">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-100">Get my car washed</p>
                    </li>
                </ul>
            </div>

            <style>
                {`
                    .checkbox:checked + .check-icon {
                        display: flex;
                    }
                    `}
            </style>
        </div>
    );
};
export default Index;
