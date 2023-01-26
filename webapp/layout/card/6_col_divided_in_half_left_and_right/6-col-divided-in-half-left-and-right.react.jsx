import React from "react";
function Index() {
    return (
        <div className="flex flex-wrap lg:flex-no-wrap items-center justify-between w-full">
            {/* Code block starts */}
            <div className="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 rounded dark:bg-gray-800 bg-white shadow">
                <div className="w-full lg:w-1/2 h-64 dark:border-gray-800 border-b lg:border-t-0 lg:border-b-0 lg:border-r lg:border-l rounded-l dark:bg-gray-700 bg-gray-100" />
                <div className="w-full lg:w-1/2 h-64" />
            </div>
            {/* Code block starts */}
            {/* Code block ends */}
            <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded dark:bg-gray-800 bg-white shadow">
                <div className="w-full lg:w-1/2 h-64" />
                <div className="w-full lg:w-1/2 dark:border-gray-800 h-64 border-t lg:border-t-0 lg:border-b-0 lg:border-r lg:border-l rounded-r dark:bg-gray-700 bg-gray-100" />
            </div>
            {/* Code block ends */}
        </div>
    );
}
export default Index;
