import React, { useState } from "react";
export default function Index() {
    const [sidebar, Setsidebar] = useState(false);
    const [sidebarMobile, SetsidebarMobile] = useState(false);
    return (
        <>
            <div onClick={() => SetsidebarMobile(!sidebarMobile)} className="flex items-center justify-center rounded-r-md bg-gray-800 ml-0 cursor-pointer absolute inset-0 mt-4 md:mt-6 m-auto w-8 h-8 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div onClick={() => Setsidebar(!sidebar)} className="flex items-center justify-center rounded-r-md bg-gray-800 ml-0 cursor-pointer absolute inset-0 mt-4 md:mt-6 m-auto w-8 h-8 hidden lg:block">
                <svg className="m-auto mt-1" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="hidden lg:block">
                <div id="sidebar" className={sidebar ? "hidden" : "fixed lg:sticky h-full  min-h-screen  z-40 top-0 bg-gray-800 py-7 w-64"}>
                    <div className="px-7">
                        <div className="flex items-center justify-between">
                            <div className="w-32">
                                <img className="w-full" src="https://i.ibb.co/64K6sCW/Group-59.png" alt="logo" />
                            </div>
                            <div onClick={() => Setsidebar(!sidebar)} className="text-gray-700 ml-8 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-16">
                            <a href="javascript:void(0)">
                                <div className="flex items-center cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <rect x="3.33337" y="3.3335" width={5} height="13.3333" rx="1.66667" stroke="#374151" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="11.6666" y="3.3335" width={5} height="8.33333" rx="1.66667" stroke="#374151" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 text-sm font-bold text-white">Events</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div className="flex items-center mt-5 cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-transparent hover:bg-white text-gray-500 hover:text-gray-800 ease-in duration-150">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M12.5 4.1665V5.83317" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.5 9.1665V10.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.5 14.1665V15.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.16667 4.1665H15.8333C16.7538 4.1665 17.5 4.9127 17.5 5.83317V8.33317C16.5795 8.33317 15.8333 9.07936 15.8333 9.99984C15.8333 10.9203 16.5795 11.6665 17.5 11.6665V14.1665C17.5 15.087 16.7538 15.8332 15.8333 15.8332H4.16667C3.24619 15.8332 2.5 15.087 2.5 14.1665V11.6665C3.42047 11.6665 4.16667 10.9203 4.16667 9.99984C4.16667 9.07936 3.42047 8.33317 2.5 8.33317V5.83317C2.5 4.9127 3.24619 4.1665 4.16667 4.1665" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 font-normal text-sm text-gray-400 hover:text-white duration-150 ease-in">Sales</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div className="flex items-center mt-5 cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-transparent hover:bg-white text-gray-500 hover:text-gray-800 ease-in duration-150">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M3.33337 15.8337H16.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33337 12.5L6.66671 7.5L10 9.16667L13.3334 5L16.6667 8.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 font-normal text-sm text-gray-400 hover:text-white duration-150 ease-in">Analytics</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div className="flex items-center mt-5 cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-transparent hover:bg-white text-gray-500 hover:text-gray-800 ease-in duration-150">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <rect x="3.33337" y="4.16699" width="13.3333" height="13.3333" rx="1.66667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.3333 2.5V5.83333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.66667 2.5V5.83333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33337 9.16667H16.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="6.66663" y="12.5" width="1.66667" height="1.66667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 font-normal text-sm text-gray-400 hover:text-white duration-150 ease-in">Calendar</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <div id="sidebarMob" className={sidebarMobile ? "fixed lg:sticky h-full z-40 top-0 bg-gray-800 py-7 w-64 min-h-screen" : "hidden"}>
                    <div className="px-7">
                        <div className="flex items-center justify-between">
                            <div className="w-32">
                                <img className="w-full" src="https://i.ibb.co/64K6sCW/Group-59.png" alt="logo" />
                            </div>
                            <div onClick={() => SetsidebarMobile(!sidebarMobile)} className="text-gray-700 ml-8 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <path d="M3.33337 6.66667H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.33337 13.3332H16.6667" stroke="#A0AEC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-16">
                            <a href="javascript:void(0)">
                                <div className="flex items-center cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <rect x="3.33337" y="3.3335" width={5} height="13.3333" rx="1.66667" stroke="#374151" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="11.6666" y="3.3335" width={5} height="8.33333" rx="1.66667" stroke="#374151" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 text-sm font-bold text-white">Events</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div className="flex items-center mt-5 cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-transparent hover:bg-white text-gray-500 hover:text-gray-800 ease-in duration-150">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M12.5 4.1665V5.83317" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.5 9.1665V10.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.5 14.1665V15.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.16667 4.1665H15.8333C16.7538 4.1665 17.5 4.9127 17.5 5.83317V8.33317C16.5795 8.33317 15.8333 9.07936 15.8333 9.99984C15.8333 10.9203 16.5795 11.6665 17.5 11.6665V14.1665C17.5 15.087 16.7538 15.8332 15.8333 15.8332H4.16667C3.24619 15.8332 2.5 15.087 2.5 14.1665V11.6665C3.42047 11.6665 4.16667 10.9203 4.16667 9.99984C4.16667 9.07936 3.42047 8.33317 2.5 8.33317V5.83317C2.5 4.9127 3.24619 4.1665 4.16667 4.1665" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 font-normal text-sm text-gray-400 hover:text-white duration-150 ease-in">Sales</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div className="flex items-center mt-5 cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-transparent hover:bg-white text-gray-500 hover:text-gray-800 ease-in duration-150">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M3.33337 15.8337H16.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33337 12.5L6.66671 7.5L10 9.16667L13.3334 5L16.6667 8.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 font-normal text-sm text-gray-400 hover:text-white duration-150 ease-in">Analytics</p>
                                </div>
                            </a>
                            <a href="javascript:void(0)">
                                <div className="flex items-center mt-5 cursor-pointer">
                                    <div className="px-1 py-1 rounded-sm bg-transparent hover:bg-white text-gray-500 hover:text-gray-800 ease-in duration-150">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <rect x="3.33337" y="4.16699" width="13.3333" height="13.3333" rx="1.66667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.3333 2.5V5.83333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.66667 2.5V5.83333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33337 9.16667H16.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="6.66663" y="12.5" width="1.66667" height="1.66667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="ml-2 font-normal text-sm text-gray-400 hover:text-white duration-150 ease-in">Calendar</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
