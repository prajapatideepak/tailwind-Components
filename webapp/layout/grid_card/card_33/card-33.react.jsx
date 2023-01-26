import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                <div className="max-w-7xl py-6 px-8  bg-white dark:bg-gray-800">
                    <div className="sm:flex items-center justify-between">
                        <div className=" sm:mb-0 mb-4 flex items-center">
                            <img alt="profile" src="https://images.unsplash.com/photo-1518725522904-4b3939358342?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-8 h-8 rounded object-cover object-center" />
                            <p className="text-xl pl-4 font-semibold leading-5 text-gray-800 dark:text-gray-100">Antonin Hafer</p>
                        </div>
                        <p className="text-xs font-medium leading-3 text-gray-800 dark:text-gray-400">ID: 1421412P - 24SGE2 - 876TBJK</p>
                    </div>
                    <div className="sm:flex items-center justify-between w-full sm:px-24 pt-6">
                        <div className="sm:block flex w-full items-center">
                            <div className="sm:w-full w-2 sm:h-2 h-64 bg-gray-100 flex sm:flex-row flex-col items-center justify-between">
                                <div className="w-4 h-4 bg-gray-800 dark:bg-gray-100 rounded flex items-center justify-center">
                                    <svg className="text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                                <div className="w-4 h-4 bg-gray-800 dark:bg-gray-100 rounded flex items-center justify-center  md:ml-8 lg:ml-20">
                                    <svg className="text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                                <div className="w-4 h-4 bg-indigo-700 rounded flex items-center justify-center  md:ml-8 lg:ml-20" />
                                <div className="w-4 h-4 bg-gray-500 dark:bg-gray-400 rounded flex items-center justify-center  md:ml-8 lg:ml-20"></div>
                            </div>
                            <div className="flex flex-col sm:hidden items-center justify-between h-64 pl-5">
                                <div className="flex flex-col items-start">
                                    <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Being processed</p>
                                    <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Order is accepted</p>
                                    <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-sm font-medium leading-4 text-indigo-700">Ready for delivery</p>
                                    <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-sm font-medium leading-4 text-gray-500 dark:text-gray-400">Delivered</p>
                                    <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="pt-4 px-12 sm:block hidden">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Being&nbsp;processed</p>
                                <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25&nbsp;AM</p>
                            </div>
                            <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
                                <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Order&nbsp;is&nbsp;accepted</p>
                                <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25&nbsp;AM</p>
                            </div>
                            <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
                                <p className="text-sm font-medium leading-4 text-indigo-700">Ready&nbsp;for&nbsp;delivery</p>
                                <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25&nbsp;AM</p>
                            </div>
                            <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
                                <p className="text-sm font-medium leading-4 text-gray-500 dark:text-gray-400">Delivered</p>
                                <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May&nbsp;14,&nbsp;2019 - 8:25&nbsp;AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
