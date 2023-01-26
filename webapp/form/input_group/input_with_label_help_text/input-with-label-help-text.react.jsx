import React from "react";
const Index = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col items-center py-8 px-4">
                {/* Code block starts */}
                <div className="flex flex-col ">
                    <label htmlFor="city" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        City
                        <span className="text-xs text-gray-600 dark:text-gray-400 italic font-normal">- Optional</span>
                    </label>
                    <input id="city" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                </div>
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Index;
