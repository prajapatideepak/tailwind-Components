import { useState } from "react";

const Index = () => {
    const [isList, setIsList] = useState(false);

    return (
        <div>
            <div onClick={() => setIsList(!isList)} className="cursor-pointer w-52 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between">
                Select Location(s)
                <div>
                    {isList ? (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                            </svg>
                        </div>
                    ) : (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {isList && (
                <div className="w-52 mt-2 p-4 bg-white shadow rounded">
                    <div className="flex items-center justify-between">
                        <div className="w-32 flex items-center p-2 bg-gray-100 rounded-md">
                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8.5C6.933 8.5 8.5 6.933 8.5 5C8.5 3.067 6.933 1.5 5 1.5C3.067 1.5 1.5 3.067 1.5 5C1.5 6.933 3.067 8.5 5 8.5Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 10.5L7.5 7.5" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input type="search1" className="w-full h-full text-sm bg-transparent focus:outline-none pl-2" />
                        </div>
                        <div className="w-8 h-8 ml-2 border rounded-md cursor-pointer hover:bg-gray-100 bg-transparent border-gray-200 flex items-center justify-center">
                            <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1L6.5 6L1.5 11" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm leading-normal ml-2 text-gray-800">Germany</p>
                    </div>
                    <div className="mt-3 flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm leading-normal ml-2 text-gray-800">Crotia</p>
                    </div>
                    <div className="mt-3 flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm leading-normal ml-2 text-gray-800">Canada</p>
                    </div>
                    <div className="mt-3 flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm leading-normal ml-2 text-gray-800">Australia</p>
                    </div>
                    <div className="mt-3 flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                            <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm leading-normal ml-2 text-gray-800">New Zealand</p>
                    </div>
                    <button className="focus:outline-none text-xs bg-indigo-100 hover:bg-indigo-200 rounded-md mt-4 font-medium py-2 w-full leading-3 text-indigo-700">Apply</button>
                </div>
            )}
            <style>
                {`.checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    );
};
export default Index;
