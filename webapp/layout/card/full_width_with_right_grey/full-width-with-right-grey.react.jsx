import React from "react";
function Index() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
                <div className="w-full lg:w-2/3 h-64 dark:bg-gray-800" />
                <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100" />
            </div>
        </div>
    );
}
export default Index;
