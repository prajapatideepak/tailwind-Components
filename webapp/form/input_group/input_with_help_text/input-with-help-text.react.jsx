import React from "react";
const Index = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 flex items-center jusify-center flex items-center justify-center" style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="flex md:flex-row flex-col items-center py-8 px-4">
                {/* Code block starts */}
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                        Password
                    </label>
                    <input id="password" type="password" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 bg-white dark:bg-gray-800 h-10 flex items-center pl-3 text-sm border-gray-300 dark:border-gray-700 dark:focus:border-indigo-700 rounded border shadow" placeholder="Placeholder" />
                    <p className="text-xs leading-3 tracking-normal text-gray-600 dark:text-gray-400 mt-2">Make your password unique and authentic</p>
                </div>
                {/* Code block ends */}
            </div>
        </div>
    );
};
export default Index;
