import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            {/* Code block starts */}
            <div className="flex items-center justify-center px-4 lg:px-0 py-12">
                <div id="alert" className={flag ? "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded" : "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded translate-hide"}>
                    <div className="sm:flex sm:items-start lg:items-center">
                        <div className="flex items-end">
                            <div className="mr-2 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                                </svg>
                            </div>
                            <p className="mr-2 text-sm lg:text-base font-bold text-gray-800 dark:text-gray-100">Success</p>
                        </div>
                        <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
                        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">Your Payment was successful. You can now use our services.</p>
                    </div>
                    <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4 md:pl-4 lg:pl-0">
                        <button className="focus:outline-none mr-8 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">View</button>
                        <div onClick={() => setFlag(false)} className="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Code block ends */}
            <style>
                {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
            </style>
        </div>
    );
};
export default Index;
