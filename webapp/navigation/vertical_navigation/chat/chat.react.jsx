import React, { useState } from "react";
import Head from "next/head";

function Index() {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    return (
        <>
            <div className="w-80 md:pl-10 pl-4 py-8">
                <div>
                    <div className="flex items-center pl-3 bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                            <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 14L10 10" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input type="text" className="py-3 pl-1 w-full focus:outline-none text-sm font-medium text-gray-600 bg-transparent placeholder-gray-600" placeholder="Search" />
                    </div>
                    <div className="flex items-center mt-5">
                        <button className="focus:outline-none flex items-center justify-center px-3 py-2 bg-indigo-100 rounded-full text-sm leading-none text-indigo-700">All</button>
                        <button className="focus:outline-none flex items-center justify-center px-3 py-2 ml-7 hover:bg-indigo-100 bg-transparent hover:text-indigo-700 rounded-full text-sm leading-none text-gray-600">Unread</button>
                        <button className="focus:outline-none flex items-center justify-center px-3 py-2 ml-7 bg-transparent hover:bg-indigo-100 hover:text-indigo-700 rounded-full text-sm leading-none text-gray-600">Channels</button>
                    </div>
                </div>
                <div className="pt-9 pb-4">
                    <div className="flex items-center">
                        <p className="text-xs font-medium leading-3 text-gray-600 pr-2">PINNED</p>
                        <div className="focus:outline-none cursor-pointer" onClick={() => setShow2(!show2)}>
                            {show2 ? (
                                <div>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6L8 10L12 6" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            ) : (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M12 10L8 6L4 10" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                    {show2 && (
                        <div className="mt-4">
                            <button className="focus:outline-none py-3 hover:bg-gray-100 focus:bg-gray-100 xl:pl-4 w-full rounded flex items-center">
                                <p className="text-sm font-medium leading-none text-gray-800">#Visual Design</p>
                            </button>
                            <button className="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                                <p className="text-sm font-medium leading-none text-gray-800">#Finance</p>
                            </button>
                        </div>
                    )}
                </div>
                <div className="mt-10">
                    <div className="flex items-center">
                        <p className="text-xs font-medium leading-3 text-gray-600 pr-2">CHANNELS</p>
                        <div className="focus:outline-none cursor-pointer" onClick={() => setShow1(!show1)}>
                            {show1 ? (
                                <div>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6L8 10L12 6" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            ) : (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M12 10L8 6L4 10" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                    {show1 && (
                        <div className="mt-4">
                            <button className="focus:outline-none py-3 hover:bg-gray-100 focus:bg-gray-100 xl:pl-4 w-full rounded flex items-center">
                                <p className="text-sm font-medium leading-none text-gray-800">#Visual Design</p>
                            </button>
                            <button className="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                                <p className="text-sm font-medium leading-none text-gray-800">#Finance</p>
                            </button>
                            <button className="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                                <p className="text-sm font-medium leading-none text-gray-800">#Project Olympus</p>
                            </button>
                            <button className="focus:outline-none mt-1 py-3 xl:pl-4 hover:bg-gray-100 focus:bg-gray-100 w-full rounded flex items-center">
                                <p className="text-sm font-medium leading-none text-gray-800">#Frontend Devs</p>
                            </button>
                        </div>
                    )}
                </div>
                <div className="mt-10 pb-10">
                    <div className="flex items-center">
                        <p className="text-xs font-medium leading-3 text-gray-600 pr-2">Messages</p>
                        <div className="focus:outline-none cursor-pointer" onClick={() => setShow3(!show3)}>
                            {show3 ? (
                                <div>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6L8 10L12 6" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            ) : (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M12 10L8 6L4 10" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                    {show3 && (
                        <div className="mt-4">
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(6).png" />
                                <div className="ml-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">James Hart</p>
                                    <p className="mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-7">
                                <img className="w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(7).png" />
                                <div className="ml-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">Ronald McDonald</p>
                                    <p className="mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-7">
                                <img className="w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(8).png" />
                                <div className="ml-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">Amanda Mathison</p>
                                    <p className="mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-7">
                                <img className="w-10 h-10 rounded-full shadow-md" src="https://cdn.tuk.dev/assets/templates/olympus/chats(9).png" />
                                <div className="ml-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">Josh Cleveland</p>
                                    <p className="mt-2 text-xs leading-none text-gray-600">Let’s catchup sometime later?</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Index;
