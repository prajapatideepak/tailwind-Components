import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-96 bg-white dark:bg-gray-800 shadow px-8 py-10 rounded">
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold leading-normal text-gray-800 dark:text-white">Subscribe</p>
                            <p className="text-sm leading-5 pt-4 pb-6 text-center text-gray-600 dark:text-gray-300">Get yourself ready for the whole new collection of premium and attractive products.</p>
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="sm:mr-2 w-60 bg-gray-50 border rounded border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 text-sm leading-none text-gray-600 dark:text-white">
                                    <input className=" py-2 pl-4 placeholder-gray-600 dark:placeholder-white focus:outline-none bg-transparent w-full" placeholder="Enter your email" />
                                </div>
                                <button className="mt-4 sm:mt-0 focus:outline-none px-4 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded">
                                    <p className="text-xs font-medium leading-3 text-gray-100">Subscribe</p>
                                </button>
                            </div>
                            <p className="cursor-pointer text-xs leading-3 underline text-center text-gray-600 dark:text-white mt-4 sm:mt-5 md:mt-7">Ask me later</p>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
