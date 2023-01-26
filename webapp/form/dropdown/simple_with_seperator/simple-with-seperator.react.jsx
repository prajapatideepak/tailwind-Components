import React, { useState } from "react";
const Index = () => {
    const [show, setShow] = useState();

    return (
        <div className="mx-auto pt-6 pb-10">
            <div className="container flex justify-center mx-auto py-6">
                <div className="h-56 mb-32">
                    {/* Code block starts */}
                    <div className="relative">
                        <div className="bg-white dark:bg-gray-800 flex justify-between border dark:border-gray-700 rounded w-40 cursor-pointer" onClick={() => setShow(!show)}>
                            <p className="pl-3 py-3 text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">Basic Options</p>
                            <div className="bg-white dark:bg-gray-800 items-center flex rounded-r border-gray-300 dark:border-gray-700 border-l">
                                <div className="text-gray-600 dark:text-gray-400 mx-3">
                                    {show ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className=" icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                        {show && (
                            <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute">
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Interface Settings</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Color Theme</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Wallpaper</li>
                                <li>
                                    <hr className="my-1 border-gray-200 dark:border-gray-700" />
                                </li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Account Data</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Sign Out</li>
                                <li>
                                    <hr className="my-1 border-gray-200 dark:border-gray-700" />
                                </li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Delete Account</li>
                            </ul>
                        )}
                    </div>
                    {/* Code block ends */}
                </div>
            </div>
        </div>
    );
};
export default Index;
