import React from "react";
export default function IndexPage() {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden relative">
                <img className="w-full" src="https://i.ibb.co/2q4Q5PL/girl-water-masked.png" alt srcSet />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="sm:flex items-start justify-between">
                        <div className="flex items-center">
                            <div className="relative">
                                <img className="w-12" src="https://i.ibb.co/WnVgd7B/DP.png" alt srcSet />
                            </div>
                            <div className="ml-4">
                                <p className="text-base font-semibold text-white">John Connor</p>
                                <p className="text-sm text-white">45 mins ago</p>
                            </div>
                        </div>
                        <div className="mt-6 sm:mt-0 flex sm:block items-center">
                            <div className="flex items-center text-white sm:justify-end">
                                <p className="text-base font-semibold leading-9 text-right text-white">4.3K</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer ml-4 icon icon-tabler icon-tabler-heart" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                            </div>
                            <div className="flex items-center sm:justify-end text-white ml-4 sm:ml-0 sm:mt-2">
                                <p className="text-base font-semibold leading-9 text-right text-white">954</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer ml-4 icon icon-tabler icon-tabler-message-dots" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                    <line x1={12} y1={11} x2={12} y2="11.01" />
                                    <line x1={8} y1={11} x2={8} y2="11.01" />
                                    <line x1={16} y1={11} x2={16} y2="11.01" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
