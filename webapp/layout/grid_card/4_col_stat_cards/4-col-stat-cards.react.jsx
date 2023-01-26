import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 4 col grid for best view. */}
            {/* Card code block start */}
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                        <div className="flex items-center">
                            <div className="p-4 bg-blue-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2B6CB0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={9} y1={15} x2={15} y2={9} />
                                    <circle cx="9.5" cy="9.5" r=".5" />
                                    <circle cx="14.5" cy="14.5" r=".5" />
                                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">2,330</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center pl-3 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="3 17 9 11 13 15 21 7" />
                                    <polyline points="14 7 21 7 21 14" />
                                </svg>
                                <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                            </div>
                            <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Increase</p>
                        </div>
                    </div>
                    <div className="relative mb-3">
                        <hr className="h-1 rounded-sm bg-gray-200" />
                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700 border-indigo-700 left-0" />
                    </div>
                    <h4 className="text-base text-gray-600 dark:text-gray-400 font-normal tracking-normal leading-5">Yearly Goal</h4>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                        <div className="flex items-center">
                            <div className="p-4 bg-yellow-200 rounded-lg text-green-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-click" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#C05621" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={3} y1={12} x2={6} y2={12} />
                                    <line x1={12} y1={3} x2={12} y2={6} />
                                    <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
                                    <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
                                    <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">2,330</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Avg Clicks</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-down" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="3 7 9 13 13 9 21 17" />
                                    <polyline points="21 10 21 17 14 17" />
                                </svg>
                                <p className="text-red-400 text-xs tracking-wide font-bold leading-normal pl-1">3.4%</p>
                            </div>
                            <p className="font-normal text-right text-xs leading-4 text-red-400 tracking-normal pb-1">Decrease</p>
                        </div>
                    </div>
                    <div className="relative mb-3">
                        <hr className="h-1 rounded-sm bg-gray-200" />
                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700 border-indigo-700 left-0" />
                    </div>
                    <h4 className="text-base text-gray-600 dark:text-gray-400 font-normal tracking-normal leading-5">Yearly Goal</h4>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                        <div className="flex items-center">
                            <div className="p-4 bg-green-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#276749" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={3} />
                                    <line x1={3} y1={10} x2={21} y2={10} />
                                    <line x1={7} y1={15} x2="7.01" y2={15} />
                                    <line x1={11} y1={15} x2={13} y2={15} />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">2,330</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Profit Earned</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center pl-3 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="3 17 9 11 13 15 21 7" />
                                    <polyline points="14 7 21 7 21 14" />
                                </svg>
                                <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">12%</p>
                            </div>
                            <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal pb-1">Increase</p>
                        </div>
                    </div>
                    <div className="relative mb-3">
                        <hr className="h-1 rounded-sm bg-gray-200" />
                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700 border-indigo-700 left-0" />
                    </div>
                    <h4 className="text-base text-gray-600 dark:text-gray-400 font-normal tracking-normal leading-5">Yearly Goal</h4>
                </div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
