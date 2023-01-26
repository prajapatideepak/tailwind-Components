import React from "react";
const Index = () => {
    return (
        <div className="mx-auto py-12 flex justify-center">
            <div className="flex flex-col items-start">
                {/* Code block starts */}
                <div className="py-4 flex items-center">
                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Off</p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="py-4 flex items-center">
                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input defaultChecked type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">On</p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="py-4 flex items-center">
                    <div className="bg-gray-200 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input disabled type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Disabled</p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="py-4 flex items-center">
                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input defaultChecked type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </div>
                    </div>
                    <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Indeterminate</p>
                </div>
                {/* Code block ends */}
                <style>
                    {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
                </style>
                ;
            </div>
        </div>
    );
};
export default Index;
