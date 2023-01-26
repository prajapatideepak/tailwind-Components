import React, { useState } from "react";
export default function IndexPage() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded shadow-lg py-4 px-5 dark:bg-gray-800 bg-white">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center mb-4 lg:mb-0 mr-10">
                            <div className="w-14 h-14 bg-cover rounded-md mr-3">
                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                            </div>
                            <div>
                                <p className="text-sm font-bold leading-4 text-gray-800 dark:text-gray-100">Steve Doe</p>
                                <p
                                    className="text-xs leading-3 text-gray-500 
                                dark:text-gray-400 pt-2"
                                >
                                    Sales Representative
                                </p>
                            </div>
                        </div>
                        <div className="cursor-pointer relative" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A1A1AA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx={5} cy={12} r={1} />
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                            </svg>
                            {show && (
                                <ul className="dark:bg-gray-800 bg-white shadow rounded z-40 py-1 w-32 -ml-24 left-0 mt-8  absolute  top-0">
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Landing Pages</li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Templates</li>
                                    <li className="cursor-pointer text-gray-600 dark:text-gray-100 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Components</li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <p className="pt-4 text-xs leading-4 text-gray-600">Quia odit qui officiis molestiae. Ut qui fugit labore ut. Sed vel quam sit. Rerum molestiae ut doloribus nostrum et.</p>
                    <p className="text-xs font-medium leading-3 pt-5 text-indigo-700">CONNECTIONS</p>
                    <div className="flex items-center pt-2 pb-2.5">
                        <div className="w-6 h-6 mr-1 shadow rounded-full">
                            <img alt="img-1" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="w-full h-full object-cover object-center rounded-full" />
                        </div>
                        <div className="w-6 h-6 mr-1 shadow rounded-full">
                            <img alt="img-1" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" className="w-full h-full object-cover object-center rounded-full" />
                        </div>
                        <div className="w-6 h-6 mr-1 shadow rounded-full">
                            <img alt="img-1" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full object-cover object-center rounded-full" />
                        </div>
                        <div className="w-6 h-6 mr-1 shadow rounded-full">
                            <img alt="img-1" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full object-cover object-center rounded-full" />
                        </div>
                    </div>
                    <div className="flex items-end justify-end">
                        <button className="text-xs font-medium leading-3 text-white py-3 px-4 rounded bg-indigo-700 focus:outline-none hover:opacity-90">Send a message</button>
                    </div>
                </div>
            </div>
        </>
    );
}
