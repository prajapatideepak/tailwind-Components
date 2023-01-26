import React, { useState } from "react";
const Index = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="relative">
            <div className="bg-white dark:bg-gray-800 flex justify-between border rounded w-40" onClick={() => setShow(!show)}>
                <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">Basic Options</p>
                <div className="bg-white dark:bg-gray-800 items-center flex rounded-r border-gray-300 border-l">
                    <div className="cursor-pointer text-gray-600 dark:text-gray-400 mx-3">
                        {show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            {show && (
                <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800  shadow rounded mt-2 py-1 w-48 absolute">
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                            <line x1={3} y1={6} x2={3} y2={19} />
                            <line x1={12} y1={6} x2={12} y2={19} />
                            <line x1={21} y1={6} x2={21} y2={19} />
                        </svg>
                        <span className="ml-2 font-normal">Interface Settings</span>
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                            <rect x={9} y={3} width={6} height={4} rx={2} />
                        </svg>
                        <span className="ml-2 font-normal">Color Theme</span>
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                            <circle cx={12} cy={12} r={9} />
                        </svg>
                        <span className="ml-2 font-normal">Wallpaper</span>
                    </li>
                    <li>
                        <hr className="border-gray-200 dark:border-gray-700 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={7} y={4} width={10} height={16} rx={1} />
                            <line x1={11} y1={5} x2={13} y2={5} />
                            <line x1={12} y1={17} x2={12} y2="17.01" />
                        </svg>
                        <span className="ml-2">Notifications</span>
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                            <circle cx={9} cy={9} r={2} />
                        </svg>
                        <span className="ml-2">Account Data</span>
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                        <span className="ml-2">Sign Out</span>
                    </li>
                </ul>
            )}
        </div>
    );
};
export default Index;
