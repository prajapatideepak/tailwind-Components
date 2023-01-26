import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-96 bg-white dark:bg-gray-800 shadow rounded">
                        <div className="flex flex-col items-center pt-8 pb-6 px-7 sm:px-14">
                            <p className="text-2xl font-bold leading-6 text-gray-800 dark:text-gray-100">Confirm Navigation</p>
                            <p className="text-sm leading-5 text-center mt-4 text-gray-600 dark:text-gray-300">You have unsaved changes on this page that will be lost if you decide to continue.</p>
                        </div>
                        <div className="flex items-center justify-center py-6 bg-gray-100 dark:bg-gray-700 rounded-bl rounded-br">
                            <button className="text-xs sm:text-sm font-medium leading-none text-indigo-700 focus:outline-none px-3 sm:px-5 py-3 bg-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-100 dark:bg-indigo-200 border rounded">Leave this page</button>
                            <button className="text-xs sm:text-sm font-medium leading-none text-gray-100 px-3 sm:px-5 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 ml-3 focus:outline-none rounded">Stay on this page</button>
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
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
