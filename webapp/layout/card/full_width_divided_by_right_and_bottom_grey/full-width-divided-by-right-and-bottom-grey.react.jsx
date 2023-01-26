import React from "react";
function Index() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="w-full rounded h-full bg-white dark:bg-gray-800 shadow">
                <div className="flex flex-col lg:flex-row w-full items-center">
                    <div className="w-full lg:w-2/3 h-64 rounded-l" />
                    <div className="w-full lg:w-1/3 h-24 lg:h-64 border-t lg:border-t-0 lg:border-l dark:border-gray-500 lg:rounded-r bg-gray-100 dark:bg-gray-700" />
                </div>
                <div className="w-full h-16 lg:h-24 bg-gray-200 dark:bg-gray-800 border-t border-gray-400 dark:border-gray-500 rounded-b" />
            </div>
        </div>
    );
}
export default Index;
