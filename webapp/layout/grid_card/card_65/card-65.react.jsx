import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                <div className="max-w-xs">
                    <div className="bg-gray-100 shadow rounded-tl rounded-tr dark:bg-gray-700">
                        <img src="https://i.ibb.co/brGrW3g/8.png" alt="bg-img" className="w-full h-full" />
                    </div>
                    <div className="bg-white shadow dark:bg-gray-800 px-5 rounded-b">
                        <p className="w-48 text-base font-semibold leading-5 dark:text-gray-100 pt-4 text-gray-800">A Georgian Masterpiece in the Heart</p>
                        <div className="flex items-center pt-2">
                            <div className="flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x={4} y={5} width={16} height={16} rx={2} />
                                        <line x1={16} y1={3} x2={16} y2={7} />
                                        <line x1={8} y1={3} x2={8} y2={7} />
                                        <line x1={4} y1={11} x2={20} y2={11} />
                                        <rect x={8} y={15} width={2} height={2} />
                                    </svg>
                                </div>
                                <p className="text-xs leading-3 text-indigo-700 pl-1">01 Feb 2020</p>
                            </div>
                            <div className="flex items-center pl-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={12} cy={12} r={9} />
                                        <polyline points="12 7 12 12 15 15" />
                                    </svg>
                                </div>
                                <p className="text-xs leading-3 text-indigo-700 pl-1">14:00</p>
                            </div>
                            <div className="flex items-center pl-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
                                    </svg>
                                </div>
                                <p className="text-xs leading-3 text-indigo-700 pl-1">8° F</p>
                            </div>
                        </div>
                        <p className="py-2 text-xs leading-4 dark:text-gray-400 text-gray-500">When I first got into the advertising business, I was looking for the magical combination</p>
                        <div className="flex cursor-pointer py-4">
                            <p className="text-xs leading-1 text-indigo-700 pr-1">Read more</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <line x1={15} y1={16} x2={19} y2={12} />
                                <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
