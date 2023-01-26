import React, { useEffect } from "react";

export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center px-4 py-8">
                <div className="bg-white dark:bg-gray-800 md:w-96 w-full rounded px-5 pt-4 pb-8 shadow">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-bold leading-5 text-gray-800 dark:text-gray-100">Customer Tickets</p>
                        <p className="text-xs leading-3 text-right text-red-500">2.3% increase</p>
                    </div>
                    <div className="flex items-end justify-between mt-6">
                        <div>
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Madisen</p>
                            <div className="flex items-center text-xs leading-4  text-gray-500 dark:text-gray-400 mt-1.5">
                                <p>2hrs ago</p>
                                <div className="w-1 h-1 bg-gray-200 mx-3 rounded-full" />
                                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">ID-12-570</p>
                            </div>
                        </div>
                        <button className="dark:bg-gray-700 bg-gray-100 rounded py-2 px-2 hover:bg-gray-200">
                            <p className="text-xs leading-3 dark:text-gray-100 text-indigo-700">Resolve</p>
                        </button>
                    </div>
                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Tillman</p>
                            <div className="flex items-center text-xs leading-4  text-gray-500 dark:text-gray-400 mt-1.5">
                                <p>4hrs ago</p>
                                <div className="w-1 h-1 bg-gray-200 mx-3 rounded-full" />
                                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">ID-10-329</p>
                            </div>
                        </div>
                        <button className="dark:bg-gray-700 bg-gray-100 rounded py-2 px-2 hover:bg-gray-200">
                            <p className="text-xs leading-3 dark:text-gray-100 text-indigo-700">Resolve</p>
                        </button>
                    </div>
                    <div className="flex items-end justify-between mt-5">
                        <div>
                            <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">Luciano</p>
                            <div className="flex items-center text-xs leading-4  text-gray-500 dark:text-gray-400 mt-1.5">
                                <p>7hrs ago</p>
                                <div className="w-1 h-1 bg-gray-200 mx-3 rounded-full" />
                                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">ID-11-120</p>
                            </div>
                        </div>
                        <button className="dark:bg-gray-700 bg-gray-100 rounded py-2 px-2 hover:bg-gray-200">
                            <p className="text-xs leading-3 dark:text-gray-100 text-indigo-700">Resolve</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
