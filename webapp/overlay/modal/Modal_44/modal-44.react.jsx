import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-full sm:w-11/12 md:w-2/3 max-w-lg flex justify-center px-4">
                    <div className="relative w-96 bg-white dark:bg-gray-800 shadow px-4 md:px-8 py-8 bg-indigo-700 dark:bg-indigo-600 rounded">
                        <p className="text-base sm:text-xl md:text-2xl font-bold leading-6 text-gray-100">Get in touch with us</p>
                        <p className="md:w-10/12 text-xs sm:text-sm leading-5 text-gray-100 mt-2 md:mt-4 mb-4 md:mb-6">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                        <div className="flex items-center text-xs font-medium leading-3 text-gray-100 pl-4 bg-white bg-opacity-50 dark:bg-indigo-800 dark:border-indigo-800 border border-white rounded">
                            <input className="py-3 bg-transparent w-full pr-4  sm:w-10/12 placeholder-white focus:outline-none" type="email" placeholder="Enter your email" />
                            <button className="border-l py-2.5 px-4 focus:outline-none">Subscribe</button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-100 transition duration-150 ease-in-out">
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
