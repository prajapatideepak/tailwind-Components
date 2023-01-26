import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto flex justify-center px-4">
                    <div className="relative bg-white dark:bg-gray-800 w-72 sm:w-full md:w-10/12 lg:w-8/12 xl:w-2/5 shadow rounded">
                        <div className="sm:flex items-center">
                            <img className="w-full h-56 sm:h-auto  object-cover object-center sm:w-auto rounded-tl rounded-tr sm:rounded-tr-none sm:rounded-bl" src="https://i.ibb.co/K560zjQ/Rectangle-138.png" />
                            <div className="py-12">
                                <div className="px-6 flex flex-col items-center w-full">
                                    <p className="text-2xl font-bold leading-6 text-gray-800 dark:text-gray-100">Subscribe</p>
                                    <p className="text-sm leading-5 mt-3 text-center text-gray-600 dark:text-gray-300">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                                </div>
                                <div className="mt-6 px-12">
                                    <button className="focus:outline-none py-3 w-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border rounded border-gray-200 dark:border-gray-700 text-xs font-semibold leading-3 text-gray-600 dark:text-gray-50">Enter your email</button>
                                    <button className="mt-3 w-full text-xs font-semibold leading-3 text-gray-100 focus:outline-none hover:bg-opacity-80 py-3 bg-indigo-700 dark:bg-indigo-600 rounded">Subscribe</button>
                                </div>
                            </div>
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
