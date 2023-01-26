import React from "react";
const Index = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col items-center py-8 px-4">
                {/* Code block starts */}
                <div className="flex flex-col md:mr-16">
                    <label htmlFor="price3" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Price
                    </label>
                    <div className="relative">
                        <div className="absolute right-0 text-gray-600 dark:text-gray-400 flex items-center px-3 border-l dark:border-gray-700 h-full">
                            <span className="uppercase text-sm leading-tight tracking-normal">usd</span>
                        </div>
                        <input id="price3" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="$0.00" />
                    </div>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col md:mr-16 md:py-0 py-4">
                    <label htmlFor="price4" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Price
                    </label>
                    <div className="relative">
                        <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 border-l dark:border-gray-700 right-0 h-full pr-1">
                            <select className="uppercase text-sm leading-tight tracking-normal focus:outline-none h-8 appearance-none pr-6 z-20 relative bg-transparent">
                                <option value="usd">usd</option>
                                <option value="aus">Aus</option>
                                <option value="pak">pak</option>
                            </select>
                            <div className="mx-1 absolute right-0 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                        <input id="price4" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="$0.00" />
                    </div>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex flex-col md:py-0 py-4">
                    <label htmlFor="price5" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Price
                    </label>
                    <div className="relative">
                        <div className="absolute text-white flex items-center pl-3 border-l dark:border-gray-700 rounded-r h-full pr-1 bg-indigo-700 right-0">
                            <select className="uppercase text-sm leading-tight tracking-normal focus:outline-none h-8 appearance-none pr-6 z-20 relative bg-indigo-700">
                                <option value="usd">usd</option>
                                <option value="aus">Aus</option>
                                <option value="pak">pak</option>
                            </select>
                            <div className="mx-1 absolute right-0 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                        <input id="price5" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="$0.00" />
                    </div>
                </div>
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Index;
