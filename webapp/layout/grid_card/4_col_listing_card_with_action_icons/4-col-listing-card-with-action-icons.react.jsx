import React from "react";
function Index() {
    return (
        <>
            {/* Card is full width. Use in 4 col grid for best view. */}
            {/* Card code block start */}
            <div className="bg-white dark:bg-gray-800 shadow rounded mx-auto pb-4 lg:pb-8 w-full">
                <h2 className="p-4 lg:p-8 text-lg leding-4 font-bold text-gray-800 dark:text-gray-100">Approved Payment Modes</h2>
                <div className="relative bg-gray-100 dark:bg-gray-700 flex rounded mx-4 lg:mx-8 mb-4">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_23.png" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800 dark:text-gray-100">Ending with 4242</h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">Last updated on 14 March 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-5 h-5 absolute inset-0 m-auto mt-2 lg:mt-4 mr-2 lg:mr-4 text-indigo-700 dark:text-indigo-600 dark:hover:text-indigo-500 hover:text-indigo-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1={16} y1={5} x2={19} y2={8} />
                        </svg>
                    </div>
                </div>
                <div className="relative bg-gray-100 dark:bg-gray-700 flex rounded mx-4 lg:mx-8 mb-4">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_24.png" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800 dark:text-gray-100">Ending with 4242</h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">Last updated on 14 March 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-5 h-5 absolute inset-0 m-auto mt-2 lg:mt-4 mr-2 lg:mr-4 text-indigo-700 dark:text-indigo-600 dark:hover:text-indigo-500 hover:text-indigo-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1={16} y1={5} x2={19} y2={8} />
                        </svg>
                    </div>
                </div>
                <div className="relative bg-gray-100 dark:bg-gray-700 flex rounded mx-4 lg:mx-8">
                    <div className="border-r border-gray-200 flex items-center justify-center">
                        <div className="w-20 h-20 px-4 py-5">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_26.png" alt="master-card" />
                        </div>
                    </div>
                    <div className="flex pl-4 py-4 lg:py-3 justify-between w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800 dark:text-gray-100">Ending with 4242</h4>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <p className="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">Expires 06/21 -</p>
                                <p className="text-xs leading-5 font-normal text-gray-800 dark:text-gray-100">Last updated on 14 March 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-5 h-5 absolute inset-0 m-auto mt-2 lg:mt-4 mr-2 lg:mr-4 text-indigo-700 dark:text-indigo-600 dark:hover:text-indigo-500 hover:text-indigo-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1={16} y1={5} x2={19} y2={8} />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
