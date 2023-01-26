import React from "react";
const Index = () => {
    return (
        <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
            {/* Code block starts */}
            <div className="bg-white dark:bg-gray-800 h-auto sm:h-20 py-6 sm:py-0 md:py-0 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
                <div>
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold mb-2 sm:mb-0">Job Postings</h2>
                </div>
                <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start md:justify-start lg:justify-start xl:justify-start md:w-auto lg:w-auto xl:w-auto">
                    <h4 className="text-gray-600 dark:text-gray-400 text-base mr-3">Switch Modes</h4>
                    <div className="cursor-pointer my-5 rounded-full relative shadow-sm">
                        <input type="checkbox" name="toggle" id="toggle1" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                        <label htmlFor="toggle1" className="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
                    </div>
                </div>
                <style>
                    {`
                            .checkbox:checked {
                                                 right: 0;
                                               }
                            .checkbox:checked + .toggle-label {
   
                                                background-color: #4c51bf;
                                               }
                        `}
                </style>
            </div>
            {/* Code block ends */}
        </div>
    );
};

export default Index;
