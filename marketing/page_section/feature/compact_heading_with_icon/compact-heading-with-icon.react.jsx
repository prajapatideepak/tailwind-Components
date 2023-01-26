import React from "react";
function Index() {
    return (
        <div className="pt-16">
            <div className="py-12 bg-gray-100">
                <div className="max-w-8xl mx-auto container">
                    <div className="flex flex-wrap items-center justify-center sm:justify-between">
                        <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
                            <div className="w-20 h-20 relative ml-6">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={3} y={4} width={18} height={4} rx={2} />
                                        <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                        <line x1={10} y1={12} x2={14} y2={12} />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                Ready to use
                                <br />
                                components
                            </h4>
                        </div>
                        <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
                            <div className="w-20 h-20 relative ml-6">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={9} />
                                        <path d="M9 12l2 2l4 -4" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                Coded by Developers
                                <br />
                                for Developers
                            </h4>
                        </div>
                        <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
                            <div className="w-20 h-20 relative ml-6">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="7 8 3 12 7 16" />
                                        <polyline points="17 8 21 12 17 16" />
                                        <line x1={14} y1={4} x2={10} y2={20} />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                Hight Quality UI
                                <br />
                                you can rely on
                            </h4>
                        </div>
                        <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
                            <div className="w-20 h-20 relative ml-6">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="text-white absolute bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={3} y={4} width={18} height={12} rx={1} />
                                        <line x1={7} y1={20} x2={17} y2={20} />
                                        <line x1={9} y1={16} x2={9} y2={20} />
                                        <line x1={15} y1={16} x2={15} y2={20} />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                The Last UI kit
                                <br />
                                you’ll ever need
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
