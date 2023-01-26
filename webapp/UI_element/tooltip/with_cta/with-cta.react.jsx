import React, { useState } from "react";
function Index() {
    const [tooltipStatus, setTooltipStatus] = useState(0);
    return (
        <>
            <div className="flex-col md:flex-row flex items-center md:justify-center">
                {/*Code Block for white tooltip starts*/}
                <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                    <div className="mb-3 ml-2 cursor-pointer">
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                    </div>
                    {tooltipStatus == 1 && (
                        <div role="tooltip" className="z-20 absolute transition duration-150 ease-in-out top-0 mt-8 shadow-lg pt-4 pr-5 pl-3 pb-3 bg-white text-gray-600 rounded w-56">
                            <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="#FFFFFF">
                                        <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                            <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className="text-xs text-gray-600 leading-4 pb-1">Don’t know whats going on? this is where you can get tutorials</p>
                            <p className="text-xs font-bold text-indigo-700 cursor-pointer">Got it</p>
                        </div>
                    )}{" "}
                </div>
                {/*Code Block for white tooltip ends*/}
                {/*Code Block for indigo tooltip starts*/}
                <div className="relative my-20 md:my-0 md:mx-40" onMouseEnter={() => setTooltipStatus(2)} onMouseLeave={() => setTooltipStatus(0)}>
                    <div className="mb-3 ml-2 cursor-pointer">
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                    </div>
                    {tooltipStatus == 2 && (
                        <div role="tooltip" className="z-20 absolute transition duration-150 ease-in-out top-0 mt-8 shadow-lg pt-4 pr-5 pl-3 pb-3 bg-indigo-700 text-gray-600 rounded w-56">
                            <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="#4c51bf">
                                        <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                            <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className="text-xs text-white leading-4 pb-1">Don’t know whats going on? this is where you can get tutorials</p>
                            <p className="text-xs font-bold text-white cursor-pointer">Got it</p>
                        </div>
                    )}{" "}
                </div>
                {/*Code Block for indigo tooltip ends*/}
                {/*Code Block for gray tooltip starts*/}
                <div className="relative" onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
                    <div className="mb-3 ml-2 cursor-pointer">
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                    </div>
                    {tooltipStatus == 3 && (
                        <div role="tooltip" className="z-20 absolute transition duration-150 ease-in-out top-0 mt-8 shadow-lg pt-4 pr-5 pl-3 pb-3 bg-gray-800 text-gray-600 rounded w-56">
                            <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="#2D3748">
                                        <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                                            <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className="text-xs text-white leading-4 pb-1">Don’t know whats going on? this is where you can get tutorials</p>
                            <p className="text-xs font-bold text-white cursor-pointer">Got it</p>
                        </div>
                    )}
                </div>
                {/*Code Block for gray tooltip ends*/}
            </div>
        </>
    );
}
export default Index;
