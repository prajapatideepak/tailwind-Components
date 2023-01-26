import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 4 col grid for best view. */}
            {/* Card code block start */}
            <div className="bg-white dark:bg-gray-800 shadow rounded p-6 w-full">
                <h3 className="text-gray-800 dark:text-gray-100 leading-4 tracking-normal text-base mb-6 font-bold">Social Media Integrations</h3>
                <div className="flex justify-between items-center w-full mb-5">
                    <div className="flex items-center">
                        <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">Facebook</p>
                    </div>
                    <button className="focus:outline-none px-6 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-normal text-xs leading-3 rounded">Connect</button>
                </div>
                <div className="flex justify-between items-center w-full mb-5">
                    <div className="flex items-center">
                        <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">Instagram</p>
                    </div>
                    <button className="focus:outline-none px-6 py-2 bg-white dark:bg-transparent dark:hover:bg-red-400 hover:bg-red-400 hover:text-white border border-red-400 text-red-400 font-normal text-xs leading-3 rounded">Remove</button>
                </div>
                <div className="flex justify-between items-center w-full mb-5">
                    <div className="flex items-center">
                        <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">Twitter</p>
                    </div>
                    <button className="focus:outline-none px-6 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-normal text-xs leading-3 rounded">Connect</button>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                        <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">Dribbble</p>
                    </div>
                    <button className="focus:outline-none px-6 py-2 bg-white dark:bg-transparent dark:hover:bg-red-400 hover:bg-red-400 hover:text-white border-red-400 border text-red-400 font-normal text-xs leading-3 rounded">Remove</button>
                </div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
