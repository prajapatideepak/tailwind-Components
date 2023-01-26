import React from "react";
export default function Index() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded shadow-lg py-4 px-5 bg-white w-full dark:bg-gray-800">
                    <h2 className="text-xs leading-3 text-gray-600 dark:text-gray-100">Wednesday</h2>
                    <h1 className="text-sm font-bold leading-3 pt-1 dark:text-gray-100 text-gray-800">12 January 2021</h1>
                    <div className="pt-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-1 h-4 bg-purple-500 bg-opacity-50 rounded-md" />
                                <p className="opacity-50 text-xs leading-3 dark:text-gray-100 text-gray-800 pl-2">Make payment for spotify</p>
                            </div>
                            <div className="flex items-center">
                                <p className="opacity-50 text-xs leading-3 text-right text-gray-600 dark:text-gray-100 pr-2">09:30 AM</p>
                                <div className="bg-white border rounded-sm border-gray-400 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input defaultChecked type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3">
                            <div className="flex items-center">
                                <div className="w-1 h-4 bg-pink-500  rounded-md" />
                                <p className="text-xs leading-3 dark:text-gray-100 text-gray-800 pl-2">Pick up the kids</p>
                            </div>
                            <div className="flex items-center">
                                <p className=" text-xs leading-3 text-right text-gray-600 dark:text-gray-100 pr-2">12:30 AM</p>
                                <div className="bg-white border rounded-sm border-gray-400 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3">
                            <div className="flex items-center">
                                <div className="w-1 h-4 bg-blue-500  rounded-md" />
                                <p className="text-xs leading-3 dark:text-gray-100 text-gray-800 pl-2">Grocery Shopping</p>
                            </div>
                            <div className="flex items-center">
                                <p className=" text-xs leading-3 text-right text-gray-600 dark:text-gray-100 pr-2">1:30 PM</p>
                                <div className="bg-white border rounded-sm border-gray-400 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3">
                            <div className="flex items-center">
                                <div className="w-1 h-4 bg-yellow-500  rounded-md" />
                                <p className="text-xs leading-3 dark:text-gray-100 text-gray-800 pl-2">Call Micheal</p>
                            </div>
                            <div className="flex items-center">
                                <p className=" text-xs leading-3 text-right text-gray-600 dark:text-gray-100 pr-2">4:30 PM</p>
                                <div className="bg-white border rounded-sm border-gray-400 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-3">
                            <div className="flex items-center">
                                <div className="w-1 h-4 bg-red-500  rounded-md" />
                                <p className="text-xs leading-3 dark:text-gray-100 text-gray-800 pl-2">Pick up dinner</p>
                            </div>
                            <div className="flex items-center">
                                <p className=" text-xs leading-3 text-right text-gray-600 dark:text-gray-100 pr-2">8:30 PM</p>
                                <div className="bg-white border rounded-sm border-gray-400 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                 .checkbox:checked + .check-icon {
                    display: flex;
                }
                 `}
            </style>
        </>
    );
}
