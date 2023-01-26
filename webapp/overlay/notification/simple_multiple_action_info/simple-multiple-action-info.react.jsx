import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div role="alert" className={flag ? "xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-3/5 w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col pr-4 absolute left-0 sm:left-auto right-0 sm:top-0 dark:bg-gray-800 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out translate-show" : "translate-hide"}>
            <div>
                <div className="sm:px-6 px-4 flex items-center sm:justify-center justify-start sm:border-r border-gray-300 dark:border-gray-700 mt-4 sm:mt-0 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} fill="currentColor">
                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center pl-4 py-4 sm:w-9/12">
                    <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">Update Available</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pb-2 font-normal">See what is new in Material OS 12.3</p>
                    <div className="flex">
                        <span className="text-sm text-blue-400 font-bold mr-2 cursor-pointer">Details </span>
                        <span className="text-sm pl-2 text-gray-600 dark:text-gray-400 cursor-pointer" onClick={() => setFlag(false)}>
                            Dismiss
                        </span>
                    </div>
                </div>
            </div>
            <style>
                {`
                .translate-show{
                    transform : translateX(0%);
                }
                .translate-hide{
                    transform : translateX(150%);
                }
                `}
            </style>{" "}
        </div>
    );
};

export default Index;
