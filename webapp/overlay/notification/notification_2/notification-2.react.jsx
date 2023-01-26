import React, { useState } from "react";
import Head from "next/head";

function Index() {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="py-8">
                <div className="flex items-end justify-end sm:mr-12 mr-6">
                    {/*code for notification starts*/}
                    <div role="alert" className="flex sm:items-center justify-between transition duration-150 ease-in-out bg-white dark:bg-gray-800 pl-3 pr-4  sm:pr-8 py-4 sm:py-0 shadow rounded shadow relative" id="notification">
                        <img className="absolute bottom-0" src="https://i.ibb.co/xXc3LDg/Saly-8.png" />
                        <div className="flex items-start w-full ml-11">
                            <div>
                                <p className="text-sm sm:text-lg font-bold md:leading-5 dark:text-gray-100 text-gray-800">Install and get 50% off</p>
                                <p className="text-xs font-medium leading-4 sm:leading-3 text-gray-600 dark:text-gray-300 mt-1.5 sm:mt-3">The wait is over. Our sale is now live. Go get it</p>
                            </div>
                        </div>
                        <div className="sm:ml-14 pl-4 sm:pl-8 sm:border-l border-gray-200 dark:border-gray-700 sm:py-7 h-full absolue right-0">
                            <button id="close-modal" onclick="closeModal()" className="focus:outline-none dark:text-gray-100 text-gray-800 sm:w-8 sm:h-8 w-5 h-5 flex items-center justify-center">
                                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.2294 5.99999L0.457397 2.22932L2.34273 0.342651L8.00006 5.99999L2.34273 11.6573L0.457397 9.77065L4.2294 5.99999Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/*code for notification ends*/}
                </div>
            </div>
        </>
    );
}

export default Index;
