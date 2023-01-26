import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";

export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 w-full px-5 py-4 rounded shadow-lg bg-white dark:bg-gray-800">
                    <div className="flex items-start justify-between">
                        <p className="text-lg font-bold leading-4 text-gray-800 dark:text-gray-100">Product Sales</p>
                        <p className="text-xs leading-4 text-green-700 text-right">
                            Up 2.3% <br />
                            <span className="dark:text-gray400 text-gray-500">from last week</span>
                        </p>
                    </div>
                    <div className="pt-7">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold leading-3 text-gray-800 dark:text-gray-100">Apple MacBook Pro 2020</p>
                            <p className="text-sm font-semibold leading-none text-right text-gray-800 dark:text-gray-100">$2200</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm leading-3 text-blue-500">(ID 879-10-940)</p>
                            <div>
                                <div className="flex items-center justify-center px-2 py-1 w-full h-full bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">Shipped</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold leading-3 text-gray-800 dark:text-gray-100">MS Surface 2019</p>
                            <p className="text-sm font-semibold leading-none text-right text-gray-800 dark:text-gray-100">$2200</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm leading-3 text-blue-500">(ID 879-10-940)</p>
                            <div>
                                <div className="flex items-center justify-center px-2 py-1 w-full h-full bg-red-100 rounded-full">
                                    <p className="text-xs leading-3 text-red-700">Cancelled</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-7">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold leading-3 text-gray-800 dark:text-gray-100">Iphone 12 Mini</p>
                            <p className="text-sm font-semibold leading-none text-right text-gray-800 dark:text-gray-100">$2200</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm leading-3 text-blue-500">(ID 879-10-940)</p>
                            <div>
                                <div className="flex items-center justify-center px-2 py-1 w-full h-full bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">Shipped</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-7">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold leading-3 text-gray-800 dark:text-gray-100">Google Pixel 5</p>
                            <p className="text-sm font-semibold leading-none text-right text-gray-800 dark:text-gray-100">$2200</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm leading-3 text-blue-500">(ID 879-10-940)</p>
                            <div>
                                <div className="flex items-center justify-center px-2 py-1 w-full h-full bg-yellow-100 rounded-full">
                                    <p className="text-xs leading-3 text-yellow-700">Processing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-7">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold leading-3 text-gray-800 dark:text-gray-100">Apple MacBook Pro 2020</p>
                            <p className="text-sm font-semibold leading-none text-right text-gray-800 dark:text-gray-100">$2200</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-sm leading-3 text-blue-500">(ID 879-10-940)</p>
                            <div>
                                <div className="flex items-center justify-center px-2 py-1 w-full h-full bg-green-100 rounded-full">
                                    <p className="text-xs leading-3 text-green-700">Shipped</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
