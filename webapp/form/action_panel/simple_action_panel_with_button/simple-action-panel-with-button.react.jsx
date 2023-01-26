import React from "react";
const Index = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800 w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 rounded-md">
                <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-3">Have Questions and Queries</p>
                <p className="w-full sm:w-4/5 text-sm text-gray-600 dark:text-gray-400 pb-4 font-normal">Welcome to our support center. If you cannot find an answer to any query, contact our support team @abc</p>
                <button className="focus:outline-none bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-xs">Manage Plan</button>
            </div>
        </div>
    );
};
export default Index;
