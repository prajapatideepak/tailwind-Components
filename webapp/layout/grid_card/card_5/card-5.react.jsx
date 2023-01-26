import React from "react";
export default function Index() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded shadow-lg p-5 bg-white w-full dark:bg-gray-800">
                    <h1 className="text-lg font-bold leading-7 text-gray-800 dark:text-gray-100">Progress</h1>
                    <div className="flex items-end justify-between pt-7">
                        <div className="flex flex-col">
                            <h1 className="text-base font-medium leading-4 text-gray-800 dark:text-gray-100">All Invoices</h1>
                            <p className="pt-1 text-xs leading-3 dark:text-gray-400 text-gray-600">Monthly Analysis</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold leading-4 text-indigo-700">$6,390</p>
                        </div>
                    </div>
                    <div className="w-full bg-indigo-50 h-2 mr-1 relative rounded mt-3">
                        <div className="h-2 w-48 bg-indigo-500 rounded" />
                    </div>
                    <div className="flex items-end justify-between pt-6">
                        <div className="flex flex-col">
                            <h1 className="text-base font-medium leading-4 text-gray-800 dark:text-gray-100">Pending</h1>
                            <p className="pt-1 text-xs leading-3 dark:text-gray-400 text-gray-600">Weekly Analysis</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold leading-4 text-blue-500">$1,320</p>
                        </div>
                    </div>
                    <div className="w-full bg-blue-50 h-2 mr-1 relative rounded mt-3">
                        <div className="h-2 w-32 bg-blue-500 rounded" />
                    </div>
                    <div className="flex items-end justify-between pt-6">
                        <div className="flex flex-col">
                            <h1 className="text-base font-medium leading-4 text-gray-800 dark:text-gray-100">Pending</h1>
                            <p className="pt-1 text-xs leading-3 dark:text-gray-400 text-gray-600">Daily Analysis</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold leading-4 text-green-500">$6,320</p>
                        </div>
                    </div>
                    <div className="w-full bg-green-50 h-2 mr-1 relative rounded mt-3">
                        <div className="h-2 w-32 bg-green-500 rounded" />
                    </div>
                    <div className="flex items-end justify-between pt-6">
                        <div className="flex flex-col">
                            <h1 className="text-base font-medium leading-4 text-gray-800 dark:text-gray-100">Upcoming</h1>
                            <p className="pt-1 text-xs leading-3 dark:text-gray-400 text-gray-600">Monthly Analysis</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold leading-4 text-pink-500">$6,320</p>
                        </div>
                    </div>
                    <div className="w-full bg-pink-50 h-2 mr-1 relative rounded mt-3">
                        <div className="h-2 w-32 bg-pink-500 rounded" />
                    </div>
                </div>
            </div>
        </>
    );
}
