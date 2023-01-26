import React from "react";
export default function Index() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded-md shadow-lg px-5 py-4 w-full bg-white dark:bg-gray-800">
                    <h1 className="pb-5 text-gray-800 dark:text-gray-100 font-bold text-lg">Sales Trend</h1>
                    <div className="flex items-center">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">23%</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                            <path d="M10 4.16675V15.8334" stroke="#22C55E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.3333 7.50008L10 4.16675" stroke="#22C55E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66669 7.50008L10 4.16675" stroke="#22C55E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 pt-1">Increase compared to last year</p>
                    <div className="flex pt-8">
                        <div className="w-1/3 flex items-center">
                            <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                            <h1 className="text-sm text-gray-800 dark:text-gray-100 pl-2">Design</h1>
                        </div>
                        <div className="w-2/3 flex items-center pl-8 justify-between">
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-100">3,128</p>
                            <p className="text-sm text-gray-500 dark:text-gray-100">3,697</p>
                            <p className="text-sm text-gray-500 dark:text-gray-100">3,248</p>
                        </div>
                    </div>
                    <div className="flex pt-4">
                        <div className="w-1/3 flex items-center">
                            <div className="w-1 h-1 bg-blue-500 rounded-full" />
                            <h1 className="text-sm text-gray-800 dark:text-gray-100 pl-2">Development</h1>
                        </div>
                        <div className="w-2/3 flex items-center pl-8 justify-between">
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-100">3,128</p>
                            <p className="text-sm text-gray-500 dark:text-gray-100">3,697</p>
                            <p className="text-sm text-gray-500 dark:text-gray-100">3,248</p>
                        </div>
                    </div>
                    <div className="flex pt-4">
                        <div className="w-1/3 flex items-center">
                            <div className="w-1 h-1 bg-purple-500 rounded-full" />
                            <h1 className="text-sm text-gray-800 dark:text-gray-100 pl-2">Quality Check</h1>
                        </div>
                        <div className="w-2/3 flex items-center pl-8 justify-between">
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-100">3,128</p>
                            <p className="text-sm text-gray-500 dark:text-gray-100">3,697</p>
                            <p className="text-sm text-gray-500 dark:text-gray-100">3,248</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
