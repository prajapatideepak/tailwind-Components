import React, { useState } from "react";
const Index = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div role="alert" className={flag ? "xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 justify-between w-10/12 bg-white shadow-lg rounded flex absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 dark:bg-gray-800 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out translate-show" : "translate-hide"}>
            <div className="bg-gray-200 dark:bg-gray-900 h-full">
                <div className="pl-5 pr-3 flex items-center justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
                <div className="sm:flex justify-between xl:-ml-4 xl:pl-4 lg:pl-4 w-full pt-3 pb-3 xl:pr-4 lg:pr-4 items-center pr-3">
                    <p className="text-sm text-gray-800 dark:text-gray-100 font-semibold">Theme Updated</p>
                    <p className="sm:pt-0 pt-4 text-sm font-bold text-blue-400 cursor-pointer" onClick={() => setFlag(false)}>
                        Undo Action
                    </p>
                </div>
                <div className="flex flex-col justify-center border-l items-center border-gray-300 dark:border-gray-700 px-4">
                    <div className="cursor-pointer pt-2 pb-2 w-full flex justify-center text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out" onClick={() => setFlag(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
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
            </style>
        </div>
    );
};

export default Index;
