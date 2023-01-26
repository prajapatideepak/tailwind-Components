import React from "react";
const Index = () => {
    return (
        <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
            {/* Code block starts */}
            <div className="w-full bg-white dark:bg-gray-800 py-5 flex items-center justify-between px-5 sm:px-10 shadow rounded-t">
                <div className="mb-0">
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">Job Postings</h2>
                </div>
                <button className="font-normal bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none rounded text-white px-6 py-2 text-sm">Create New</button>
            </div>
            {/* Code block ends */}
        </div>
    );
};
export default Index;
