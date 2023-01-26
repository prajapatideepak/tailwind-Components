import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto  flex justify-center">
                    <div className="relative w-72 bg-white dark:bg-gray-800 shadow rounded">
                        <img className="rounded-tr rounded-tl" src="https://i.ibb.co/nrbGpyp/Rectangle-144.png" />
                        <div className=" py-4">
                            <div className="px-4">
                                <p className="text-xs font-semibold leading-3 text-indigo-700 dark:text-indigo-600">Technology</p>
                                <p className="text-lg font-bold leading-6 py-2 text-gray-800 dark:text-gray-100">This new chip has made the life of so many people easy</p>
                                <p className="w-64 text-sm leading-5 text-gray-600 dark:text-gray-300">It delivers incredible performance, custom technologies, and revolutionary power efficiency. And it was designed from the very start to work with the most advanced desktop operating system in the world.</p>
                            </div>
                            <div className="px-4 mt-5 pt-4 flex items-center justify-between border-t  border-gray-200 dark:border-gray-700">
                                <button className="focus:outline-none text-xs font-medium leading-3 text-gray-600 dark:text-gray-300">Maybe Later</button>
                                <button className="focus:outline-none flex items-center text-indigo-700 dark:text-indigo-600 text-xs font-semibold leading-3">
                                    Read Article
                                    <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                        <line x1={15} y1={16} x2={19} y2={12} />
                                        <line x1={15} y1={8} x2={19} y2={12} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
