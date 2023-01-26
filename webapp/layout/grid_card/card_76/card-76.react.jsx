import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden">
                <img className="w-full" src="https://i.ibb.co/vxWWdhp/kitty.png" alt srcSet />
                <div className="bg-white dark:bg-gray-800 rounded-b px-4 py-6">
                    <div className="flex items-start justify-between">
                        <p className="sm:text-base text-sm leading-6 md:leading-5 font-semibold text-gray-800 dark:text-gray-100 sm:w-2/3 sm:pr-0 pr-4">Taking Billy to the vet today, he doesn’t seem excited 😒</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-gray-700 dark:text-gray-400 icon icon-tabler icon-tabler-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx={5} cy={12} r={1} />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                        </svg>
                    </div>
                    <div className="flex items-center mt-6">
                        <div className="relative">
                            <div className="border-2 border-white w-4 h-4 bg-indigo-700 rounded-b absolute m-auto inset-0 -mr-1 mt-0" />
                            <img className="w-12" src="https://i.ibb.co/WnVgd7B/DP.png" alt srcSet />
                        </div>
                        <div className="ml-4">
                            <p className="sm:text-base font-semibold text-gray-800 dark:text-gray-100">Tolu Arowoselu</p>
                            <p className="sm:text-sm pt-1 text-gray-500 dark:text-gray-400">Activist</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
