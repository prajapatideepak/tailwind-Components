import React from "react";
function Index() {
    return (
        <>
            {/* Code block starts */}
            <div id="popover" className="transition duration-150 ease-in-out -mt-14 absolute top-0 left-0 ml-20 w-full sm:w-1/2">
                <div className="w-full bg-white rounded shadow-2xl">
                    <div className="relative bg-gray-200 flex items-center justify-between rounded-t py-3 px-3 xl:px-6">
                        <div className="flex items-center">
                            <svg className="absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className="text-sm lg:text-base text-gray-800 font-normal leading-normal tracking-normal">User Interface (UI)</p>
                        </div>
                        <p className="text-sm text-gray-600 font-normal">:design</p>
                    </div>
                    <div className="w-full h-full px-3 xl:px-6 py-5">
                        <p className="text-gray-600 font-normal text-xs w-11/12 mb-4">The responsibility to communicate that information rests on the shoulders of the marketing and sales teams.</p>
                        <p className="text-gray-600 font-normal text-xs w-11/12 mb-4">Typically, marketing has a predominant role at the beginning of a potential sale.</p>
                        <p className="text-xs font-normal text-gray-800">Similar Terms</p>
                        <p className="mt-1 text-indigo-700 text-xs">visual design &nbsp;|&nbsp; gui &nbsp;|&nbsp; user experience</p>
                    </div>
                </div>
            </div>
            {/* Code block ends */}
        </>
    );
}
export default Index;
