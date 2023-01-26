import React from "react";
function Index() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white  shadow">
                <div className="w-full lg:w-1/3 h-24 lg:h-64 dark:border-gray-700 border-b lg:border-b-0 lg:border-r lg:border-l lg:rounded-l bg-gray-100 dark:bg-gray-700" />
                <div className="w-full lg:w-2/3 h-64 dark:bg-gray-800" />
            </div>
        </div>
    );
}
export default Index;
