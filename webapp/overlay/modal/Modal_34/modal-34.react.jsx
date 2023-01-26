import React from "react";

function Index() {
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto flex justify-center px-4">
                    <div className="relative bg-white dark:bg-gray-800 w-80 sm:w-full md:w-10/12 lg:w-8/12 xl:w-1/2 shadow rounded">
                        <div className="sm:flex items-center">
                            <img className="w-full h-56 sm:h-auto  object-cover object-center sm:w-auto rounded-tl rounded-tr sm:rounded-tr-none sm:rounded-bl" src="https://i.ibb.co/6YTdght/Rectangle-138.png" />
                            <div className="px-6 py-6">
                                <p className="text-2xl font-bold leading-5 text-gray-800 dark:text-gray-100">Subscribe</p>
                                <p className="sm:w-4/5 text-sm leading-5 text-gray-600 mt-4 dark:text-gray-300">Get yourself ready for the whole new collection of premium and attractive products </p>
                                <div className="my-5 border rounded border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 relative">
                                    <input placeholder="Enter your email" className="text-sm leading-none text-gray-600 w-full focus:outline-none pl-4 py-3 bg-transparent dark:text-gray-50 dark:placeholder-gray-50 placeholder-gray-600" />
                                    <button className="focus:outline-none px-3 py-2.5 bg-indigo-700 dark:bg-indigo-600 border border-indigo-700 hover:bg-opacity-80 rounded-tr absolute h-full right-0 rounded-br">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.29734 6.20995C0.949337 6.09395 0.946004 5.90661 1.304 5.78728L14.0287 1.54595C14.3813 1.42861 14.5833 1.62595 14.4847 1.97128L10.8487 14.6953C10.7487 15.0479 10.5453 15.0599 10.396 14.7253L8 9.33328L12 3.99995L6.66667 7.99995L1.29734 6.20995Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-xs leading-3 text-gray-600 dark:text-gray-300 flex items-center">
                                    <p>Privacy Policy</p>
                                    <div className="w-1 h-1 bg-gray-400 dark:bg-gray-300 rounded-full mx-2" />
                                    <p>Terms &amp; Conditions</p>
                                </div>
                            </div>
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
