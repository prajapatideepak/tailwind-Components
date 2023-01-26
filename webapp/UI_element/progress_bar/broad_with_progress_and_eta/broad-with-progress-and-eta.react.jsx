import React from "react";
function Index() {
    return (
        <>
            <div className="w-11/12 md:w-2/6 mx-auto">
                <p className="text-xs pb-1 text-gray-500 font-bold">Your Progress</p>
                <div className="flex justify-between items-center pb-1">
                    <p className="text-sm text-indigo-700 font-bold">63% Complete</p>
                    <p className="text-xs font-bold text-gray-500">ETA: 3 mins</p>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                    <div className="w-7/12 bg-indigo-700 h-2 rounded relative" />
                </div>
            </div>
        </>
    );
}
export default Index;
