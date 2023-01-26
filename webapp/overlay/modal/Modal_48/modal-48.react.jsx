import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
                    <div className="relative w-11/12 sm:w-10/12 bg-gradient-to-br from-gray-300 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-800 shadow rounded">
                        <div className="pt-8 px-6">
                            <p className="text-base sm:text-xl md:text-2xl font-bold leading-6 text-gray-800 dark:text-gray-100">New Collection 2021</p>
                            <p className="text-xs md:text-sm md:leading-5 text-gray-600 dark:text-gray-300 mt-2 w-11/12 pr-4">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                            <button className="mt-5 px-2 py-2 md:px-3 md:py-3 bg-indigo-700 focus:outline-none dark:bg-indigo-600 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100 ">See more</button>
                        </div>
                        <div className="flex justify-end w-full pb-5 pl-6 md:pl-12">
                            <img src="https://i.ibb.co/xCXJvFd/pngfind-3.png" />
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
