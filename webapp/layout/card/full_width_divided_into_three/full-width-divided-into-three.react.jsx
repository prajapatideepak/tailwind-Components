import React from "react";
function Index() {
    return (
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full">
            <div className="w-full sm:w-1/3 h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800" />
            <div className="w-full sm:w-1/3 h-64 shadow bg-white dark:bg-gray-800" />
            <div className="w-full sm:w-1/3 h-64 rounded-b sm:rounded-b-none shadow bg-white dark:bg-gray-800" />
        </div>
    );
}
export default Index;
