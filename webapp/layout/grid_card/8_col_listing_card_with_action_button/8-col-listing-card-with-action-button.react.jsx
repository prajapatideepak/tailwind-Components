import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 8 col grid for best view. */}
            {/* Card code block start */}
            <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
                <div className="py-5 px-10 border-b border-gray-200 flex justify-between items-center">
                    <p className="font-bold text-lg text-gray-800 dark:text-gray-100">Publishers</p>
                    <button className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none">Add New</button>
                </div>
                <div className="py-10 px-6 flex flex-wrap justify-between">
                    <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_8.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">The New York Times</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_9.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Harvard Business Review</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_10.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Business Insider US</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 sm:w-2/5 w-full mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_12.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Boston Consulting Group</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 sm:w-2/5 w-full xl:mb-0 mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_15.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">The New York Times</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 sm:w-2/5 w-full xl:mb-0 mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_16.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Harvard Business Review</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 sm:w-2/5 w-full xl:mb-0 mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_17.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Business Insider US</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 sm:w-2/5 w-full xl:mb-0 mb-12 cursor-pointer">
                        <div className="flex flex-col items-center">
                            <div className="mb-3 h-20 w-20">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_18.png" alt className="h-full w-full object-cover rounded" />
                            </div>
                            <p className="text-sm mb-1 text-gray-800 dark:text-gray-100">Boston Consulting Group</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Articles: 25</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
