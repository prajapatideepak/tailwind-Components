import React, { useState } from "react";
const Index = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="mx-auto py-6">
            <div className="container flex justify-center mx-auto my-6">
                <div className="h-56 mb-32 -ml-32">
                    {/* Code block starts */}
                    <div className="relative">
                        <div className="cursor-pointer text-gray-600 dark:text-gray-400" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                        </div>
                        {show && (
                            <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded py-1 w-48 absolute">
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Interface Settings</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Color Theme</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Wallpaper</li>
                                <li>
                                    <hr className="border-gray-200 dark:border-gray-700 my-1" />
                                </li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Account Data</li>
                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Sign Out</li>
                                <li>
                                    <hr className="border-gray-200 dark:border-gray-700 my-1" />
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
