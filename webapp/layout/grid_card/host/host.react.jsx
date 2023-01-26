import React from "react";
export default function Index() {
    return (
        <div className="flex items-center justify-center py-8 px-4 dark:bg-gray-900">
            <div className="mt-14 md:w-1/3 dark:bg-gray-800 p-4 rounded">
                <p className="text-lg leading-none text-gray-800 dark:text-gray-100">This event will be hosted on</p>
                <div className="flex w-full items-center justify-between mt-6">
                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/zoom.png" alt="zoom-logo" />
                    <div className="py-2 px-2 bg-indigo-700 hover:bg-indigo-600 ease-in duration-150 cursor-pointer rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <circle cx={12} cy={13} r={7} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 10V13H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 4L4.25 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 4L19.75 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
