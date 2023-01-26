import React, { useState } from "react";
import Head from "next/head";

function Index() {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="py-8">
                <div role="alert" className="container mx-auto flex justify-center w-80 sm:w-9/12 md:w-2/3 xl:w-1/2 px-4">
                    <div className=" relative bg-white dark:bg-gray-800 w-full shadow rounded-md">
                        <div className="sm:flex  items-stretch">
                            <img className="w-full h-72 sm:h-auto  object-cover object-center sm:w-auto rounded-tl rounded-tr sm:rounded-tr-none sm:rounded-bl" src="https://i.ibb.co/NSLg2g3/Rectangle-138.png" />
                            <div className="w-full">
                                <div className="px-6 w-full pt-8">
                                    <p className="text-2xl font-bold leading-5 text-gray-800 dark:text-gray-100">Sign in</p>
                                    <p className="text-sm leading-4 text-gray-600 mt-4 mb-5 dark:text-gray-300">Get notified about our latest updates</p>
                                    <div className="bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200">
                                        <input className="py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none" type="email" placeholder="Email" />
                                    </div>
                                    <div className="mt-3 bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200">
                                        <input className="py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none" type="password" placeholder="Password" />
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <p className="text-xs font-medium leading-3 text-gray-600 dark:text-gray-300 cursor-pointer">Forgot Password?</p>
                                        <button className="focus:outline-none px-5 py-2 bg-indigo-700 dark:bg-indigo-600 rounded text-sm font-medium text-gray-100 hover:bg-opacity-80">Login</button>
                                    </div>
                                </div>
                                <div className="mt-3.5 border-gray-200 dark:border-gray-700 border-t py-4 px-6">
                                    <p className="text-xs leading-3 text-gray-600 dark:text-gray-300 cursor-pointer">
                                        Don’t have an account? <span className="text-indigo-700 dark:text-indigo-600 cursor-pointer font-semibold">Register Here</span>
                                    </p>
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
