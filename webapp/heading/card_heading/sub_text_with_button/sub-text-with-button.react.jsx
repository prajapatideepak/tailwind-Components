import React from "react";
const Index = () => {
    return (
        <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
            {/* Code block starts */}
            <div className="bg-white dark:bg-gray-800 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
                <div className="sm:w-3/5 mb-4 sm:mb-0">
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">Job Postings</h2>
                    <p className="font-normal text-sm text-gray-600 dark:text-gray-400 mt-1">Would you like to earn above average pays and be home most nights for dinner</p>
                </div>
                <button className="font-normal bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm">Create New</button>
            </div>
            {/* Code block ends */}
        </div>
    );
};
export default Index;
