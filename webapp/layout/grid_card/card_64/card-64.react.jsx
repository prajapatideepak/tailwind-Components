import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                <div className="max-w-sm">
                    <div className="p-4 bg-gray-100 shadow rounded-tl rounded-tr dark:bg-gray-700">
                        <p className="text-xs leading-3 text-indigo-700 uppercase">latest news</p>
                        <p className="sm:text-xl text-lg  font-semibold leading-6 dark:text-gray-100 pt-12 text-gray-800">
                            Hacker Leaks From <br />
                            Netflix Show <br />
                            Threatens Networks
                        </p>
                    </div>
                    <div className="bg-white shadow dark:bg-gray-800 pt-5 pl-4 sm:pr-9 pr-4 rounded-b">
                        <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">25 hrs ago</p>
                        <div className="flex items-center pt-5 pb-4 border-b border-gray-200">
                            <div className="w-9 h-9 rounded">
                                <img src="https://i.ibb.co/5xwCxXN/6.png" alt="img" className="w-full h-full object-center object-fill" />
                            </div>
                            <div className="flex flex-col pl-6">
                                <p className="dark:text-gray-100 text-xs font-medium sm:leading-4 text-gray-800">Cody Brown Has a Broad Vision for Virtual Reality</p>
                                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-0.5 sm:pt-1">26 hrs ago</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-5 pb-4">
                            <div className="w-9 h-9 rounded">
                                <img src="https://i.ibb.co/pvJGfmd/7.png" alt="img" className="w-full h-full object-center object-fill" />
                            </div>
                            <div className="flex flex-col pl-6">
                                <p className="dark:text-gray-100 text-xs font-medium sm:leading-4 text-gray-800">Visa Applications Pour In by Truckload Before Door</p>
                                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-0.5 sm:pt-1">29 hrs ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
