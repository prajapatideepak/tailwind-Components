import React from "react";
const Index = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
                <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-3">Manage Your Subscription</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 pb-3 font-normal">Check/uncheck the box next to the subscription name to subscribe/unsubscribe.</p>
                <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-2 text-xs">Manage Plan</button>
            </div>
        </div>
    );
};
export default Index;
