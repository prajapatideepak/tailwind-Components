import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                <div className="bg-white max-w-sm  dark:bg-gray-800 shadow rounded py-6 px-6">
                    <div className="flex items-center">
                        <div className="flex items-end">
                            <p className="sm:text-4xl text-3xl font-semibold leading-8 text-gray-800 dark:text-gray-100">60%</p>
                            <p className="text-base font-medium leading-none text-gray-500 dark:text-gray-400 ml-2">Complete</p>
                        </div>
                        <div className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center ml-24">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M21 2.992V21.008C20.9979 21.2706 20.8926 21.5219 20.7068 21.7075C20.521 21.8931 20.2696 21.9982 20.007 22H3.993C3.72981 22 3.47739 21.8955 3.2912 21.7095C3.105 21.5235 3.00027 21.2712 3 21.008V2.992C3.00209 2.72938 3.10742 2.47813 3.29322 2.29251C3.47902 2.1069 3.73038 2.00183 3.993 2H20.007C20.555 2 21 2.444 21 2.992ZM19 4H5V20H19V4ZM11.293 13.121L15.536 8.879L16.95 10.293L11.293 15.95L7.403 12.06L8.818 10.646L11.293 13.121Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-12">
                        <div>
                            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Complete</p>
                            <div className="flex items-center justify-between">
                                <p className="text-base leading-tight mt-1 text-gray-800 dark:text-gray-100">690</p>
                                <p className="text-base font-semibold leading-3 text-gray-800 dark:text-gray-100">60%</p>
                            </div>
                            <div className="w-72 h-1 mt-2 bg-gray-200 rounded-full">
                                <div className="w-60 h-1 bg-green-500 rounded-full" />
                            </div>
                        </div>
                        <div className="mt-7">
                            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Pending</p>
                            <div className="flex items-center justify-between">
                                <p className="text-base leading-tight mt-1 text-gray-800 dark:text-gray-100">840</p>
                                <p className="text-base font-semibold leading-3 text-gray-800 dark:text-gray-100">40%</p>
                            </div>
                            <div className="w-72 h-1 mt-2 bg-gray-200 rounded-full">
                                <div className="w-44 h-1 bg-yellow-500 rounded-full" />
                            </div>
                        </div>
                        <div className="mt-7">
                            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Spendings</p>
                            <div className="flex items-center justify-between">
                                <p className="text-base leading-tight mt-1 text-gray-800 dark:text-gray-100">$34.840</p>
                                <p className="text-base font-semibold leading-3 text-gray-800 dark:text-gray-100">74%</p>
                            </div>
                            <div className="w-72 h-1 mt-2 bg-gray-200 rounded-full">
                                <div className="w-60 h-1 bg-indigo-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
