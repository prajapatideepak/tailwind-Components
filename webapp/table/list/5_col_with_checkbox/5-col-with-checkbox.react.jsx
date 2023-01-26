import React, { useState } from "react";
export default function IndexPage() {
    const [edit, setEdit] = useState(0);

    let flag = true;
    function checkAll() {
        if (flag) {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.remove("hidden");
            });
            flag = false;
        } else {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.add("hidden");
            });
            flag = true;
        }
    }
    return (
        <>
            <div className="mx-auto container py-20">
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                            <tr className="w-full h-16 bg-gray-800 dark:bg-gray-200 py-8">
                                <th className="rounded-l-lg pl-3 w-12 text-gray-300 dark:text-gray-700 font-normal text-left tracking-normal leading-4 opacity-0">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </th>
                                <th className="text-gray-300 dark:text-gray-700 font-normal pr-6 text-left tracking-normal leading-4">
                                    <div className="bg-gray-800 dark:bg-gray-200 border rounded-sm border-gray-300 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative" onClick={() => checkAll()}>
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </th>
                                <th className="text-gray-300 dark:text-gray-700 font-normal pr-6 text-left tracking-normal leading-4">Project Title</th>
                                <th onclick="goToTodos()" className="cursor-pointer text-gray-300 dark:text-gray-700 font-normal pr-6 text-left tracking-normal leading-4">
                                    Todos
                                </th>
                                <th className="cursor-pointer text-gray-300 dark:text-gray-700 font-normal pr-6 text-left tracking-normal leading-4">Notes</th>
                                <th className="cursor-pointer text-gray-300 dark:text-gray-700 font-normal pr-6 text-left tracking-normal leading-4">Links</th>
                                <th className="cursor-pointer text-gray-300 dark:text-gray-700 font-normal pr-6 text-left tracking-normal leading-4">Files</th>
                                <th className="text-gray-300 dark:text-gray-700 font-normal pr-6 text-left tracking-normal leading-4">Collaborators</th>
                                <th className="rounded-r-lg text-gray-300 dark:text-gray-700 font-normal pr-8 text-left tracking-normal leading-4">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 1 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 2 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 3 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(3) : setEdit(0);
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 4 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(4) : setEdit(0);
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 5 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(5) : setEdit(0);
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 6 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(6) : setEdit(0);
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 7 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(7) : setEdit(0);
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 8 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(8) : setEdit(0);
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 9 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(9) : setEdit(0);
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
                                </td>
                            </tr>
                            <tr className="h-20 border-gray-300 dark:border-gray-700 border-b">
                                <td className="pl-3 text-gray-600 dark:text-gray-400 font-normal text-left tracking-normal leading-4">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-3 icon icon-tabler icon-tabler-dots-vertical" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                        </svg>
                                    </div>
                                </td>
                                <td className="pr-6 text-left whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div className="check-icon hidden bg-yellow-400 text-white rounded-sm">
                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm pr-10 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <a href="javascript:void(0)">User Experience Design Revamp</a>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">08</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">03</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">05</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4 font-semibold">06</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="flex items-center flex-no-wrap">
                                        <div className="w-8 h-8 bg-cover bg-center rounded-md">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                        <div className="w-8 h-8 bg-cover rounded-md bg-center -ml-2">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-8 relative">
                                    {edit == 10 && (
                                        <div className="mt-8 absolute left-0 -ml-12 shadow-md z-10  w-32">
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
                                                edit == 0 ? setEdit(10) : setEdit(0);
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <style>
                    {`
        .checkbox:checked+.check-icon {
            display: flex;
        }
        body {
            font-family: "Lato", sans-serif;
        }`}
                </style>
            </div>
        </>
    );
}
