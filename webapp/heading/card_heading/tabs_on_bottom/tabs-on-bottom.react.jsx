import React from "react";
const Index = () => {
    return (
        <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
            {/* Code block starts */}
            <div className="bg-white dark:bg-gray-800 flex flex-col items-start justify-between pt-4 sm:pt-8 px-5 sm:px-10 shadow rounded-t">
                <div className="mb-4 xl:mb-0">
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">Job Postings</h2>
                </div>
                <div className="mb-4 lg:hidden w-full relative">
                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 9 12 5 16 9" />
                            <polyline points="16 15 12 19 8 15" />
                        </svg>
                    </div>
                    <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 dark:border-gray-700 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent relative z-10">
                        <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                        <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                        <option selected className="text-sm text-indigo-700">
                            Active
                        </option>
                        <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                        <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
                    </select>
                </div>
                <ul className="hidden lg:flex items-center mt-0 sm:mt-5">
                    <li className="font-normal flex justify-center items-center text-indigo-700 text-sm mr-4 sm:mr-8 md:mr-8 lg:mr-8 xl:mr-8 border-b-2 border-indigo-700 pb-4">Active</li>
                    <li className="font-normal flex justify-center items-center rounded dark:hover:text-indigo-600 text-gray-500 dark:text-gray-400 text-sm mr-4 sm:mr-8 md:mr-8 lg:mr-8 xl:mr-8 pb-4 cursor-pointer hover:text-indigo-700">Inactive</li>
                    <li className="font-normal flex justify-center items-center rounded dark:hover:text-indigo-600 text-gray-500 dark:text-gray-400 text-sm mr-4 sm:mr-8 md:mr-8 lg:mr-8 xl:mr-8 pb-4 cursor-pointer hover:text-indigo-700">Inactive</li>
                    <li className="font-normal flex justify-center items-center rounded dark:hover:text-indigo-600 text-gray-500 dark:text-gray-400 text-sm pb-4 cursor-pointer hover:text-indigo-700">Inactive</li>
                </ul>
            </div>
            {/* Code block ends */}
        </div>
    );
};
export default Index;
