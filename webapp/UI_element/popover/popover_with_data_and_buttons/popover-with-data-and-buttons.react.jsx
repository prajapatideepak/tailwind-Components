import React from "react";
function Index() {
    return (
        <>
            {/* Code block starts */}
            <div id="popover" className="transition duration-150 ease-in-out -mt-24 absolute top-0 left-0 ml-20 w-full sm:w-1/2">
                <div className="w-full bg-white rounded shadow-2xl">
                    <div className="relative bg-gray-200 flex items-center rounded-t py-3 px-3 xl:px-6">
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
                        <div className="mr-4 w-12 h-12 rounded shadow">
                            <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_2.png" alt="avatar" />
                        </div>
                        <div>
                            <h3 className="mb-2 sm:mb-1 text-gray-800 text-sm lg:text-base font-normal leading-4">Andres Berlin</h3>
                            <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
                        </div>
                    </div>
                    <div className="w-full h-full px-3 xl:px-6 pt-3 pb-5">
                        <h5 className="text-sm text-gray-800 font-bold mb-5">UX Team Skype Session</h5>
                        <div className="flex items-center mb-5 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={9} />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <p className="text-gray-600 text-xs font-normal ml-2">From 9am to 10am</p>
                        </div>
                        <div className="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={5} width={16} height={16} rx={2} />
                                <line x1={16} y1={3} x2={16} y2={7} />
                                <line x1={8} y1={3} x2={8} y2={7} />
                                <line x1={4} y1={11} x2={20} y2={11} />
                                <line x1={11} y1={15} x2={12} y2={15} />
                                <line x1={12} y1={15} x2={12} y2={18} />
                            </svg>
                            <p className="text-gray-600 text-xs font-normal ml-2">Every Tuesday &amp; Thursday</p>
                        </div>
                        <div className="bg-yellow-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                            <span className="text-xs text-yellow-600 font-normal">In Progress</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Code block ends */}
        </>
    );
}
export default Index;
