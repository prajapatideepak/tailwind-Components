import React from "react";
function Index() {
    return (
        <>
            <div className="px-6 flex items-center sm:flex-row flex-wrap">
                {/* Code block starts */}
                <div className="w-12 h-12 mb-4 lg:mb-0 bg-cover rounded-full mr-2">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="w-12 h-12 mb-4 lg:mb-0 bg-cover rounded-full mr-4 relative">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                    <div className="h-2 w-2 bg-green-400 rounded-full absolute right-0 bottom-0 mt-2 mr-1 border border-white"></div>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="w-12 h-12 mb-4 lg:mb-0 bg-cover rounded-full mr-4 relative">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                    <div className="h-2 w-2 bg-green-400 rounded-full absolute right-0 top-0 mt-2 border border-white"></div>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="w-12 h-12 mb-4 lg:mb-0 bg-cover rounded-full mr-2 flex justify-center items-center bg-gray-100 dark:bg-gray-800 shadow-md">
                    <p className="text-indigo-700 font-bold">RS</p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="w-12 h-12 mb-4 lg:mb-0 bg-cover rounded-full mr-4 relative flex justify-center items-center bg-gray-100 dark:bg-gray-800 shadow-md">
                    <div className="h-2 w-2 bg-green-400 rounded-full absolute right-0 bottom-0 mt-2 mr-1 border border-white"></div>
                    <p className="text-indigo-700 font-bold">RS</p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="w-12 h-12 mb-4 lg:mb-0 bg-cover rounded-full mr-4 relative flex justify-center items-center bg-gray-100 dark:bg-gray-800 shadow-md">
                    <div className="h-2 w-2 bg-green-400 rounded-full absolute right-0 top-0 mt-2 border border-white"></div>
                    <p className="text-indigo-700 font-bold">RS</p>
                </div>
                {/* Code block ends */}
            </div>
        </>
    );
}
export default Index;
