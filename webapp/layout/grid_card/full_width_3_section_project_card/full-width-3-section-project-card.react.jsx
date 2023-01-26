import React from "react";
function Index() {
    return (
        <>
            <div className="w-full bg-gray-200 dark:bg-gray-900 py-10">
                <div className="container mx-auto px-6 flex items-start justify-center">
                    <div className="w-full">
                        {/* Card is full width. Use in 12 col grid for best view. */}
                        {/* Card code block start */}
                        <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
                            <div className="w-full lg:w-1/3 p-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded shadow">
                                        <img className="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_24.png" alt="logo" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">Fitbit Incorporation</h5>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">San Diego, California</p>
                                    </div>
                                </div>
                                <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-1">User Experience Revamp</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">To many naive users of the platform, a redesign may look just like a facelift. No more, no less. However, for a User Experience designer, the entire redesign process means much more than a lot of research, meticulous planning, iterating, and gallons of coffee!</p>
                                <div className="flex items-center mt-6 w-full">
                                    <div className="shadow border-2 border-white rounded-full w-8 h-8">
                                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1564061170517-d3907caa96ea.jfif" alt="avatar" />
                                    </div>
                                    <div className="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
                                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1548958921-c5c0fe1b307d.jfif" alt="avatar" />
                                    </div>
                                    <div className="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
                                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1566753323558-f4e0952af115.jfif" alt="avatar" />
                                    </div>
                                    <div className="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
                                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/beautiful-woman-medium-shot-with-pink-background_23-2148316670.jpg" alt="avatar" />
                                    </div>
                                    <div className="-ml-2 shadow border-2 border-white rounded-full w-8 h-8">
                                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/excited-happy-young-pretty-woman_171337-2006.jpg" alt="avatar" />
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal ml-2">+2 more participants</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
                                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                                    <div className="text-xs text-center w-full bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">Start Date: 22 Jun, 2020</div>
                                    <div className="mt-4 text-center w-full lg:mt-0 text-xs bg-red-200 text-red-500 rounded font-medium p-3">End Date: 03 Dec, 2020</div>
                                </div>
                                <div className="mt-6 mb-8 w-full bg-gray-100 dark:bg-gray-700 rounded p-4 relative">
                                    <ul>
                                        <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">- Visual QA for all design components</li>
                                        <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal my-4">- UX overview of new product launch</li>
                                        <li className="text-xs text-gray-600 dark:text-gray-400 font-normal tracking-normal">- Visual QA for all design components</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">24</h2>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">Milestones</p>
                                    </div>
                                    <div>
                                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">03</h2>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">Teams Assigned</p>
                                    </div>
                                    <div>
                                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-6 mb-1 text-center">14</h2>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">Tasks Pending</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-3 tracking-normal">User Experience Research</p>
                                    <p className="text-xs text-indigo-700 dark:text-indigo-600 font-normal leading-3 tracking-normal">7/12</p>
                                </div>
                                <div className="relative mb-8">
                                    <hr className="h-1 rounded-sm bg-gray-200" />
                                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-400" />
                                </div>
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-3 tracking-normal">Component Wireframing</p>
                                    <p className="text-xs text-indigo-700 dark:text-indigo-600 font-normal leading-3 tracking-normal">3/12</p>
                                </div>
                                <div className="relative mb-8">
                                    <hr className="h-1 rounded-sm bg-gray-200" />
                                    <hr className="absolute top-0 h-1 w-3/12 rounded-sm bg-indigo-400" />
                                </div>
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-3 tracking-normal">Quality Assurance</p>
                                    <p className="text-xs text-indigo-700 dark:text-indigo-600 font-normal leading-3 tracking-normal">9/12</p>
                                </div>
                                <div className="relative mb-6 sm:mb-12">
                                    <hr className="h-1 rounded-sm bg-gray-200" />
                                    <hr className="absolute top-0 h-1 w-9/12 rounded-sm bg-indigo-400" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 tracking-normal">Earnings</p>
                                        <h2 className="text-sm xl:text-lg text-gray-600 dark:text-gray-400 font-bold tracking-normal">$357,655</h2>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 tracking-normal">Expenses</p>
                                        <h2 className="text-sm xl:text-lg text-gray-600 dark:text-gray-400 font-bold tracking-normal">$189,955</h2>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-800 dark:text-gray-100 font-normal mb-1 tracking-normal">Net Cash</p>
                                        <h2 className="text-sm xl:text-lg text-gray-600 dark:text-gray-400 font-bold tracking-normal">$888,546</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card code block end */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Index;
