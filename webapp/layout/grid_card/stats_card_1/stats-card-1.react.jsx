import React from "react";
export default function Index() {
    return (
        <div className="flex items-center justify-center dark:bg-gray-900 py-8 px-4">
            <div className="w-10/12 flex justify-center items-center">
                <div className="flex flex-wrap">
                    <div className="py-6 pl-4 w-64 m-4 bg-indigo-400 rounded-sm">
                        <p className="text-4xl font-bold leading-9 text-white">132</p>
                        <p className="mt-3 text-lg leading-none text-white">Total Sales</p>
                    </div>
                    <div className="py-6 pl-4 w-64 m-4 bg-gray-100 dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700">
                        <p className="text-4xl font-bold leading-9 text-gray-700 dark:text-gray-400">$768,89</p>
                        <p className="text-lg leading-none text-gray-600 dark:text-gray-400 mt-3">Revenue Generated</p>
                    </div>
                    <div className="py-6 pl-4 w-64 m-4 bg-gray-100 dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700">
                        <p className="text-4xl font-bold leading-9 text-gray-700 dark:text-gray-400">11,500</p>
                        <p className="text-lg leading-none text-gray-600 dark:text-gray-400 mt-3">People Attended</p>
                    </div>
                    <div className="py-6 pl-4 w-64 m-4 bg-gray-100 dark:bg-gray-800 rounded-sm border border-gray-100 dark:border-gray-700">
                        <p className="text-4xl font-bold leading-9 text-gray-700 dark:text-gray-400">8,000</p>
                        <p className="text-lg leading-none text-gray-600 dark:text-gray-400 mt-3">Tickets Sold</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
