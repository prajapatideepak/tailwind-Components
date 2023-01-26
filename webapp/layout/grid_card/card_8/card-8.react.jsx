import React from "react";
export default function Index() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded shadow-lg py-4 px-5 bg-white dark:bg-gray-800">
                    <h1 className="text-lg font-bold leading-4 text-gray-800 dark:text-gray-100">UX optimization and UI design</h1>
                    <h2 className="pt-2 text-xs leading-3 dark:text-gray-400 text-gray-600 dark:text-gray-500">Client: Imaginary Company LLC</h2>
                    <p className="pt-4 text-xs leading-4 text-gray-600 dark:text-gray-500">Join Tailwind UI Kit’s discord community and kickstart your next project with beautiful, accessible user interfaces.</p>
                    <div className="flex items-center pt-4">
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
                        <div className="w-6 h-6 mr-1 border-dashed border flex items-center justify-center cursor-pointer rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#D1D5DB" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-sm font-semibold text-indigo-700 leading-none text-right pb-1">73%</p>
                    </div>
                    <div className="w-full h-2 relative bg-gray-200 rounded-full">
                        <div className="h-2 w-60 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 rounded-full" />
                    </div>
                    <button className="focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5">View Project Details</button>
                </div>
            </div>
        </>
    );
}
