import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative max-w-sm bg-indigo-700 dark:bg-indigo-600 shadow px-8 pt-8 pb-10 rounded">
                        <p className="text-2xl font-bold leading-normal text-gray-100">Get 25% Discount</p>
                        <p className="text-sm leading-5 pt-3 pb-5 text-gray-100 w-full md:w-10/12">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                        <div className="flex items-center">
                            <button className="py-3 px-6 focus:outline-none bg-indigo-600 dark:bg-indigo-700 hover:bg-opacity-80 rounded ">
                                <p className="text-xs font-semibold leading-3 text-gray-100">Sign up</p>
                            </button>
                            <button className="py-3 px-6 ml-3 focus:outline-none bg-gray-100 rounded text-xs font-semibold leading-3 text-indigo-700 hover:bg-gray-200 dark:hover:bg-gray-200 dark:bg-gray-50">Log in</button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-white transition duration-150 ease-in-out">
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
