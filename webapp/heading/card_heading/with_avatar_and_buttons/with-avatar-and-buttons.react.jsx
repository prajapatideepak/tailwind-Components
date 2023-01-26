import React from "react";
const Index = () => {
    return (
        <div className="container mx-auto w-5/6 md:w-2/3 h-full">
            {/* Code block starts */}
            <div className="bg-white dark:bg-gray-800 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
                <div className="flex items-center mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                    <div className="relative w-12 h-12 rounded">
                        <img className="w-full h-full object-cover inset-0 absolute rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/card_headings/ch_1.png" alt="avatar" />
                    </div>
                    <div className="ml-2">
                        <h2 className="text-gray-800 dark:text-gray-100 text-sm font-bold">Jane Doe</h2>
                        <p className="font-normal text-xs text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-700">View Profile</p>
                    </div>
                </div>
                <div>
                    <button className="font-normal bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-indigo-600 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 rounded text-indigo-600 px-6 py-2 text-sm">Options</button>
                    <button className="ml-2 sm:ml-3 font-normal focus:outline-none bg-indigo-700 dark:hover:bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 dark:bg-indigo-600 rounded text-white px-6 py-2 text-sm">Contact</button>
                </div>
            </div>
            {/* Code block ends */}
        </div>
    );
};
export default Index;
