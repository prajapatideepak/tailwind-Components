import React from "react";
export default function Index() {
    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="md:w-96 rounded shadow-lg py-4 px-5 bg-white dark:bg-gray-800">
                    <img alt="img" src="https://i.ibb.co/PZ5xwTG/Rectangle-362.png" className="w-full" />
                    <h1 className="text-lg font-bold leading-6 text-black  dark:text-gray-100 pt-3">How minimalism has changed the world of design </h1>
                    <div className="pt-3 flex items-center justify-between">
                        <p className="text-xs leading-3 underline cursor-pointer text-blue-500">Read article</p>
                        <div className="flex items-center">
                            <div className="pr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4B5563" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                                </svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EF4444" fill="#EF4444" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
