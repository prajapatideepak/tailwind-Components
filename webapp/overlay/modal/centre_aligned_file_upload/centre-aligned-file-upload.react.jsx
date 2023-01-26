import React, { useState } from "react";
const Index = () => {
    const[modal, showModal] = useState(true);
    return (
        <div>
            <div className="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                {show && (
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative p-4 md:p-8 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                            <div className="w-full flex justify-center text-gray-600 dark:text-gray-400 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-upload" width={56} height={56} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                    <polyline points="7 9 12 4 17 9" />
                                    <line x1={12} y1={4} x2={12} y2={16} />
                                </svg>
                            </div>
                            <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">Upload Files</h1>
                            <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">Attach files for portfolio</p>
                            <div className="flex flex-col items-center justify-center w-full mb-8 border border-dashed border-indigo-700 rounded-lg py-8">
                                <div className="cursor-pointer mb-5 text-indigo-700 dark:text-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-upload" width={60} height={60} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                                        <polyline points="9 15 12 12 15 15" />
                                        <line x1={12} y1={12} x2={12} y2={21} />
                                    </svg>
                                </div>
                                <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center">Drag and drop here</p>
                                <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center my-1">or</p>
                                <label htmlFor="fileUp" className="cursor-pointer text-base font-normal tracking-normal text-indigo-700 dark:text-indigo-600 text-center">
                                    {" "}
                                    browse{" "}
                                </label>
                                <input type="file" className="hidden" name="fileUpload" id="fileUp" />
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="items-center text-gray-600 dark:text-gray-400 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    </svg>
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-base tracking-normal ml-2 mr-4">Big Project.pdf</p>
                                    <p className="text-gray-600 dark:text-gray-400 font-normal text-base tracking-normal">37%</p>
                                </div>
                                <div className="cursor-pointer text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mb-6 mt-4">
                                <hr className="h-1 rounded-sm bg-gray-200" />
                                <hr className="absolute top-0 h-1 w-5/12 rounded-sm bg-indigo-700" />
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="items-center text-gray-600 dark:text-gray-400 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    </svg>
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-base tracking-normal ml-2 mr-4">Big Project.pdf</p>
                                    <p className="text-gray-600 dark:text-gray-400 font-normal text-base tracking-normal">77%</p>
                                </div>
                                <div className="cursor-pointer text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mb-6 mt-4">
                                <hr className="h-1 rounded-sm bg-gray-200" />
                                <hr className="absolute top-0 h-1 w-9/12 rounded-sm bg-indigo-700" />
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="items-center text-gray-600 dark:text-gray-400 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    </svg>
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-base tracking-normal ml-2 mr-4">Big Project.pdf</p>
                                    <p className="text-gray-600 dark:text-gray-400 font-normal text-base tracking-normal">60%</p>
                                </div>
                                <div className="cursor-pointer text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mb-8 mt-4">
                                <hr className="h-1 rounded-sm bg-gray-200" />
                                <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                                <button className="focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick={()=>showModal(!modal)}>
                                    Cancel
                                </button>
                            </div>
                            <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:text-gray-400 transition duration-150 ease-in-out" onclick={()=>showModal(!modal)}>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full flex justify-center py-12 items-center" id="button">
                <button className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onclick={()=>showModal(!modal)}>
                    Open Modal
                </button>
            </div>
        </div>
    );
};
export default Index;
