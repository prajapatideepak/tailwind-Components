import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            {/* Code block starts */}
            <div className="flex items-center justify-center px-4">
                <div id="alert" className={flag ? "transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white py-4 md:py-0 dark:bg-gray-800 shadow rounded flex flex-col items-center md:flex-row  justify-between" : "transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white dark:bg-gray-800 shadow rounded flex flex-col items-center md:flex-row py-4 md:py-0  justify-between translate-hide"}>
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="mr-3 p-4 bg-green-400  rounded md:rounded-tr-none md:rounded-br-none text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={22} height={22} fill="currentColor">
                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                            </svg>
                        </div>
                        <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0">Success</p>
                        <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
                        <p className="text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">Your Payment was successful. You can now use our services.</p>
                    </div>
                    <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4 ">
                        <span className="text-sm mr-4 font-bold cursor-pointer text-indigo-700 dark:text-indigo-600">Details</span>
                        <span className="text-sm cursor-pointer text-gray-600 dark:text-gray-400" onClick={() => setFlag(false)}>
                            Dismiss
                        </span>
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
