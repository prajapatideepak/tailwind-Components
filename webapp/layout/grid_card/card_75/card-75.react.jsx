import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-sm rounded">
                <div className="bg-white dark:bg-gray-800 rounded-t flex justify-between items-center p-6">
                    <div className="flex items-center">
                        <img className="w-10" src="https://i.ibb.co/WnVgd7B/DP.png" alt srcSet />
                        <p className="ml-4 text-base font-semibold leading-4 text-gray-800 dark:text-gray-100">Tolu Arowoselu</p>
                    </div>
                    <p className="text-base font-medium leading-loose text-right text-gray-500 dark:text-gray-400">30m</p>
                </div>
                <img className="w-full" src="https://i.ibb.co/vZBjRPQ/puppy.png" alt srcSet />
                <div className="bg-white dark:bg-gray-800 flex w-full items-center px-6 py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-900 opacity-50 icon icon-tabler icon-tabler-message-dots" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                        <line x1={12} y1={11} x2={12} y2="11.01" />
                        <line x1={8} y1={11} x2={8} y2="11.01" />
                        <line x1={16} y1={11} x2={16} y2="11.01" />
                    </svg>
                    <p className="ml-3 text-lg leading-loose text-gray-500 dark:text-gray-400">14 Comments</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-b flex w-full items-center px-6 py-5 border-t-2 border-gray-200 dark:border-gray-900">
                    <input type="text" className="text-lg bg-transparent leading-4 text-gray-500 dark:text-gray-400 w-full focus:outline-none" placeholder="Your comment" />
                </div>
            </div>
        </>
    );
}
