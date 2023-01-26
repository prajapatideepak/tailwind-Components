import React from "react";
const Index = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style={{ fontFamily: '"Lato", sans-serif', minHeight: 200 }}>
            <div className="flex md:flex-row flex-col  items-center py-8 px-4">
                {/* Code block starts */}
                <div className="flex flex-col ">
                    <label htmlFor="search" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute text-gray-600 dark:text-gray-400 dark:border-gray-700 flex items-center pr-3 right-0 border-l h-full cursor-pointer">
                            <div className="pl-2 pr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                                </svg>
                            </div>
                            <span className="text-sm leading-tight tracking-normal">Filter</span>
                        </div>
                        <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={10} cy={10} r={7} />
                                <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                        </div>
                        <input id="search" className="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal pr-20 sm:pr-32 h-10 flex items-center pl-10 text-sm border-gray-300 dark:border-gray-700 rounded border shadow" placeholder="Buy brand or product" />
                    </div>
                </div>
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Index;
