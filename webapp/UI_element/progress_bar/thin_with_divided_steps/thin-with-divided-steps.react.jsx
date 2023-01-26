import React from "react";
function Index() {
    return (
        <>
            <div className="w-11/12 md:w-2/6 mx-auto">
                <div className="flex justify-between items-center pb-1">
                    <p className="text-xs pb-1 text-gray-500 font-bold">Step 2: Setup</p>
                    <p className="text-xs font-bold text-gray-500">Total: 3 Steps</p>
                </div>
                <div className="flex items-center">
                    <div className="w-1/3 bg-indigo-700 h-1 rounded-tl rounded-bl mr-1" />
                    <div className="w-1/3 bg-gray-200 h-1 mr-1 relative">
                        <div className="absolute right-0">
                            <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-4 -mr-5">
                                <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                <polygon id="Triangle" points="20 0 28 8 12 8" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-indigo-700 text-xs font-bold">ETA: 3 mins</p>
                            </div>
                        </div>
                        <div className="h-1 w-1/6 bg-indigo-700" />
                    </div>
                    <div className="w-1/3 bg-gray-200 h-1 rounded-tr rounded-br" />
                </div>
            </div>
        </>
    );
}
export default Index;
