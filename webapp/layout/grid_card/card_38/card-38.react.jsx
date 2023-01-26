import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                <div className="max-w-sm bg-white dark:bg-gray-800 rounded py-6">
                    <p className="text-xl px-8 text-gray-800 dark:text-gray-100 font-semibold leading-5">Support Chat</p>
                    <div className="sm:flex items-center justify-between pt-6 py-6 px-8">
                        <div className="flex">
                            <div className="w-10 h-10 border-2 rounded-full border-indigo-700">
                                <img alt="profile-pic" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="w-full h-full rounded-full object-cover object-center" />
                            </div>
                            <div className="w-10 h-10 border-2 rounded-full border-indigo-700 ml-5 relative">
                                <img alt="profile-pic" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="w-full h-full rounded-full object-cover object-center" />
                                <div className="flex items-center justify-center absolute top-0 -ml-1 -mt-1 w-3.5 h-3.5 bg-indigo-700 rounded-full">
                                    <p className="text-xs font-semibold leading-3 text-white">5</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 border-2 rounded-full border-indigo-700 ml-5 relative">
                                <img alt="profile-pic" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="w-full h-full rounded-full object-cover object-center" />
                                <div className="flex items-center justify-center absolute top-0 -ml-1 -mt-1 w-3.5 h-3.5 bg-indigo-700 rounded-full">
                                    <p className="text-xs font-semibold leading-3 text-white">3</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 border-2 rounded-full border-indigo-700 ml-5 relative">
                                <img alt="profile-pic" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="w-full h-full rounded-full object-cover object-center" />
                                <div className="flex items-center justify-center absolute top-0 -ml-1 -mt-1 w-3.5 h-3.5 bg-indigo-700 rounded-full">
                                    <p className="text-xs font-semibold leading-3 text-white">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end sm:mt-0 mt-4">
                            <p className="text-xs font-semibold leading-3 text-indigo-700 ml-5">view all</p>
                            <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338ca" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <line x1={15} y1={16} x2={19} y2={12} />
                                <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                        </div>
                    </div>
                    <hr className="w-full border-gray-400" />
                    <div className="px-4 h-96">
                        <div className="bg-gray-100 dark:bg-indigo-600 rounded-tl-xl rounded-tr-xl rounded-br-xl py-4 px-3 mt-5 mr-16">
                            <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Hi, I’m looking for some new products</p>
                        </div>
                        <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-1">5m ago</p>
                        <div className="flex flex-col items-end w-full justify-end">
                            <div className="border-gray-100 border rounded-tl-xl rounded-tr-xl rounded-bl-xl py-4 px-3 mt-5 ml-16">
                                <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Hi, I’m looking for some new products</p>
                            </div>
                            <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-1">5m ago</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-indigo-600 rounded-tl-xl rounded-tr-xl rounded-br-xl py-4 px-3 mt-5 mr-16">
                            <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Yea can you guide me to the best Alpha Products here?</p>
                        </div>
                        <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-1">2m ago</p>
                        <div className="flex flex-col items-end w-full justify-end">
                            <div className="border-gray-100 border rounded-tl-xl rounded-tr-xl rounded-bl-xl py-4 px-3 mt-5 ml-16">
                                <p className="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">Hi, I’m looking for some new products</p>
                            </div>
                            <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-1">Just now</p>
                        </div>
                    </div>
                    <div className="px-4 pt-8 sm:pt-0">
                        <div className="w-full h-12 border rounded-lg border-gray-400 dark:border-gray-200 border-opacity-50 flex items-center justify-between">
                            <div>
                                <input className="focus:outline-none px-5 w-full text-xs leading-3 bg-transparent text-gray-500" placeholder="Reply..." />
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 text-gray-500 dark:text-dark-400 cursor-pointer icon icon-tabler icon-tabler-paperclip" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                                </svg>
                                <button className="flex -mr-0.5 items-center justify-center w-11 h-12 bg-indigo-700 rounded-tr-lg rounded-br-lg cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21" fill="none">
                                        <path d="M0.946021 7.31504C0.424021 7.14104 0.419021 6.86004 0.956021 6.68104L20.043 0.31904C20.572 0.14304 20.875 0.43904 20.727 0.95704L15.273 20.043C15.123 20.572 14.818 20.59 14.594 20.088L11 12L17 4.00004L9.00002 10L0.946021 7.31504Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
