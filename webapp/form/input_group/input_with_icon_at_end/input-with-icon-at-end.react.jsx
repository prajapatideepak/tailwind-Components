import React, { useState } from "react";
const Index = () => {
    const [viewPass, setViewPass] = useState(false);
    return (
        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col items-center py-8 px-4">
                {/* Code block starts */}
                <div className="flex flex-col md:mr-16 ">
                    <label htmlFor="password3" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <div onclick="changeView()" className="absolute right-0 text-gray-600 dark:text-gray-400 hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={2} />
                                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                            </svg>
                        </div>
                        <input id="password3" type="password" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:bg-gray-800 bg-white dark:border-gray-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                    </div>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col md:py-0 py-4">
                    <label htmlFor="id" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Organization ID
                    </label>
                    <div className="relative">
                        <div className="absolute right-0 text-gray-600 dark:text-gray-400 hover:text-gray-700 flex items-center pr-3 h-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={9} />
                                <line x1={12} y1={8} x2="12.01" y2={8} />
                                <polyline points="11 12 12 12 12 16 13 16" />
                            </svg>
                        </div>
                        <input id="id" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:bg-gray-800 bg-white dark:border-gray-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                    </div>
                </div>
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Index;
