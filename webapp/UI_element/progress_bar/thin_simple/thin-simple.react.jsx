import React from "react";
function Index() {
    return (
        <>
            <div className="container mx-auto flex justify-center">
                <div className="w-11/12 md:w-2/6 h-1 bg-gray-200 rounded">
                    <div className="w-7/12 bg-indigo-700 h-1 rounded relative">
                        <div className="absolute right-0">
                            <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-3 -mr-5">
                                <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                <polygon id="Triangle" points="20 0 28 8 12 8" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-indigo-700 text-xs font-bold">58%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
