import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                <div className="max-w-sm">
                    <div className="p-4 bg-gray-100 shadow rounded-tl rounded-tr dark:bg-gray-700">
                        <div className="flex items-center">
                            <div className="w-28 h-28 rounded relative">
                                <img src="https://i.ibb.co/30t3mFh/3.png" alt="img" />
                                <div className="w-9 h-9 bg-indigo-700 rounded absolute top-0 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={6} cy={17} r={3} />
                                        <circle cx={16} cy={17} r={3} />
                                        <polyline points="9 17 9 4 19 4 19 17" />
                                        <line x1={9} y1={8} x2={19} y2={8} />
                                    </svg>
                                </div>
                            </div>
                            <div className="sm:pl-12 pl-5 pr-4">
                                <p className="text-xl font-semibold leading-5 dark:text-gray-100 text-gray-800">Sweet&nbsp;melody</p>
                                <p className="text-sm leading-4 pt-2 dark:text-gray-100 text-gray-800">Little Mix</p>
                                <p className="text-sm leading-4 pt-6 dark:text-gray-400 text-gray-500">Winter Hits 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow dark:bg-gray-800 pt-5 px-4 rounded-b">
                        <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 uppercase">up Next</p>
                        <div className="flex items-center pt-5 pb-4 border-b border-gray-200">
                            <div className="w-9 h-9 rounded">
                                <img src="https://i.ibb.co/n8SCrpx/4.png" alt="img" className="w-full h-full" />
                            </div>
                            <div className="flex flex-col pl-6">
                                <p className="text-base font-semibold leading-4 dark:text-gray-100 text-gray-800">Midnight sky</p>
                                <p className="text-xs leading-3 text-gray-800 dark:text-gray-100 pt-2">Miley Cyrus</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-5 pb-4">
                            <div className="w-9 h-9 rounded">
                                <img className="w-full h-full" src="https://i.ibb.co/SdyYvbB/5.png" alt="img" />
                            </div>
                            <div className="flex flex-col pl-6">
                                <p className="text-base font-semibold leading-4 dark:text-gray-100 text-gray-800">Midnight sky</p>
                                <p className="text-xs leading-3 text-gray-800 dark:text-gray-100 pt-2">Miley Cyrus</p>
                            </div>
                        </div>
                        <div className="py-5 flex items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx={14} cy={6} r={2} />
                                <line x1={4} y1={6} x2={12} y2={6} />
                                <line x1={16} y1={6} x2={20} y2={6} />
                                <circle cx={8} cy={12} r={2} />
                                <line x1={4} y1={12} x2={6} y2={12} />
                                <line x1={10} y1={12} x2={20} y2={12} />
                                <circle cx={17} cy={18} r={2} />
                                <line x1={4} y1={18} x2={15} y2={18} />
                                <line x1={19} y1={18} x2={20} y2={18} />
                            </svg>
                            <p className="text-xs leading-3 text-indigo-700 pl-1">See playlist</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
