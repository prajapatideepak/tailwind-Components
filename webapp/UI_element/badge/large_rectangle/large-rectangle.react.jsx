import React from "react";
function Index() {
    return (
        <>
            <div className="px-6 flex items-center sm:flex-row justify-between flex-wrap">
                {/* Code block for gray border badge starts */}
                <div className="border border-gray-300 dark:border-gray-700 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">Badge</span>
                </div>
                {/* Code block ends */}
                {/* Code block for gray background badge starts */}
                <div className="bg-gray-200 dark:bg-gray-800 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">Badge</span>
                </div>
                {/* Code block ends */}
                {/* Code block for indigo background badge starts */}
                <div className="bg-indigo-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span className="text-xs text-indigo-700 font-normal">Badge</span>
                </div>
                {/* Code block ends */}
                {/* Code block for yellow background badge starts */}
                <div className="bg-yellow-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span className="text-xs text-yellow-500 font-normal">Badge</span>
                </div>
                {/* Code block ends */}
                {/* Code block for red background badge starts */}
                <div className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span className="text-xs text-red-500 font-normal">Badge</span>
                </div>
                {/* Code block ends */}
                {/* Code block for green background badge starts */}
                <div className="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span className="text-xs text-green-500 font-normal">Badge</span>
                </div>
                {/* Code block ends */}
                {/* Code block for blue background badge starts */}
                <div className="bg-blue-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                    <span className="text-xs text-blue-500 font-normal">Badge</span>
                </div>
                {/* Code block ends */}
            </div>
        </>
    );
}
export default Index;
