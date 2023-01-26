import React, { useState } from "react";
export default function IndexPage() {
    const [edit, setEdit] = useState(0);
    const [folder, setFolder] = useState(true);
    return (
        <>
            <div className>
                <div className="mx-auto container px-6">
                    <div className="flex pt-6 items-center">
                        <div className="cursor-pointer text-gray-900 dark:text-gray-100" onClick={() => setFolder(!folder)}>
                            {folder ? (
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Show" className="icon icon-tabler icon-tabler-chevron-down" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Hide" className=" icon icon-tabler icon-tabler-chevron-up" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>
                            )}
                        </div>
                        <h1 className="text-lg text-gray-900 dark:text-gray-100 font-semibold ml-3">Folders</h1>
                    </div>
                    {folder && (
                        <ul className="mt-8">
                            <div>
                                <div className="flex items-center w-full justify-between">
                                    <div className="flex items-center pb-6 border-b border-gray-300 dark:border-gray-200 cursor-pointer w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={46} height={38} viewBox="0 0 46 38" fill="none">
                                            <g filter="url(#filter0_d)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.4238 4.28135V2.15224C15.4238 0.963594 14.4565 0 13.2632 0H2.66058C1.46732 0 0.5 0.963594 0.5 2.15224V29.8477C0.5 31.0364 1.46732 32 2.66058 32H39.2282C40.4216 32 41.3889 31.0364 41.3889 29.8477V8.58601C41.3889 7.39727 40.4216 6.43368 39.2282 6.43368H17.5844C16.3912 6.43368 15.4238 5.47009 15.4238 4.28135Z" fill="#529FD9" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d" x="-3.5" y={-2} width="48.8889" height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dy={2} />
                                                    <feGaussianBlur stdDeviation={2} />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                        <h4 className="text-xl text-gray-800 dark:text-gray-100 pl-4">Assets</h4>
                                    </div>
                                    <div className="relative">
                                        {edit == 1 && (
                                            <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
                                                <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                                </ul>
                                            </div>
                                        )}

                                        <button className="text-gray-500 dark:text-gray-400 rounded cursor-pointer border border-transparent focus:outline-none">
                                            <svg
                                                onClick={() => {
                                                    edit == 0 ? setEdit(1) : setEdit(0);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-dots dropbtn"
                                                width={28}
                                                height={28}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={5} cy={12} r={1} />
                                                <circle cx={12} cy={12} r={1} />
                                                <circle cx={19} cy={12} r={1} />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center w-full justify-between mt-6">
                                <div className="flex items-center pb-6 border-b border-gray-300 dark:border-gray-200 cursor-pointer w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={46} height={38} viewBox="0 0 46 38" fill="none">
                                        <g filter="url(#filter0_d)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.4238 4.28135V2.15224C15.4238 0.963594 14.4565 0 13.2632 0H2.66058C1.46732 0 0.5 0.963594 0.5 2.15224V29.8477C0.5 31.0364 1.46732 32 2.66058 32H39.2282C40.4216 32 41.3889 31.0364 41.3889 29.8477V8.58601C41.3889 7.39727 40.4216 6.43368 39.2282 6.43368H17.5844C16.3912 6.43368 15.4238 5.47009 15.4238 4.28135Z" fill="#529FD9" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d" x="-3.5" y={-2} width="48.8889" height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset dy={2} />
                                                <feGaussianBlur stdDeviation={2} />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <h4 className="text-xl text-gray-800 dark:text-gray-100 pl-4">Images</h4>
                                </div>
                                <div className="relative">
                                    {edit == 2 && (
                                        <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                            </ul>
                                        </div>
                                    )}

                                    <button className="text-gray-500 dark:text-gray-400 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg
                                            onClick={() => {
                                                edit == 0 ? setEdit(2) : setEdit(0);
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-dots dropbtn"
                                            width={28}
                                            height={28}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={5} cy={12} r={1} />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
