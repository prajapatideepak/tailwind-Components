import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div className={flag ? "xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 w-10/12 bg-white shadow-lg rounded flex pr-4 absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 dark:bg-gray-800 sm:mb-0 transition duration-150 ease-in-out translate-show" : "translate-hide"}>
            <div role="alert" aria-label="Close" className="cursor-pointer absolute right-0 mr-2 mt-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 transition duration-150 ease-in-out" onClick={() => setFlag(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
            </div>
            <div className="px-5 border-r border-gray-300 dark:border-gray-700 flex items-center justify-center text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} fill="currentColor">
                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                </svg>
            </div>
            <div className="flex flex-col justify-center pl-4 py-4">
                <p className="text-sm text-gray-800 dark:text-gray-100 font-semibold">Action Successful</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">You have successfully changed your password. If it's not you contact our team.</p>
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
