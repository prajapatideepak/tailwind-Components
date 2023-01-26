import React, { useState } from "react";
function Index() {
    const [activeStatus, setActiveStatus] = useState(0);
    return (
        <>
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="w-full bg-white dark:bg-gray-800 shadow rounded">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row p-8 justify-between items-start sm:items-center w-full">
                    <h2 className="text-lg leading-4 font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-0">Job Postings</h2>
                    <div className="mt-4 -mb-4 sm:hidden relative w-full z-10">
                        <div className="absolute inset-0 m-auto mr-4 z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 9 12 5 16 9" />
                                <polyline points="16 15 12 19 8 15" />
                            </svg>
                        </div>
                        <select aria-label="Selected tab" className="form-select block w-full py-2 px-3 border border-gray-300 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive </option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive </option>
                            <option selected className="text-sm text-gray-600 dark:text-gray-400">
                                Active
                            </option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive </option>
                            <option className="text-sm text-gray-600 dark:text-gray-400">Inactive </option>
                        </select>
                    </div>
                    <ul className="hidden sm:flex items-start sm:items-center">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-gray-200 text-indigo-700 text-sm" : "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-white dark:text-gray-800 text-gray-500 text-sm cursor-pointer"}>
                            {activeStatus == 1 ? "Active" : "Inactive"}
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-gray-200 text-indigo-700 text-sm" : "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-white dark:text-gray-800 text-gray-500 text-sm cursor-pointer"}>
                            {activeStatus == 2 ? "Active" : "Inactive"}
                        </li>
                        <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-gray-200 text-indigo-700 text-sm" : "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-white dark:text-gray-800 text-gray-500 text-sm cursor-pointer"}>
                            {activeStatus == 3 ? "Active" : "Inactive"}
                        </li>
                        <li onClick={() => setActiveStatus(4)} className={activeStatus == 4 ? "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-gray-200 text-indigo-700 text-sm" : "font-normal flex justify-center items-center w-16 h-8 rounded mr-4 sm:mr-0 sm:ml-4 bg-white dark:text-gray-800 text-gray-500 text-sm cursor-pointer"}>
                            {activeStatus == 4 ? "Active" : "Inactive"}
                        </li>
                    </ul>
                </div>
                <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:text-gray-800">
                        <thead>
                            <tr className="w-full h-16 border-gray-300 border-b">
                                <th className="pl-8 pr-16 text-left">
                                    <div className="py-4 flex items-center">
                                        <div className="bg-white dark:text-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                            <input id="checkAll" aria-label="Check All" type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 pr-16 text-left text-base tracking-normal leading-4 py-8">Name</th>
                                <th className="text-gray-600 dark:text-gray-400 pr-16 text-left text-base tracking-normal leading-4 py-8">Date</th>
                                <th className="text-gray-600 dark:text-gray-400 pr-24 text-left text-base tracking-normal leading-4 py-8">Amount</th>
                                <th className="text-gray-600 dark:text-gray-400 pr-10 text-left text-base tracking-normal leading-4 py-8">Status</th>
                                <th className="text-gray-600 dark:text-gray-400 pr-8 text-left text-base tracking-normal leading-4 py-8">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-24 border-gray-300 border-b">
                                <td className="pl-8 pr-16 text-left whitespace-no-wrap">
                                    <div className="py-4 flex items-center">
                                        <div className="bg-white dark:text-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                            <input aria-label="Check row" type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base pr-16 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                                <td className="text-base pr-16 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                                <td className="text-base pr-24 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                                <td className="pr-10">
                                    <div className="w-full flex justify-start items-center h-full">
                                        <div className="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                                    </div>
                                </td>
                                <td className="pr-8">
                                    <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                                </td>
                            </tr>
                            <tr className="h-24 border-gray-300 border-b">
                                <td className="pl-8 pr-16 text-left">
                                    <div className="py-4 flex items-center">
                                        <div className="bg-white dark:text-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                            <input aria-label="Check row" type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                                <td className="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                                <td className="text-base pr-24 text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                                <td className="pr-10">
                                    <div className="w-full flex justify-start items-center h-full">
                                        <div className="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                                    </div>
                                </td>
                                <td className="pr-8">
                                    <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                                </td>
                            </tr>
                            <tr className="h-24 border-gray-300 border-b">
                                <td className="pl-8 pr-16 text-left">
                                    <div className="py-4 flex items-center">
                                        <div className="bg-white dark:text-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                            <input aria-label="Check row" type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                                <td className="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                                <td className="text-base pr-24 text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                                <td className="pr-10">
                                    <div className="w-full flex justify-start items-center h-full">
                                        <div className="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                                    </div>
                                </td>
                                <td className="pr-8">
                                    <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                                </td>
                            </tr>
                            <tr className="h-24">
                                <td className="pl-8 pr-16 text-left">
                                    <div className="py-4 flex items-center">
                                        <div className="bg-white dark:text-gray-800 border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                            <input aria-label="Check row" type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">Ralph Lauren</td>
                                <td className="text-base pr-16 text-gray-800 dark:text-gray-100 tracking-normal leading-4">28 March ’20</td>
                                <td className="text-base pr-24 text-gray-800 dark:text-gray-100 tracking-normal leading-4">$200</td>
                                <td className="pr-10">
                                    <div className="w-full flex justify-start items-center h-full">
                                        <div className="bg-green-200 text-green-500 rounded-full text-sm leading-3 py-2 px-5">Active</div>
                                    </div>
                                </td>
                                <td className="pr-8">
                                    <button class="focus:outline-none bg-gray-100 dark:bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 rounded border border-gray-300 dark:border-gray-200 text-gray-700 dark:text-gray-400 px-6 py-2 text-xs">Action</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Index;
