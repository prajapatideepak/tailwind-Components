import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 4 col grid for best view. */}
            {/* Card code block start */}
            <div className="mx-auto bg-white dark:bg-gray-800 shadow flex flex-col items-center p-8 rounded w-full">
                <div className="h-24 w-24 p-2 bg-gray-100 dark:bg-gray-700 rounded-full mb-1">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_25.png" alt className="h-full w-full object-cover overflow-hidden rounded-full" />
                </div>
                <p className="mb-1 text-gray-800 dark:text-gray-100 text-base">Timothy Jon Oliphant</p>
                <p className="mb-6 text-gray-600 dark:text-gray-400 text-xs">Los Angeles, California</p>
                <div className="flex w-full justify-between mb-8">
                    <div className="flex flex-col items-center w-4/12">
                        <p className="text-gray-600 dark:text-gray-400 text-2xl">82</p>
                        <p className="text-gray-800 dark:text-gray-100 text-sm">Reviews</p>
                    </div>
                    <div className="flex flex-col items-center w-4/12 border-r border-l border-gray-200">
                        <p className="text-gray-600 dark:text-gray-400 text-2xl">28</p>
                        <p className="text-gray-800 dark:text-gray-100 text-sm">Projects</p>
                    </div>
                    <div className="flex flex-col items-center w-4/12">
                        <p className="text-gray-600 dark:text-gray-400 text-2xl">42</p>
                        <p className="text-gray-800 dark:text-gray-100 text-sm">Approved</p>
                    </div>
                </div>
                <button className="bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-400 transition text-sm duration-150 ease-in-out hover:bg-gray-300 rounded text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-700 px-6 py-2 focus:outline-none">Send Message</button>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
