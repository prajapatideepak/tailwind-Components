import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 6 col grid for best view. */}
            {/* Card code block start */}
            <div className="bg-white dark:bg-gray-800 shadow rounded w-full pb-6">
                <h2 className="p-4 sm:p-8 text-lg font-bold text-gray-800 dark:text-gray-100">Your Subscriptions</h2>
                <div className="py-4 px-5 border-gray-200 border rounded mx-4 sm:mx-8 mb-6">
                    <div className="flex items-enter mb-5 justify-between">
                        <div className="flex items-center">
                            <div className="mr-4 w-12 h-12 rounded shadow">
                                <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_3.png" alt="E" />
                            </div>
                            <div>
                                <h3 className="mb-2 sm:mb-1 text-gray-800 dark:text-gray-100 text-base font-normal leading-4">New York Times</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-xs leading-3">Since: 27 February, 2020</p>
                            </div>
                        </div>
                        <div className="cursor-pointer rounded-full relative shadow-sm">
                            <input defaultChecked type="checkbox" name="toggle" id="toggle1" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label htmlFor="toggle1" className="toggle-label bg-gray-200 dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <p className="font-normal text-sm flex dark:text-gray-400 items-center">
                            Status: <span className="text-indigo-700 dark:text-indigo-600 ml-1">Active</span>
                        </p>
                        <p className="my-1 sm:my-0 mx-0 sm:mx-8 font-normal text-sm flex dark:text-gray-400 items-center">
                            Articles Read: <span className="text-indigo-700 dark:text-indigo-600 ml-1">25</span>
                        </p>
                        <p className="font-normal text-sm flex dark:text-gray-400 items-center">
                            Articles Saved: <span className="text-indigo-700 dark:text-indigo-600 ml-1">08</span>
                        </p>
                    </div>
                </div>
                <div className="py-4 px-5 border-gray-200 border rounded mx-4 sm:mx-8 mb-6">
                    <div className="flex items-enter mb-4 justify-between">
                        <div className="flex items-center">
                            <div className="mr-4 w-12 h-12 rounded shadow">
                                <img className="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_4.png" alt="E" />
                            </div>
                            <div>
                                <h3 className="mb-2 sm:mb-1 text-gray-800 dark:text-gray-100 text-base font-normal leading-4">Boston Consulting</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-xs leading-3">Since: 27 February, 2020</p>
                            </div>
                        </div>
                        <div className="cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="toggle" id="toggle2" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label htmlFor="toggle2" className="toggle-label bg-gray-200 dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <p className="font-normal text-sm flex dark:text-gray-400 items-center">
                            Status: <span className="text-indigo-700 dark:text-indigo-600 ml-1">Inactive</span>
                        </p>
                        <p className="my-1 sm:my-0 mx-0 sm:mx-8 font-normal text-sm flex dark:text-gray-400 items-center">
                            Articles Read: <span className="text-indigo-700 dark:text-indigo-600 ml-1">25</span>
                        </p>
                        <p className="font-normal text-sm flex dark:text-gray-400 items-center">
                            Articles Saved: <span className="text-indigo-700 dark:text-indigo-600 ml-1">08</span>
                        </p>
                    </div>
                </div>
                <div className="py-4 px-5 border-gray-200 border rounded mx-4 sm:mx-8">
                    <div className="flex items-enter mb-4 justify-between">
                        <div className="flex items-center">
                            <div className="mr-4 w-12 h-12 rounded shadow">
                                <img className="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_5.png" alt="E" />
                            </div>
                            <div>
                                <h3 className="mb-2 sm:mb-1 text-gray-800 dark:text-gray-100 text-base font-normal leading-4">The Economist</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-xs leading-3">Since: 27 February, 2020</p>
                            </div>
                        </div>
                        <div className="cursor-pointer rounded-full relative shadow-sm">
                            <input defaultChecked type="checkbox" name="toggle" id="toggle3" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label htmlFor="toggle3" className="toggle-label bg-gray-200 dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <p className="font-normal text-sm flex dark:text-gray-400 items-center">
                            Status: <span className="text-indigo-700 dark:text-indigo-600 ml-1">Active</span>
                        </p>
                        <p className="my-1 sm:my-0 sm:mx-8 mx-0 font-normal text-sm flex dark:text-gray-400 items-center">
                            Articles Read: <span className="text-indigo-700 dark:text-indigo-600 ml-1">25</span>
                        </p>
                        <p className="font-normal text-sm flex dark:text-gray-400 items-center">
                            Articles Saved: <span className="text-indigo-700 dark:text-indigo-600 ml-1">08</span>
                        </p>
                    </div>
                </div>
                <style>
                    {`.checkbox:checked {
                                    /* Apply class right-0*/
                                    right: 0;
                                }
                                .checkbox:checked + .toggle-label {
                                    /* Apply class bg-indigo-700 */
                                    background-color: #4c51bf;
                                }`}
                </style>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
