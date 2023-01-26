import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 bg-gray-200 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 rounded shadow">
                    <div className="border-l-4 border-indigo-300 flex items-center justify-between p-3">
                        <h3 className="leading-4 text-gray-800 dark:text-gray-100 font-normal text-base">Total Posts</h3>
                        <h2 className="text-gray-800 dark:text-gray-100 text-2xl leading-normal font-bold">2,330</h2>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow">
                    <div className="border-l-4 border-yellow-300 flex items-center justify-between p-3">
                        <h3 className="leading-4 text-gray-800 dark:text-gray-100 font-normal text-base">Profile Views</h3>
                        <h2 className="text-gray-800 dark:text-gray-100 text-2xl leading-normal font-bold">209K</h2>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow">
                    <div className="border-l-4 border-green-300 flex items-center justify-between p-3">
                        <h3 className="leading-4 text-gray-800 dark:text-gray-100 font-normal text-base">Followers</h3>
                        <h2 className="text-gray-800 dark:text-gray-100 text-2xl leading-normal font-bold">20.2K</h2>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow">
                    <div className="border-l-4 border-red-300 flex items-center justify-between p-3">
                        <h3 className="leading-4 text-gray-800 dark:text-gray-100 font-normal text-base">Following</h3>
                        <h2 className="text-gray-800 dark:text-gray-100 text-2xl leading-normal font-bold">8,340</h2>
                    </div>
                </div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
