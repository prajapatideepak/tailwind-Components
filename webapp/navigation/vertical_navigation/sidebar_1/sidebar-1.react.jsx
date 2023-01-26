import Link from "next/link";
import { useState, useEffect } from "react";

const Index = ({ listing }) => {
    const [list, setList] = useState(null);
    const [toggleSidebar, setToggleSidebar] = useState(true);

    return (
        <div>
            {/* Mobile below */}
            <div className={(toggleSidebar ? "sidebar " : " ") + "pt-12 overflow-y-scroll fixed left-0 h-79vh h-full w-80 xl:w-64 xl:mr-6 2xl:pr-12 2xl:mr-12 pr-6 border-r-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 xl:pl-0 z-20 top-0 pt-10 transition-transform duration-150 ease-in-out xl:hidden"}>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm xl:text-lg font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">Web application UI</p>
                        <div onClick={() => setToggleSidebar(true)} className="text-gray-800 dark:text-gray-50 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className={"pt-8"}>
                            <div onClick={() => (list === 0 ? setList(null) : setList(0))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Master layouts</p>
                                <button className="focus:outline-none">
                                    <svg className={list === 0 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={list === 0 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                </button>
                            </div>

                            <div className={list === 0 ? "pl-2 block" : "hidden"}>
                                <div className="flex flex-col">
                                    <div className="h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Boxed layout</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                    </div>
                                    <div className="border-l-4 border-gray-800 h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Sidebar layout</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"pt-8"}>
                            <div onClick={() => (list === 3 ? setList(null) : setList(3))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Layout</p>
                                <button className="focus:outline-none">
                                    <svg className={list === 3 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={list === 3 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                </button>
                            </div>

                            <div className={list === 3 ? "pl-2 block" : "hidden"}>
                                <div className="flex flex-col">
                                    <div className="h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Grid</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                    </div>
                                    <div className="border-l-4 border-gray-800 h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Grid card</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">11</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"pt-8"}>
                            <div onClick={() => (list === 1 ? setList(null) : setList(1))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Navigation</p>
                                <button className="focus:outline-none">
                                    <svg className={list === 1 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={list === 1 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                </button>
                            </div>

                            <div className={list === 1 ? "pl-2 block" : "hidden"}>
                                <div className="flex flex-col">
                                    <div className="h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Horizontal navigation</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">4</p>
                                    </div>
                                    <div className="border-l-4 border-gray-800 h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Vertical navigation</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">8</p>
                                    </div>
                                    <div className="border-l-4 border-gray-800 h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Pagination</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"pt-8"}>
                            <div onClick={() => (list === 2 ? setList(null) : setList(2))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Heading</p>
                                <button className="focus:outline-none">
                                    <svg className={list === 2 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className={list === 2 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                </button>
                            </div>

                            <div className={list === 2 ? "pl-2 block" : "hidden"}>
                                <div className="flex flex-col">
                                    <div className="h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Page heading</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                    </div>
                                    <div className="border-l-4 border-gray-800 h-6" />
                                    <div className="flex items-stretch justify-between">
                                        <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Card heading</button>
                                        <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setToggleSidebar(false)} className="fixed flex justify-center items-center bg-gray-800 dark:bg-gray-50 text-gray-50 dark:text-gray-800 rounded-r-lg w-8 h-8 xl:hidden mt-0 left-0 top-0 mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                </svg>
            </div>

            {/* Desktop below */}
            <div className="hidden xl:block">
                <div className="d-sidebar w-80 xl:w-64 2xl:w-96 px-12 mr-12" />
                <div className={"d-sidebar pt-16 fixed overflow-y-auto h-79vh h-full w-80 xl:w-64 2xl:w-96 xl:mr-6 2xl:pr-12 2xl:mr-12 pr-6 border-r-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 xl:pl-12 z-0 top-0 pt-10 transition-transform duration-150 ease-in-out"}>
                    <div>
                        <p className="text-sm xl:text-lg font-bold leading-tight tracking-tight text-gray-600 dark:text-gray-400 capitalize">Web application UI</p>
                        <div>
                            <div className={"pt-8"}>
                                <div onClick={() => (list === 0 ? setList(null) : setList(0))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                    <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Master layouts</p>
                                    <button className="focus:outline-none">
                                        <svg className={list === 0 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg className={list === 0 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={list === 0 ? "pl-2 block" : "hidden"}>
                                    <div className="flex flex-col">
                                        <div className="h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Boxed layout</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                        </div>
                                        <div className="border-l-4 border-gray-800 h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Sidebar layout</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"pt-8"}>
                                <div onClick={() => (list === 3 ? setList(null) : setList(3))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                    <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Layout</p>
                                    <button className="focus:outline-none">
                                        <svg className={list === 3 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg className={list === 3 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={list === 3 ? "pl-2 block" : "hidden"}>
                                    <div className="flex flex-col">
                                        <div className="h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Grid</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                        </div>
                                        <div className="border-l-4 border-gray-800 h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Grid card</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">11</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"pt-8"}>
                                <div onClick={() => (list === 1 ? setList(null) : setList(1))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                    <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Navigation</p>
                                    <button className="focus:outline-none">
                                        <svg className={list === 1 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg className={list === 1 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={list === 1 ? "pl-2 block" : "hidden"}>
                                    <div className="flex flex-col">
                                        <div className="h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Horizontal navigation</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">4</p>
                                        </div>
                                        <div className="border-l-4 border-gray-800 h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Vertical navigation</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">8</p>
                                        </div>
                                        <div className="border-l-4 border-gray-800 h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Pagination</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"pt-8"}>
                                <div onClick={() => (list === 2 ? setList(null) : setList(2))} className="cursor-pointer flex w-full justify-between pb-3 border-b-2 border-gray-200 dark:border-gray-800">
                                    <p className="select-none text-sm xl:text-lg leading-tight tracking-tight text-gray-800 dark:text-gray-400 capitalize">Heading</p>
                                    <button className="focus:outline-none">
                                        <svg className={list === 2 ? "hidden" : "text-gray-800 dark:text-gray-400 "} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg className={list === 2 ? "text-gray-800 dark:text-gray-400" : "hidden"} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={list === 2 ? "pl-2 block" : "hidden"}>
                                    <div className="flex flex-col">
                                        <div className="h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Page heading</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">13</p>
                                        </div>
                                        <div className="border-l-4 border-gray-800 h-6" />
                                        <div className="flex items-stretch justify-between">
                                            <button className={"text-left focus:outline-none pl-3 border-l-4 border-gray-800 focus:border-brand dark:focus:border-brand dark:text-gray-100 text-gray-800 focus:text-brand dark:focus:text-brand hover:text-brand hover:border-brand dark:hover:text-brand flex w-full text-sm xl:text-lg leading-tight tracking-tight capitalize"}>Card heading</button>
                                            <p className="text-lg leading-tight tracking-tight text-gray-900 dark:text-gray-400">6</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
            .sidebar {
    transform: translateX(-320px);
}
@media (min-width: 1280px) {
    .sidebar {
        transform: translateX(0px);
    }
}

            `}</style>
        </div>
    );
};
export default Index;
