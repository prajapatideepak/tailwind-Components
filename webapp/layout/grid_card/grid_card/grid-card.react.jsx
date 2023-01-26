import React, { useState } from "react";
import Head from "next/head";

function Index() {
    const [show, setShow] = useState(null);
    return (
        <>
            <div className="shadow rounded-lg p-3 sm:p-6 max-w-md w-full">
                <div className="flex items-center">
                    <p className="text-base font-semibold leading-none text-gray-800">Shared Files</p>
                    <button className="ml-3 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M12 10L8 6L4 10" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="mt-5">
                    <div className="bg-white rounded shadow py-2 px-2">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-red-400 rounded-sm flex items-center justify-center">
                                    <p className="text-xs font-bold leading-3 text-white">PPT</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">Wireframes.ppt</p>
                                    <p className="text-xs leading-3 text-gray-500 mt-2">Shared by Ryan Renolds</p>
                                </div>
                            </div>
                            <div className="relative">
                                {show == 0 ? (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(null)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(0)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                )}
                                {show == 0 && (
                                    <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow py-2 px-2 mt-3">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                                    <p className="text-xs font-bold leading-3 text-white">DOC</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">Project Outline.doc</p>
                                    <p className="text-xs leading-3 text-gray-500 mt-2">Shared by Ashley Wilson</p>
                                </div>
                            </div>
                            <div className="relative">
                                {show == 1 ? (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(null)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(1)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                )}
                                {show == 1 && (
                                    <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow py-2 px-2 mt-3">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                                    <p className="text-xs font-bold leading-3 text-white">FIG</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">Project Outline.doc</p>
                                    <p className="text-xs leading-3 text-gray-500 mt-2">Shared by Ashley Wilson</p>
                                </div>
                            </div>
                            <div className="relative">
                                {show == 2 ? (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(null)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(2)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                )}
                                {show == 2 && (
                                    <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow py-2 px-2 mt-3">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-red-400 rounded-sm flex items-center justify-center">
                                    <p className="text-xs font-bold leading-3 text-white">PPT</p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">Wireframes.ppt</p>
                                    <p className="text-xs leading-3 text-gray-500 mt-2">Shared by Ryan Renolds</p>
                                </div>
                            </div>
                            <div className="relative">
                                {show == 3 ? (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(null)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button className="focus:outline-none">
                                        <svg onClick={() => setShow(3)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                )}
                                {show == 3 && (
                                    <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Edit</p>
                                        </div>
                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
