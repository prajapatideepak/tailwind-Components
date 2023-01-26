import React from "react";
const Index = () => {
    return (
        <div className="mx-auto py-12 flex justify-center">
            {/* Code block starts */}
            <div className="py-4 flex items-center">
                <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                    <input defaultChecked type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                </div>
                <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">On</p>
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="py-4 flex items-center ml-6">
                <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                    <input type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                </div>
                <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Off</p>
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="flex items-center ml-6">
                <div className="rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                    <input disabled type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                </div>
                <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Disabled</p>
            </div>
            {/* Code block ends */}
            <style>
                {`.checkbox:checked {
                        border: none;
                    }
                    .checkbox:checked + .check-icon {
                        display: flex;
                    }`}
            </style>
        </div>
    );
};
export default Index;
